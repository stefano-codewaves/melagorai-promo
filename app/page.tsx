"use client";

import { useActionState } from "react";
import { subscribeAction, type SubscribeState } from "./actions/subscribe";
import { ThankYou } from "./components/ThankYou";
import { RegistrationForm } from "./components/RegistrationForm";

export default function Home() {
  const [state, formAction, isPending] = useActionState<
    SubscribeState | null,
    FormData
  >(subscribeAction, null);

  if (state?.success) {
    return <ThankYou message={state.message} />;
  }

  return (
    <RegistrationForm
      formAction={formAction}
      state={state}
      isPending={isPending}
    />
  );
}
