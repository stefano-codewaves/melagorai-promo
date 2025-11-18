import Image from "next/image";

// Images
import logo from "@/public/melagorai-logo.svg";
import backgroundImage from "@/public/melagorai-bg-2.jpeg";

interface ThankYouProps {
  message: string;
}

export function ThankYou({ message }: ThankYouProps) {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        style={{ filter: "brightness(0.5)" }}
        priority
        quality={85}
      />

      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        <div className="backdrop-blur-sm bg-white/95 rounded-2xl shadow-2xl p-5 md:p-6 border border-white/20">
          <div className="flex justify-center mb-4">
            <Image
              src={logo}
              alt="Melagorai logo"
              width={140}
              height={56}
              priority
            />
          </div>

          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-semibold text-secondary mb-4 text-center">
            Grazie per esserti registrato!
          </h1>

          <p className="text-gray-600 mb-6 text-center">{message}</p>

          <p className="text-sm text-gray-500 text-center">
            Controlla la tua casella email per ricevere il codice sconto.
          </p>
        </div>
      </div>
    </main>
  );
}
