import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthToast from "@/components/auth/AuthToast";
import { useAuth } from "@/hooks/useAuth";

export default function AuthCallback() {
  const { authenticateWithToken } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [toast, setToast] = useState({ message: "Completing login...", type: "success" });

  useEffect(() => {
    async function completeAuth() {
      const status = searchParams.get("status");
      const token = searchParams.get("token");
      const message = searchParams.get("message");

      if (status !== "success" || !token) {
        setToast({ message: message || "Social login failed.", type: "error" });
        window.setTimeout(() => navigate("/login", { replace: true }), 1200);
        return;
      }

      try {
        await authenticateWithToken(token);
        setToast({ message: "Logged in successfully.", type: "success" });
        window.setTimeout(() => navigate("/dashboard", { replace: true }), 700);
      } catch {
        setToast({ message: "Unable to complete login.", type: "error" });
        window.setTimeout(() => navigate("/login", { replace: true }), 1200);
      }
    }

    completeAuth();
  }, [authenticateWithToken, navigate, searchParams]);

  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-50 flex items-center justify-center">
      <AuthToast message={toast.message} type={toast.type} />
      <div className="flex flex-col items-center gap-3">
        <Loader className="size-6 animate-spin text-[#a1a1a1]" />
        <p className="text-[#a1a1a1] text-sm leading-5">Signing you in</p>
      </div>
    </div>
  );
}
