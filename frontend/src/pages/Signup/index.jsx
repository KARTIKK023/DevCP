import { MouseGlow } from "@/components/effects";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FolderGit2,
  GitBranch,
  Hexagon,
  Layers,
  Loader,
  Lock,
  Mail,
  Rocket,
  ShieldCheck,
  User,
} from "lucide-react";
import { getOAuthUrl } from "@/api/auth";
import AuthToast from "@/components/auth/AuthToast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApiError } from "@/api/client";
import { useAuth } from "@/hooks/useAuth";
import { validateEmail, validateName, validatePassword } from "@/lib/authValidation";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ message: "", type: "success" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setToast({ message: "", type: "success" });

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (nameError || emailError || passwordError) {
      setToast({ message: nameError || emailError || passwordError, type: "error" });
      return;
    }

    setIsSubmitting(true);

    try {
      await signup({ name, email, password });
      setToast({ message: "Account created successfully.", type: "success" });
      window.setTimeout(() => navigate("/dashboard", { replace: true }), 500);
    } catch (err) {
      setToast({
        message: err instanceof ApiError ? err.message : "Unable to create account. Please try again.",
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
      <MouseGlow />
      <AuthToast message={toast.message} type={toast.type} />
      <div className="min-h-dvh flex flex-col lg:flex-row w-full">
        <div className="hidden lg:flex lg:w-[55%] border-white/10 lg:border-r p-8 xl:p-12 flex-col order-2 lg:order-1">
          <div className="flex mb-8 xl:mb-12 items-center gap-2">
              <div className="size-9 rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex justify-center items-center">
                <Hexagon className="size-5 text-neutral-50" />
              </div>
              <Link
                to="/"
                className="font-semibold text-base leading-6 tracking-tight"
                 >
                DevSphere
                </Link>
            </div>
            <div className="max-w-[440px] flex mx-auto flex-col justify-center flex-1 w-full">
              <div className="mb-8">
                <div className="inline-flex rounded-full bg-neutral-800 border-white/10 border-1 border-solid mb-4 px-3 py-1 items-center gap-2">
                  <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    Workspace setup in minutes
                  </span>
                </div>
                <h1 className="font-semibold text-2xl sm:text-3xl leading-8 sm:leading-9 tracking-tight mb-2">
                  Spin up your engineering workspace
                </h1>
                <p className="leading-relaxed text-[#a1a1a1] text-sm leading-5">
                  Connect your tools and start collaborating. No marketing, just
                  onboarding.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-9 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full flex justify-center items-center">
                        <Check className="size-4 text-neutral-950" />
                      </div>
                      <div className="bg-[oklch(0.696_0.17_162.48)] min-h-8 mt-1 flex-1 w-px" />
                    </div>
                    <div className="pb-2 flex-1">
                      <div className="flex mb-1 items-center gap-2">
                        <GitBranch className="size-4 text-neutral-50" />
                        <span className="font-medium text-sm leading-5">
                          Connect GitHub
                        </span>
                      </div>
                      <p className="text-[#a1a1a1] text-xs leading-4 mb-2">
                        Authorize DevSphere to access your repositories.
                      </p>
                      <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex p-2 justify-between items-center">
                        <div className="flex items-center gap-2">
                          <GitBranch className="size-4 text-[#a1a1a1]" />
                          <span className="text-neutral-50 text-xs leading-4">
                            kartikchaudhary
                          </span>
                        </div>
                        <span className="text-[oklch(0.696_0.17_162.48)] text-[11px] flex items-center gap-1">
                          <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                          connected
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-9 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full flex justify-center items-center">
                        <Check className="size-4 text-neutral-950" />
                      </div>
                      <div className="min-h-8 bg-white/10 mt-1 flex-1 w-px" />
                    </div>
                    <div className="pb-2 flex-1">
                      <div className="flex mb-1 items-center gap-2">
                        <GitBranch className="size-4 text-neutral-50" />
                        <span className="font-medium text-sm leading-5">
                          Import Repositories
                        </span>
                      </div>
                      <p className="text-[#a1a1a1] text-xs leading-4 mb-2">
                        Select repositories to bring into your workspace.
                      </p>
                      <div className="flex flex-col gap-2">
                        <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex p-2 justify-between items-center">
                          <div className="flex items-center gap-2">
                            <FolderGit2 className="size-4 text-[#a1a1a1]" />
                            <span className="text-neutral-50 text-xs leading-4">
                              api-gateway
                            </span>
                          </div>
                          <CheckCircle2 className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                        </div>
                        <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex p-2 justify-between items-center">
                          <div className="flex items-center gap-2">
                            <FolderGit2 className="size-4 text-[#a1a1a1]" />
                            <span className="text-neutral-50 text-xs leading-4">
                              web-client
                            </span>
                          </div>
                          <CheckCircle2 className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-9 shrink-0 rounded-full bg-neutral-800 border-white/10 border-1 border-solid flex justify-center items-center">
                        <Rocket className="size-4 text-[#a1a1a1]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-1 items-center gap-2">
                        <Layers className="size-4 text-[#a1a1a1]" />
                        <span className="font-medium text-[#a1a1a1] text-sm leading-5">
                          Start Workspace
                        </span>
                      </div>
                      <p className="text-[#a1a1a1] text-xs leading-4 mb-2">
                        Launch meetings, architecture boards, and decisions.
                      </p>
                      <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-dashed flex p-3 items-center gap-2">
                        <Loader className="size-4 text-[#a1a1a1]" />
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          Awaiting account creation…
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full lg:w-[45%] bg-neutral-900 flex p-6 sm:p-8 lg:p-12 flex-col justify-center order-1 lg:order-2 min-h-dvh lg:min-h-0">
          <div className="flex lg:hidden mb-8 items-center gap-2">
            <div className="size-9 rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex justify-center items-center">
              <Hexagon className="size-5 text-neutral-50" />
            </div>
            <Link
              to="/"
              className="font-semibold text-base leading-6 tracking-tight"
            >
              DevSphere
            </Link>
          </div>
          <div className="max-w-[400px] mx-auto w-full">
              <div className="mb-8">
                <h2 className="font-semibold text-2xl sm:text-3xl leading-8 sm:leading-9 tracking-tight mb-1">
                  Create your workspace
                </h2>
                <p className="text-[#a1a1a1] text-sm leading-5">
                  Set up your engineering account to get started.
                </p>
              </div>
              <form onSubmit={handleSubmit} noValidate>
              <div className="flex mb-6 flex-col gap-2">
                <Button type="button" variant="secondary" className="w-full h-11" onClick={() => startSocialLogin("github")}>
                  <GitBranch className="size-4" />
                  Continue with GitHub
                </Button>
                <Button type="button" variant="secondary" className="w-full h-11" onClick={() => startSocialLogin("google")}>
                  <Hexagon className="size-4" />
                  Continue with Google
                </Button>
              </div>
              <div className="flex mb-6 items-center gap-4">
                <div className="bg-white/10 flex-1 h-px" />
                <span className="text-[#a1a1a1] text-xs leading-4">OR</span>
                <div className="bg-white/10 flex-1 h-px" />
              </div>
              <div className="flex mb-6 flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="font-medium text-sm leading-5">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                    <Input
                      required
                      minLength={2}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="bg-neutral-950 border-white/15 border-0 border-solid pl-9 h-11 w-full transition-colors focus-visible:ring-2 focus-visible:ring-neutral-50/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-medium text-sm leading-5">Email</Label>
                  <div className="relative">
                    <Mail className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                    <Input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="bg-neutral-950 border-white/15 border-0 border-solid pl-9 h-11 w-full transition-colors focus-visible:ring-2 focus-visible:ring-neutral-50/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-medium text-sm leading-5">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                    <Input
                      type="password"
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="bg-neutral-950 border-white/15 border-0 border-solid pl-9 h-11 w-full transition-colors focus-visible:ring-2 focus-visible:ring-neutral-50/20"
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full h-11 mb-4" disabled={isSubmitting}>
                {isSubmitting ? "Creating account…" : "Signup here"}
                <ArrowRight className="size-4" />
              </Button>
              </form>
              <p className="text-center text-[#a1a1a1] text-sm leading-5 mb-8">
                Already have a workspace?
                <Link to="/login" className="font-medium text-neutral-50">
                  Login
                </Link>
              </p>
              <div className="text-[#a1a1a1] text-xs leading-4 flex justify-center items-center gap-2">
                <ShieldCheck className="size-3.5" />
                SOC 2 ready · Enterprise SSO available
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
