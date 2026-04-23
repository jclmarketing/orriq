"use client";

import { useState } from "react";
import { Button } from "@/components/shared/button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Submit stubbed — wire to API endpoint or Formspree in production
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl hairline-strong p-10 bg-obsidian-2">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">
          Message received
        </div>
        <div className="mt-4 font-display text-[28px] tracking-[-0.02em] leading-tight">
          Thanks — we'll reply within a working day.
        </div>
        <p className="mt-4 text-[15px] text-cream/70 max-w-[46ch]">
          In the meantime, the{" "}
          <a className="underline" href="/work">
            work
          </a>{" "}
          and{" "}
          <a className="underline" href="/platform">
            platform
          </a>{" "}
          pages go deeper on how Orriq is built.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" />
      </div>
      <Field
        label="What do you run today — and what's broken?"
        name="message"
        as="textarea"
        required
      />
      <div className="flex items-center justify-between pt-2">
        <p className="text-[12px] text-fog-2 max-w-[48ch]">
          We reply within one working day. Sent securely, never syndicated.
        </p>
        <Button size="lg" trailingArrow>
          Send message
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  as,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  as?: "textarea";
  type?: string;
}) {
  const base =
    "mt-2 w-full bg-obsidian-2 hairline rounded-lg px-4 py-3 text-[15px] text-cream placeholder-fog-2 focus:border-cyan/40 focus:outline-none focus:ring-2 focus:ring-cyan/20 transition";
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
        {label}
        {required && <span className="text-cyan ml-1">*</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={6}
          className={base + " resize-y min-h-[160px]"}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={base}
        />
      )}
    </label>
  );
}
