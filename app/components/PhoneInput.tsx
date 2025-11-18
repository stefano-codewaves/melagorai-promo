"use client";

import { useState, useRef, useEffect } from "react";

const COUNTRY_CODES = [
  { code: "+39", country: "Italia" },
  { code: "+41", country: "Svizzera" },
  { code: "+43", country: "Austria" },
  { code: "+33", country: "Francia" },
  { code: "+49", country: "Germania" },
  { code: "+34", country: "Spagna" },
  { code: "+44", country: "UK" },
  { code: "+1", country: "USA" },
];

interface PhoneInputProps {
  error?: string;
}

export function PhoneInput({ error }: PhoneInputProps) {
  const [countryCode, setCountryCode] = useState("+39");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Format the phone number as user types (remove non-digits)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Combine country code and phone for the hidden input
  const fullPhone = phoneNumber ? `${countryCode}${phoneNumber}` : "";

  return (
    <div>
      <label
        htmlFor="phoneNumber"
        className="block text-xs font-medium text-secondary mb-1"
      >
        Telefono *
      </label>

      <div className="grid grid-cols-[90px_1fr] gap-2">
        {/* Custom select */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 text-secondary text-sm flex items-center justify-between"
          >
            <span>{countryCode}</span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
              {COUNTRY_CODES.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setCountryCode(item.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                    countryCode === item.code
                      ? "bg-primary/5 text-primary font-medium"
                      : "text-secondary"
                  }`}
                >
                  {item.code}
                </button>
              ))}
            </div>
          )}
        </div>

        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneChange}
          required
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-secondary placeholder-gray-400 text-sm"
          placeholder="333 123 4567"
          inputMode="numeric"
        />
      </div>

      {/* Hidden input with full E.164 format phone number */}
      <input type="hidden" name="phone" value={fullPhone} />

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
