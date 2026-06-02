import { CheckCircle2, XCircle } from "lucide-react";

export default function AuthToast({ message, type = "success" }) {
  if (!message) return null;

  const isError = type === "error";
  const Icon = isError ? XCircle : CheckCircle2;

  return (
    <div
      className={`fixed right-4 top-4 z-50 flex max-w-sm items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-5 shadow-2xl backdrop-blur ${
        isError
          ? "border-[#ff6467]/30 bg-[#ff6467]/15 text-[#ffb3b5]"
          : "border-[oklch(0.696_0.17_162.48)]/30 bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.82_0.13_162.48)]"
      }`}
      role="status"
    >
      <Icon className="mt-0.5 size-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}
