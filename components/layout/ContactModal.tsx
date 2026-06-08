"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ContactModalProps {
  onClose: () => void;
}

const inputClass =
  "w-full px-4 py-3 rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent";

export default function ContactModal({ onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const modal = (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4">
          <h2 className="font-bold text-2xl text-neutral-900">Contact Us</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {success ? (
          <div className="px-8 pb-8 pt-4 text-center">
            <p className="text-lg font-semibold text-neutral-900 mb-2">
              Message sent!
            </p>
            <p className="text-sm text-neutral-500 mb-6">
              We&apos;ll get back to you as soon as possible.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="px-8 pb-8 flex flex-col gap-4">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name*"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, firstName: e.target.value }))
                    }
                    className={inputClass}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, lastName: e.target.value }))
                    }
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email + phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="What would you like help with?*"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {serverError && (
                <p className="text-xs text-red-500">{serverError}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="self-start px-8 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
