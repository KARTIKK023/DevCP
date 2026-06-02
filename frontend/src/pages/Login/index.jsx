import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FolderGit2,
  GitBranch,
  Hexagon,
  Layers,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { getOAuthUrl } from "@/api/auth";
import { ApiError } from "@/api/client";
import AuthToast from "@/components/auth/AuthToast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { validateEmail, validatePassword } from "@/lib/authValidation";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ message: "", type: "success" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const from = location.state?.from || "/dashboard";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setToast({ message: "", type: "success" });

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setToast({ message: emailError || passwordError, type: "error" });
      return;
    }

    setIsSubmitting(true);

    try {
      await login({ email, password });
      setToast({ message: "Logged in successfully.", type: "success" });
      window.setTimeout(() => navigate(from, { replace: true }), 500);
    } catch (err) {
      setToast({
        message: err instanceof ApiError ? err.message : "Email or password is wrong.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const startSocialLogin = (provider) => {
    window.location.href = getOAuthUrl(provider);
  };

  return (
    <div className="bg-neutral-950 text-neutral-50 min-h-dvh w-full overflow-x-hidden">
      <AuthToast message={toast.message} type={toast.type} />
      <div className="min-h-dvh flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-[45%] border-white/10 lg:border-r flex flex-col justify-between p-6 sm:p-8 lg:p-12 gap-8 min-h-dvh lg:min-h-0">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
              <Hexagon className="size-5 text-neutral-50" />
            </div>
            <Link
              to="/"
              className="font-semibold text-base leading-6 tracking-tight"
            >
              DevSphere
            </Link>
          </div>
          <div className="flex flex-col items-center flex-1 justify-center w-full">
            <div className="max-w-[380px] w-full">
              <div className="flex mb-6 sm:mb-8 flex-col gap-2">
                <h1 className="font-semibold text-2xl sm:text-3xl leading-8 sm:leading-9 tracking-tight">
                  Sign in to DevWorkspace
                </h1>
                <p className="text-[#a1a1a1] text-sm leading-5">
                  Continue to your engineering workspace.
                </p>
              </div>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    className="w-full h-11"
                    onClick={() => startSocialLogin("github")}
                  >
                    <GitBranch className="size-4" />
                    Continue with GitHub
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    className="w-full h-11"
                    onClick={() => startSocialLogin("google")}
                  >
                    <Hexagon className="size-4" />
                    Continue with Google
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 flex-1 h-px" />
                  <span className="uppercase text-[#a1a1a1] text-xs leading-4 tracking-wider">
                    or
                  </span>
                  <div className="bg-white/10 flex-1 h-px" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="email"
                    className="font-medium text-neutral-50 text-sm leading-5"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="top-1/2 size-4 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="bg-neutral-900 border-white/15 border-0 border-solid pl-9 h-11 w-full transition-colors focus-visible:ring-2 focus-visible:ring-neutral-50/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <Label
                      htmlFor="password"
                      className="font-medium text-neutral-50 text-sm leading-5"
                    >
                      Password
                    </Label>
                    <span className="text-[#a1a1a1] text-xs leading-4">
                      Forgot password?
                    </span>
                  </div>
                  <div className="relative">
                    <Lock className="top-1/2 size-4 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                    <Input
                      id="password"
                      type="password"
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="bg-neutral-900 border-white/15 border-0 border-solid pl-9 h-11 w-full transition-colors focus-visible:ring-2 focus-visible:ring-neutral-50/20"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full h-11"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in…" : "Login to Workspace"}
                  <ArrowRight className="size-4" />
                </Button>
              </form>
              <p className="text-center text-[#a1a1a1] text-sm leading-5 mt-6">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="font-medium text-neutral-50">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
            <ShieldCheck className="size-3.5" />
            <span>SOC 2 ready · Enterprise SSO available</span>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-[55%] bg-neutral-900 p-8 xl:p-12 flex-col justify-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-medium uppercase text-[#a1a1a1] text-xs leading-4 tracking-wider">
              Recent product activity
            </span>
            <h2 className="font-semibold text-lg leading-7 tracking-tight">
              Your workspace at a glance
            </h2>
          </div>
          <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-6 gap-4">
            <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <GitBranch className="size-4 text-neutral-50" />
                <CardTitle className="font-medium text-sm leading-5">
                  Repositories Connected
                </CardTitle>
              </div>
              <span className="rounded-full bg-neutral-800 text-[#a1a1a1] text-xs leading-4 px-2 py-0.5">
                12 active
              </span>
            </CardHeader>
            <CardContent className="flex p-0 flex-col gap-2">
              <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex p-2 justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                    <FolderGit2 className="size-3.5 text-neutral-50" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm leading-5">api-gateway</span>
                    <span className="text-[#a1a1a1] text-xs leading-4">main · 2m ago</span>
                  </div>
                </div>
                <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                  <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                  synced
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-6 gap-4">
            <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <Layers className="size-4 text-neutral-50" />
                <CardTitle className="font-medium text-sm leading-5">
                  Architecture Boards
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex p-0 items-center gap-2">
              <div className="border-[oklch(0.488_0.243_264.376)]/40 font-medium rounded-md bg-neutral-900 text-xs leading-4 border-black/1 border-1 border-solid flex px-3 py-2 justify-center items-center flex-1">
                Client
              </div>
              <ArrowRight className="size-3.5 text-[#a1a1a1]" />
              <div className="border-[oklch(0.627_0.265_303.9)]/40 font-medium rounded-md bg-neutral-900 text-xs leading-4 border-black/1 border-1 border-solid flex px-3 py-2 justify-center items-center flex-1">
                API
              </div>
              <ArrowRight className="size-3.5 text-[#a1a1a1]" />
              <div className="border-[oklch(0.696_0.17_162.48)]/40 font-medium rounded-md bg-neutral-900 text-xs leading-4 border-black/1 border-1 border-solid flex px-3 py-2 justify-center items-center flex-1">
                Database
              </div>
            </CardContent>
          </Card>
          <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-6 gap-4">
            <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-neutral-50" />
                <CardTitle className="font-medium text-sm leading-5">
                  Decisions Captured
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex p-0 flex-col gap-2">
              <div className="flex items-start gap-2">
                <Check className="size-4 text-[oklch(0.696_0.17_162.48)] mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm leading-5">
                    Adopt Postgres for primary storage
                  </span>
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    Approved · Backend team
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
``        </div>
      </div>
    </div>
  );
}
