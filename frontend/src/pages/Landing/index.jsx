import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ArrowDown,
  Check,
  CheckCircle2,
  Circle,
  ExternalLink,
  FileCode,
  FileText,
  Folder,
  GitBranch,
  Heart,
  Hexagon,
  Layers,
  LayoutDashboard,
  NotebookPen,
  Play,
  Plus,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { FallbackComponent } from "../CustomComponents";

export default function Landing() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid w-full">
          <div className="flex px-12 py-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-lg bg-neutral-200 text-neutral-900 flex justify-center items-center">
                <Hexagon className="size-4" />
              </div>
              <Link
                to="/"
                className="font-semibold text-base leading-6 tracking-tight"
                 >
                DevSphere
                </Link>
            </div>
            <nav className="flex items-center gap-8">
              <a className="font-medium text-neutral-50 text-sm leading-5 border-neutral-50 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2">
                <GitBranch className="size-4" />
                Repository
              </a>
              <a className="border-transparent font-medium text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2">
                <Video className="size-4" />
                Meeting
              </a>
              <a className="border-transparent font-medium text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2">
                <Layers className="size-4" />
                Architecture
              </a>
              <a className="border-transparent font-medium text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2">
                <CheckCircle2 className="size-4" />
                Decisions
              </a>
            </nav>
            <div className="flex items-center gap-2">
            <Button
             variant="ghost"
             className="text-[#a1a1a1] text-sm leading-5 px-3 h-8"
             onClick={() => navigate("/login")}
             >
             Login
            </Button>
            <Button
             className="bg-neutral-200 text-neutral-900 text-sm leading-5 px-4 h-8"
             onClick={() => navigate("/signup")}
             >
             Start Free
            </Button>
            </div>
          </div>
        </header>
        <main className="p-12">
          <section className="flex items-center gap-12">
            <div className="w-[42%] flex flex-col gap-6">
              <div className="rounded-full bg-neutral-900 text-[#a1a1a1] text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-1 items-center gap-2 w-fit">
                <span className="size-1.5 rounded-full bg-[#00bc7d]" />
                One workspace for engineering teams
              </div>
              <h1 className="font-semibold text-4xl leading-10 tracking-tight">
                Everything your engineering team needs. One workspace.
              </h1>
              <p className="text-[#a1a1a1] text-base leading-6">
                Meetings, repositories, architecture discussions, deployment
                visibility, and team decisions in a single place.
              </p>
              <div className="flex items-center gap-2">
                <Button className="bg-neutral-200 text-neutral-900 text-sm leading-5 px-5 gap-2 h-10">
                  <Zap className="size-4" />
                  Start Free
                </Button>
                <Button
                  variant="outline"
                  className="bg-neutral-900 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-5 gap-2 h-10"
                >
                  <Play className="size-4" />
                  View Demo
                </Button>
              </div>
              <div className="text-[#a1a1a1] text-xs leading-4 flex mt-2 items-center gap-6">
                <span className="flex items-center gap-2">
                  <Check className="size-3.5 text-[#00bc7d]" />
                  No credit card
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-3.5 text-[#00bc7d]" />
                  Setup in minutes
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-3.5 text-[#00bc7d]" />
                  SOC 2 ready
                </span>
              </div>
            </div>
            <div className="w-[58%]">
              <div className="shadow-2xl rounded-xl bg-neutral-900 border-white/10 border-1 border-solid overflow-hidden">
                <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-4 py-2.5 justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#ff6467]/70" />
                    <span className="size-2.5 rounded-full bg-[#fe9a00]/70" />
                    <span className="size-2.5 rounded-full bg-[#00bc7d]/70" />
                  </div>
                  <div className="text-xs leading-4 flex items-center gap-4">
                    <span className="font-medium text-neutral-50 border-neutral-50 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-0.5 items-center gap-1.5">
                      <GitBranch className="size-3" />
                      Repository
                    </span>
                    <span className="text-[#a1a1a1] flex items-center gap-1.5">
                      <Video className="size-3" />
                      Meeting
                    </span>
                    <span className="text-[#a1a1a1] flex items-center gap-1.5">
                      <Layers className="size-3" />
                      Architecture
                    </span>
                    <span className="text-[#a1a1a1] flex items-center gap-1.5">
                      <CheckCircle2 className="size-3" />
                      Decisions
                    </span>
                  </div>
                  <div className="size-5 font-semibold rounded-full bg-[#1447e6] text-neutral-50 text-[9px] flex justify-center items-center">
                    A
                  </div>
                </div>
                <div className="grid grid-cols-2 p-2 gap-2">
                  <div className="col-span-1 rounded-lg bg-neutral-950 border-white/10 border-1 border-solid overflow-hidden">
                    <div className="flex px-3 py-2 justify-between items-center">
                      <span className="font-medium text-xs leading-4 flex items-center gap-1.5">
                        <Video className="size-3.5 text-[#1447e6]" />
                        Video Call
                      </span>
                      <span className="text-[#00bc7d] text-[10px] flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-[#00bc7d]" />
                        Live
                      </span>
                    </div>
                    <div className="grid grid-cols-2 px-2 pb-2 gap-1">
                      <div className="relative aspect-video rounded-md bg-neutral-800 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                          alt="dev"
                          className="object-cover w-full h-full"
                          data-photoid="placeholder"
                          data-authorname="Unsplash"
                          data-authorurl="https://unsplash.com"
                          data-blurhash="L00000"
                        />
                      </div>
                      <div className="relative aspect-video rounded-md bg-neutral-800 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                          alt="dev"
                          className="object-cover w-full h-full"
                          data-photoid="placeholder"
                          data-authorname="Unsplash"
                          data-authorurl="https://unsplash.com"
                          data-blurhash="L00000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 rounded-lg bg-neutral-950 border-white/10 border-1 border-solid overflow-hidden">
                    <div className="flex px-3 py-2 justify-between items-center">
                      <span className="font-medium text-xs leading-4 flex items-center gap-1.5">
                        <Folder className="size-3.5 text-[#fe9a00]" />
                        Repository
                      </span>
                      <span className="text-[#a1a1a1] text-[10px]">main</span>
                    </div>
                    <div className="text-[#a1a1a1] text-[11px] flex px-3 pb-3 flex-col gap-1">
                      <span className="flex items-center gap-1.5">
                        <Folder className="size-3 text-[#fe9a00]" />
                        src
                      </span>
                      <span className="flex pl-3 items-center gap-1.5">
                        <FileCode className="size-3" />
                        index.ts
                      </span>
                      <span className="flex pl-3 items-center gap-1.5">
                        <FileCode className="size-3" />
                        server.ts
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FileText className="size-3" />
                        README.md
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 rounded-lg bg-neutral-950 border-white/10 border-1 border-solid overflow-hidden">
                    <div className="flex px-3 py-2 justify-between items-center">
                      <span className="font-medium text-xs leading-4 flex items-center gap-1.5">
                        <Sparkles className="size-3.5 text-[#ad46ff]" />
                        AI Notes
                      </span>
                    </div>
                    <div className="text-[#a1a1a1] text-[11px] flex px-3 pb-3 flex-col gap-1.5">
                      <span className="flex items-start gap-1.5">
                        <Check className="size-3 text-[#00bc7d] mt-0.5" />
                        Decided on Postgres for storage
                      </span>
                      <span className="flex items-start gap-1.5">
                        <Check className="size-3 text-[#00bc7d] mt-0.5" />
                        API gateway refactor next sprint
                      </span>
                      <span className="flex items-start gap-1.5">
                        <Circle className="size-3 mt-0.5" />
                        Follow up on caching layer
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 rounded-lg bg-neutral-950 border-white/10 border-1 border-solid overflow-hidden">
                    <div className="flex px-3 py-2 justify-between items-center">
                      <span className="font-medium text-xs leading-4 flex items-center gap-1.5">
                        <Layers className="size-3.5 text-[#1447e6]" />
                        Architecture
                      </span>
                    </div>
                    <div className="relative bg-[radial-gradient(oklch(0.269_0_0)_1px,transparent_1px)] rounded-md mx-3 mb-3 h-18">
                      <div className="rounded-sm bg-[#1447e6]/10 text-neutral-50 text-[9px] border-[#1447e6]/40 border-1 border-solid absolute left-2 top-3 px-2 py-1">
                        Client
                      </div>
                      <div className="rounded-sm bg-[#00bc7d]/10 text-neutral-50 text-[9px] border-[#00bc7d]/40 border-1 border-solid absolute right-2 top-3 px-2 py-1">
                        API
                      </div>
                      <div className="left-1/2 -translate-x-1/2 rounded-sm bg-[#ad46ff]/10 text-neutral-50 text-[9px] border-[#ad46ff]/40 border-1 border-solid absolute bottom-2 px-2 py-1">
                        Database
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="rounded-2xl bg-neutral-900 border-white/10 border-1 border-solid mt-12 p-12">
            <div className="text-center flex flex-col items-center gap-2">
              <h2 className="font-semibold text-2xl leading-8 tracking-tight">
                How teams work today
              </h2>
              <p className="max-w-xl text-[#a1a1a1] text-sm leading-5">
                Engineering context is scattered across five disconnected tools.
                DevSphere unifies it into one.
              </p>
            </div>
            <div className="flex mt-8 justify-center items-center gap-4">
              <div className="flex flex-wrap justify-center items-center gap-3">
                <div className="rounded-xl bg-neutral-950 border-white/10 border-1 border-solid flex p-4 flex-col items-center gap-2">
                  <FallbackComponent className="size-6 text-[#a1a1a1]" />
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    GitHub
                  </span>
                </div>
                <Plus className="size-4 text-[#a1a1a1]" />
                <div className="rounded-xl bg-neutral-950 border-white/10 border-1 border-solid flex p-4 flex-col items-center gap-2">
                  <Video className="size-6 text-[#a1a1a1]" />
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    Google Meet
                  </span>
                </div>
                <Plus className="size-4 text-[#a1a1a1]" />
                <div className="rounded-xl bg-neutral-950 border-white/10 border-1 border-solid flex p-4 flex-col items-center gap-2">
                  <FallbackComponent className="size-6 text-[#a1a1a1]" />
                  <span className="text-[#a1a1a1] text-xs leading-4">Jira</span>
                </div>
                <Plus className="size-4 text-[#a1a1a1]" />
                <div className="rounded-xl bg-neutral-950 border-white/10 border-1 border-solid flex p-4 flex-col items-center gap-2">
                  <NotebookPen className="size-6 text-[#a1a1a1]" />
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    Notion
                  </span>
                </div>
                <Plus className="size-4 text-[#a1a1a1]" />
                <div className="rounded-xl bg-neutral-950 border-white/10 border-1 border-solid flex p-4 flex-col items-center gap-2">
                  <LayoutDashboard className="size-6 text-[#a1a1a1]" />
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    Deploys
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mt-8 justify-center items-center">
              <div className="flex flex-col items-center gap-2">
                <ArrowDown className="size-5 text-[#00bc7d]" />
                <span className="text-[#a1a1a1] text-xs leading-4">
                  Unified into
                </span>
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <div className="rounded-2xl bg-neutral-200/10 border-neutral-200/30 border-1 border-solid flex px-12 py-6 items-center gap-4">
                <div className="size-12 rounded-xl bg-neutral-200 text-neutral-900 flex justify-center items-center">
                  <Hexagon className="size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-neutral-50 text-lg leading-7 tracking-tight">
                    DevSphere
                  </span>
                  <span className="text-[#a1a1a1] text-xs leading-4">{`One workspace. Repos, meetings, architecture, decisions & deploys.`}</span>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-neutral-900 border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid w-full">
          <div className="flex px-12 py-8 flex-col gap-8">
            <div className="flex justify-between items-start gap-12">
              <div className="max-w-sm flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-neutral-200 text-neutral-900 flex justify-center items-center">
                    <Hexagon className="size-4" />
                  </div>
                  <span className="font-semibold text-sm leading-5 tracking-tight">
                    DevSphere
                  </span>
                </div>
                <p className="text-[#a1a1a1] text-sm leading-5">
                  One workspace for engineering teams — meetings, repositories,
                  architecture, decisions, and deploys in a single place.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <span className="font-medium text-neutral-50 text-xs leading-4 tracking-tight">
                  Open Source
                </span>
                <a className="rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid flex px-4 py-2 items-center gap-2">
                  <FallbackComponent className="size-4" />
                  View source on GitHub
                  <ExternalLink className="size-3.5 text-[#a1a1a1]" />
                </a>
                <a className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                  <GitBranch className="size-3.5" />
                  github.com/kartikchaudhary/devsphere
                </a>
              </div>
            </div>
            <div className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex pt-6 justify-between items-center">
              <span className="text-[#a1a1a1] text-xs leading-4">
                © 2025 DevSphere. All rights reserved.
              </span>
              <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                Crafted with
                <Heart className="size-3.5 text-[#ff6467]" />
                by
                <span className="font-medium text-neutral-50">
                  Kartik Chaudhary
                </span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
