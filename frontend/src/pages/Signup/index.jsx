import { useEffect } from "react";
import { Link } from "react-router-dom";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FallbackComponent } from "../CustomComponents";

export default function Signup() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-[956px] flex w-full">
          <div className="w-[55%] border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-12 flex-col">
            <div className="flex mb-12 items-center gap-2">
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
                <h1 className="font-semibold text-3xl leading-9 tracking-tight mb-2">
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
                        <FallbackComponent className="size-4 text-neutral-50" />
                        <span className="font-medium text-sm leading-5">
                          Connect GitHub
                        </span>
                      </div>
                      <p className="text-[#a1a1a1] text-xs leading-4 mb-2">
                        Authorize DevSphere to access your repositories.
                      </p>
                      <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex p-2 justify-between items-center">
                        <div className="flex items-center gap-2">
                          <FallbackComponent className="size-4 text-[#a1a1a1]" />
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
          <div className="w-[45%] bg-neutral-900 flex p-12 flex-col justify-center">
            <div className="max-w-[400px] mx-auto w-full">
              <div className="mb-8">
                <h2 className="font-semibold text-2xl leading-8 tracking-tight mb-1">
                  Create your workspace
                </h2>
                <p className="text-[#a1a1a1] text-sm leading-5">
                  Set up your engineering account to get started.
                </p>
              </div>
              <div className="flex mb-6 flex-col gap-2">
                <Button className="bg-neutral-800 text-neutral-50 border-white/10 border-1 border-solid p-4 justify-center gap-2 w-full">
                  <FallbackComponent className="size-4" />
                  Continue with GitHub
                </Button>
                <Button className="bg-neutral-800 text-neutral-50 border-white/10 border-1 border-solid p-4 justify-center gap-2 w-full">
                  <FallbackComponent className="size-4" />
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
                      placeholder="Kartik Chaudhary"
                      className="bg-neutral-950 border-white/15 border-0 border-solid pl-9"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="font-medium text-sm leading-5">Email</Label>
                  <div className="relative">
                    <Mail className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                    <Input
                      placeholder="you@company.com"
                      className="bg-neutral-950 border-white/15 border-0 border-solid pl-9"
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
                      placeholder="••••••••"
                      className="bg-neutral-950 border-white/15 border-0 border-solid pl-9"
                    />
                  </div>
                </div>
              </div>
              <Button className="bg-neutral-200 text-neutral-900 mb-4 p-4 justify-center gap-2 w-full">
                Signup here
                <ArrowRight className="size-4" />
              </Button>
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
    </div>
  );
}
