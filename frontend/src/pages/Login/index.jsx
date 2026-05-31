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
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FallbackComponent } from "../CustomComponents";

export default function Login() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-[956px] flex w-full">
          <div className="w-[45%] border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-12 flex-col justify-between">
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
            <div className="flex flex-col items-center">
              <div className="max-w-[380px] w-full">
                <div className="flex mb-8 flex-col gap-2">
                  <h1 className="font-semibold text-2xl leading-8 tracking-tight">
                    Sign in to DevWorkspace
                  </h1>
                  <p className="text-[#a1a1a1] text-sm leading-5">
                    Continue to your engineering workspace.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Button className="bg-neutral-800 text-neutral-50 border-white/10 border-1 border-solid justify-center gap-2 w-full h-11">
                      <FallbackComponent className="size-4" />
                      Continue with GitHub
                    </Button>
                    <Button className="bg-neutral-800 text-neutral-50 border-white/10 border-1 border-solid justify-center gap-2 w-full h-11">
                      <FallbackComponent className="size-4" />
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
                        placeholder="you@company.com"
                        className="bg-neutral-900 border-white/15 border-0 border-solid pl-9 h-11"
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
                      <a className="text-[#a1a1a1] text-xs leading-4">
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="top-1/2 size-4 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-neutral-900 border-white/15 border-0 border-solid pl-9 h-11"
                      />
                    </div>
                  </div>
                  <Button className="bg-neutral-200 text-neutral-900 justify-center gap-2 w-full h-11">
                    Login to Workspace
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
                <p className="text-center text-[#a1a1a1] text-sm leading-5 mt-6">
                  Don't have an account?
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
          <div className="w-[55%] bg-neutral-900 flex p-12 flex-col justify-center gap-6">
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
                      <span className="font-medium text-sm leading-5">
                        api-gateway
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        main · 2m ago
                      </span>
                    </div>
                  </div>
                  <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                    <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                    synced
                  </span>
                </div>
                <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex p-2 justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                      <FolderGit2 className="size-3.5 text-neutral-50" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm leading-5">
                        web-client
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        main · 1h ago
                      </span>
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
                <span className="rounded-full bg-neutral-800 text-[#a1a1a1] text-xs leading-4 px-2 py-0.5">
                  3 boards
                </span>
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
                <span className="rounded-full bg-neutral-800 text-[#a1a1a1] text-xs leading-4 px-2 py-0.5">
                  48 total
                </span>
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
                <div className="flex items-start gap-2">
                  <Check className="size-4 text-[oklch(0.696_0.17_162.48)] mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-sm leading-5">
                      API gateway refactor next sprint
                    </span>
                    <span className="text-[#a1a1a1] text-xs leading-4">
                      Approved · Platform team
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
