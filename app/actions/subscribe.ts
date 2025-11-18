"use server";

import { z } from "zod";

const subscribeSchema = z.object({
  firstName: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  lastName: z.string().min(2, "Il cognome deve avere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  phone: z
    .string()
    .min(8, "Inserisci un numero di telefono valido")
    .regex(
      /^\+[1-9]\d{6,14}$/,
      "Formato non valido. Assicurati di inserire solo le cifre del numero."
    ),
  birthday: z.string().min(1, "Inserisci la data di nascita"),
  // Honeypot field - should be empty
  website: z.string().max(0, "Bot detected"),
});

export type SubscribeState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function subscribeAction(
  prevState: SubscribeState | null,
  formData: FormData
): Promise<SubscribeState> {
  try {
    const rawData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      birthday: formData.get("birthday") as string,
      website: (formData.get("website") as string) || "", // Honeypot
    };

    const validationResult = subscribeSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;

      // Check if it's a bot
      if (errors.website) {
        // Silently reject bots with fake success
        return {
          success: true,
          message: "Grazie per la registrazione!",
        };
      }

      return {
        success: false,
        message: "Correggi gli errori nel modulo",
        errors: errors as Record<string, string[]>,
      };
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY not configured");
      return {
        success: false,
        message: "Si è verificato un errore. Riprova più tardi.",
      };
    }

    // Submit to Brevo
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email: rawData.email,
        attributes: {
          FIRSTNAME: rawData.firstName,
          LASTNAME: rawData.lastName,
          SMS: rawData.phone,
          BIRTHDAY: rawData.birthday,
        },
        listIds: process.env.BREVO_LIST_ID
          ? [parseInt(process.env.BREVO_LIST_ID)]
          : undefined,
        updateEnabled: true, // Update if contact exists
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json().catch(() => ({}));

      // Handle duplicate contact (not really an error)
      if (
        brevoResponse.status === 400 &&
        errorData.code === "duplicate_parameter"
      ) {
        return {
          success: true,
          message: "Grazie! Sei già registrato nella nostra lista.",
        };
      }

      // Handle invalid phone number from Brevo
      if (
        brevoResponse.status === 400 &&
        errorData.code === "invalid_parameter" &&
        errorData.message?.toLowerCase().includes("phone")
      ) {
        return {
          success: false,
          message: "Correggi gli errori nel modulo",
          errors: {
            phone: [
              "Numero di telefono non valido. Verifica il prefisso e le cifre inserite.",
            ],
          },
        };
      }

      console.error("Brevo API error:", brevoResponse.status, errorData);
      return {
        success: false,
        message: "Errore durante la registrazione. Riprova più tardi.",
      };
    }

    return {
      success: true,
      message:
        "Grazie per la registrazione! Riceverai presto il tuo codice sconto via email.",
    };
  } catch (error) {
    console.error("Subscribe action error:", error);
    return {
      success: false,
      message: "Si è verificato un errore. Riprova più tardi.",
    };
  }
}
