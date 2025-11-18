"use client";

import Image from "next/image";
import Link from "next/link";

// Images
import logo from "@/public/melagorai-logo.svg";
import backgroundImage from "@/public/melagorai-bg-2.jpeg";
import productImage from "@/public/melagorai-product-image.png";

// Components
import { PhoneInput } from "./PhoneInput";

// Types
import { type SubscribeState } from "../actions/subscribe";

interface RegistrationFormProps {
  formAction: (formData: FormData) => void;
  state: SubscribeState | null;
  isPending: boolean;
}

export function RegistrationForm({
  formAction,
  state,
  isPending,
}: RegistrationFormProps) {
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
          <div className="relative mb-8">
            <div className="bg-linear-to-r from-primary to-primary-dark text-white rounded-xl p-4 text-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12" />
              <p className="text-xs font-semibold tracking-wider mb-1 relative">
                OFFERTA ESCLUSIVA
              </p>
              <p className="text-4xl font-bold relative">10%</p>
              <p className="text-sm mt-1 relative">
                di sconto sul primo ordine
              </p>
            </div>

            <div className="absolute -top-[24px] -right-[8px] w-20 h-20 drop-shadow-lg animate-slide-in-right">
              <Image
                src={productImage}
                alt="Prodotti Melagorai"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </div>

          <form action={formAction} className="space-y-3">
            {state && !state.success && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {state.message}
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-xs font-medium text-secondary mb-1"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300  text-secondary placeholder-gray-400 text-sm"
                  placeholder="Mario"
                />
                {state?.errors?.firstName && (
                  <p className="mt-1 text-xs text-red-600">
                    {state.errors.firstName[0]}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-xs font-medium text-secondary mb-1"
                >
                  Cognome *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300  text-secondary placeholder-gray-400 text-sm"
                  placeholder="Rossi"
                />
                {state?.errors?.lastName && (
                  <p className="mt-1 text-xs text-red-600">
                    {state.errors.lastName[0]}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-secondary mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-300  text-secondary placeholder-gray-400 text-sm"
                placeholder="la.tua@email.it"
              />
              {state?.errors?.email && (
                <p className="mt-1 text-xs text-red-600">
                  {state.errors.email[0]}
                </p>
              )}
            </div>
            <PhoneInput error={state?.errors?.phone?.[0]} />

            <div>
              <label
                htmlFor="birthday"
                className="block text-xs font-medium text-secondary mb-1"
              >
                Data di nascita *
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-secondary text-sm"
              />
              {state?.errors?.birthday && (
                <p className="mt-1 text-xs text-red-600">
                  {state.errors.birthday[0]}
                </p>
              )}
            </div>

            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              className="absolute -left-[9999px] opacity-0 h-0 w-0"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.02] mt-4"
            >
              {isPending ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Registrazione...
                </span>
              ) : (
                "Ottieni il tuo sconto"
              )}
            </button>
            <p className="text-xs text-gray-500 text-center pt-2">
              Registrandoti accetti la nostra{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
