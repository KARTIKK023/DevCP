import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  GitBranch,
  Hexagon,
  History,
  Home,
  Layers,
  Lightbulb,
  Plus,
  Rocket,
  Search,
  Settings as SettingsIcon,
  Sparkles,
  Video,
  XCircle,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Decisions() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 flex w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <aside className="shrink-0 bg-neutral-900 border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-4 flex-col justify-between w-64 h-239">
          <div className="flex flex-col gap-8">
              <div className="flex px-2 items-center gap-2">
                <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
                  <Hexagon className="size-5 text-neutral-50" />
                </div>
                <Link
                to="/dashboard"
                className="font-semibold text-base leading-6 tracking-tight"
                 >
                DevSphere
                </Link>
              </div>
              <nav className="flex flex-col justify-start items-stretch gap-1">
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard">
                  <Home className="size-4" />
                  <span>Home</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/repositories">
                  <GitBranch className="size-4" />
                  <span>Repositories</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/meetings">
                  <Video className="size-4" />
                  <span>Meetings</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/architecture">
                  <Layers className="size-4" />
                  <span>Architecture</span>
                </a>
                <a className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/decisions">
                  <CheckCircle2 className="size-4" />
                  <span>Decisions</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/deployments">
                  <Rocket className="size-4" />
                  <span>Deployments</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/settings">
                  <SettingsIcon className="size-4" />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
          <div className="rounded-xl bg-neutral-950 border-white/10 border-1 border-solid flex p-4 flex-col gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                <span className="font-medium text-sm leading-5">Free plan</span>
              </div>
              <p className="text-[#a1a1a1] text-xs leading-4">
                5 of 12 seats used. Upgrade for unlimited boards.
              </p>
              <button className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 mt-1 px-3 py-2 w-full">
                Upgrade
              </button>
            </div>
        </aside>
        <div className="flex flex-col flex-1 h-239">
          <header className="shrink-0 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-lg leading-7 tracking-tight">
                Decisions
              </h1>
              <Badge className="font-normal bg-neutral-800 text-neutral-50 text-xs leading-4 border-white/10 border-0 border-solid">
                48 total
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-72">
                <Search className="top-1/2 -translate-y-1/2 size-4 text-[#a1a1a1] absolute left-3" />
                <Input
                  className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 w-72 h-9"
                  placeholder="Search repos, meetings, decisions…"
                />
              </div>
              <button className="relative size-9 rounded-lg flex justify-center items-center">
                <Bell className="size-4 text-[#a1a1a1]" />
                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-2 top-2" />
              </button>
              <div className="flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarFallback className="bg-neutral-800 text-neutral-50 text-xs leading-4">
                    KC
                  </AvatarFallback>
                </Avatar>
                <div className="leading-tight flex flex-col">
                  <span className="font-medium text-sm leading-5">
                    Kartik Chaudhary
                  </span>
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    kartik@devsphere.io
                  </span>
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-1 overflow-hidden">
            <main className="overflow-y-auto p-8 flex-1">
              <div className="flex mb-6 justify-between items-start gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-xl leading-7 tracking-tight">
                    All Decisions
                  </h2>
                  <p className="text-[#a1a1a1] text-sm leading-5">
                    Track and manage engineering decisions across your team.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-neutral-900 text-neutral-50 text-sm leading-5 border-white/10 border-0 border-solid gap-2 h-9"
                  >
                    Status
                    <ChevronDown className="size-4 text-[#a1a1a1]" />
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-neutral-900 text-neutral-50 text-sm leading-5 border-white/10 border-0 border-solid gap-2 h-9"
                  >
                    Team
                    <ChevronDown className="size-4 text-[#a1a1a1]" />
                  </Button>
                  <Button className="bg-neutral-200 text-neutral-900 text-sm leading-5 gap-2 h-9">
                    <Plus className="size-4" />
                    New decision
                  </Button>
                </div>
              </div>
              <Card className="rounded-xl bg-neutral-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
                <div className="grid grid-cols-[1fr_140px_140px_90px_200px_40px] font-medium text-[#a1a1a1] text-xs leading-4 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-3 items-center">
                  <span>Decision</span>
                  <span>Status</span>
                  <span>Team</span>
                  <span>Date</span>
                  <span>Source</span>
                  <span />
                </div>
                <div className="grid grid-cols-[1fr_140px_140px_90px_200px_40px] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-4 items-center">
                  <span className="font-medium text-sm leading-5 pr-4">
                    Use Redis caching for session management
                  </span>
                  <span>
                    <Badge className="bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)] font-normal border-black/1 border-0 border-solid gap-1">
                      <CheckCircle2 className="size-3" />
                      Approved
                    </Badge>
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Platform team
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    2h ago
                  </span>
                  <span className="truncate text-[#a1a1a1] text-sm leading-5">
                    API Gateway Review
                  </span>
                  <span className="flex justify-end">
                    <ChevronRight className="size-4 text-[#a1a1a1]" />
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_140px_140px_90px_200px_40px] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-4 items-center">
                  <span className="font-medium text-sm leading-5 pr-4">
                    Move auth logic to middleware layer
                  </span>
                  <span>
                    <Badge className="bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)] font-normal border-black/1 border-0 border-solid gap-1">
                      <CheckCircle2 className="size-3" />
                      Approved
                    </Badge>
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Backend team
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    5h ago
                  </span>
                  <span className="truncate text-[#a1a1a1] text-sm leading-5">
                    Auth Service Handoff
                  </span>
                  <span className="flex justify-end">
                    <ChevronRight className="size-4 text-[#a1a1a1]" />
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_140px_140px_90px_200px_40px] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-4 items-center">
                  <span className="font-medium text-sm leading-5 pr-4">
                    Adopt Postgres for primary storage
                  </span>
                  <span>
                    <Badge className="bg-[oklch(0.769_0.188_70.08)]/15 text-[oklch(0.769_0.188_70.08)] font-normal border-black/1 border-0 border-solid gap-1">
                      <Clock className="size-3" />
                      Pending review
                    </Badge>
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Data team
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    1d ago
                  </span>
                  <span className="truncate text-[#a1a1a1] text-sm leading-5">
                    Architecture Review
                  </span>
                  <span className="flex justify-end">
                    <ChevronRight className="size-4 text-[#a1a1a1]" />
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_140px_140px_90px_200px_40px] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-4 items-center">
                  <span className="font-medium text-sm leading-5 pr-4">
                    Migrate to TypeScript across all services
                  </span>
                  <span>
                    <Badge className="bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)] font-normal border-black/1 border-0 border-solid gap-1">
                      <CheckCircle2 className="size-3" />
                      Approved
                    </Badge>
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Engineering
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    2d ago
                  </span>
                  <span className="truncate text-[#a1a1a1] text-sm leading-5">
                    Sprint Planning
                  </span>
                  <span className="flex justify-end">
                    <ChevronRight className="size-4 text-[#a1a1a1]" />
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_140px_140px_90px_200px_40px] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-4 items-center">
                  <span className="font-medium text-sm leading-5 pr-4">
                    Use Terraform for infra provisioning
                  </span>
                  <span>
                    <Badge className="bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)] font-normal border-black/1 border-0 border-solid gap-1">
                      <CheckCircle2 className="size-3" />
                      Approved
                    </Badge>
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    DevOps
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    3d ago
                  </span>
                  <span className="truncate text-[#a1a1a1] text-sm leading-5">
                    Infra Sync
                  </span>
                  <span className="flex justify-end">
                    <ChevronRight className="size-4 text-[#a1a1a1]" />
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_140px_140px_90px_200px_40px] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-4 items-center">
                  <span className="font-medium text-sm leading-5 pr-4">
                    Implement rate limiting on API Gateway
                  </span>
                  <span>
                    <Badge className="bg-[oklch(0.769_0.188_70.08)]/15 text-[oklch(0.769_0.188_70.08)] font-normal border-black/1 border-0 border-solid gap-1">
                      <Clock className="size-3" />
                      Pending review
                    </Badge>
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Platform team
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    4d ago
                  </span>
                  <span className="truncate text-[#a1a1a1] text-sm leading-5">
                    Backend Architecture
                  </span>
                  <span className="flex justify-end">
                    <ChevronRight className="size-4 text-[#a1a1a1]" />
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_140px_140px_90px_200px_40px] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-4 items-center">
                  <span className="font-medium text-sm leading-5 pr-4">
                    Deprecate legacy REST endpoints
                  </span>
                  <span>
                    <Badge className="font-normal bg-[#ff6467]/15 text-[#ff6467] border-black/1 border-0 border-solid gap-1">
                      <XCircle className="size-3" />
                      Rejected
                    </Badge>
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Backend team
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    5d ago
                  </span>
                  <span className="truncate text-[#a1a1a1] text-sm leading-5">
                    Frontend Sync
                  </span>
                  <span className="flex justify-end">
                    <ChevronRight className="size-4 text-[#a1a1a1]" />
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_140px_140px_90px_200px_40px] px-5 py-4 items-center">
                  <span className="font-medium text-sm leading-5 pr-4">
                    Add OpenTelemetry tracing
                  </span>
                  <span>
                    <Badge className="bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)] font-normal border-black/1 border-0 border-solid gap-1">
                      <CheckCircle2 className="size-3" />
                      Approved
                    </Badge>
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Platform team
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    6d ago
                  </span>
                  <span className="truncate text-[#a1a1a1] text-sm leading-5">
                    Platform Standup
                  </span>
                  <span className="flex justify-end">
                    <ChevronRight className="size-4 text-[#a1a1a1]" />
                  </span>
                </div>
              </Card>
              <div className="flex mt-4 justify-between items-center">
                <span className="text-[#a1a1a1] text-sm leading-5">
                  Showing 8 of 48 decisions
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-neutral-900 text-neutral-50 text-sm leading-5 border-white/10 border-0 border-solid gap-2 h-9"
                  >
                    <ChevronLeft className="size-4" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-neutral-900 text-neutral-50 text-sm leading-5 border-white/10 border-0 border-solid gap-2 h-9"
                  >
                    Next
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
            </main>
            <aside className="shrink-0 overflow-y-auto border-white/10 border-t-0 border-r-0 border-b-0 border-l-1 border-solid flex p-6 flex-col gap-6 w-80 h-full">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-neutral-800 flex justify-center items-center">
                  <Sparkles className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                </div>
                <div className="leading-tight flex flex-col">
                  <span className="font-semibold text-sm leading-5">
                    AI Workspace Assistant
                  </span>
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    Synced 3m ago
                  </span>
                </div>
              </div>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                <CardHeader className="p-0 gap-0">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                    <span className="font-medium text-sm leading-5">
                      Decision Summary
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-3">
                  <div className="items-baseline flex gap-1">
                    <span className="font-semibold text-2xl leading-8">48</span>
                    <span className="text-[#a1a1a1] text-xs leading-4">
                      total decisions
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)] font-normal border-black/1 border-0 border-solid">
                      38 approved
                    </Badge>
                    <Badge className="bg-[oklch(0.769_0.188_70.08)]/15 text-[oklch(0.769_0.188_70.08)] font-normal border-black/1 border-0 border-solid">
                      7 pending
                    </Badge>
                    <Badge className="font-normal bg-[#ff6467]/15 text-[#ff6467] border-black/1 border-0 border-solid">
                      3 rejected
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                <CardHeader className="p-0 gap-0">
                  <div className="flex items-center gap-2">
                    <History className="size-4 text-neutral-50" />
                    <span className="font-medium text-sm leading-5">
                      Recent Decisions
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1.5" />
                    <div className="leading-tight flex flex-col">
                      <span className="text-sm leading-5">
                        Use Redis caching
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Approved · 2h ago
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1.5" />
                    <div className="leading-tight flex flex-col">
                      <span className="text-sm leading-5">
                        Move auth to middleware
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Approved · 5h ago
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                <CardHeader className="p-0 gap-0">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                    <span className="font-medium text-sm leading-5">
                      Suggested Actions
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-2">
                  <button className="text-left rounded-lg bg-neutral-800 flex px-3 py-2.5 items-center gap-3">
                    <FileText className="size-4 shrink-0 text-[#a1a1a1]" />
                    <span className="text-sm leading-5">
                      Document the Redis caching decision
                    </span>
                  </button>
                  <button className="text-left rounded-lg bg-neutral-800 flex px-3 py-2.5 items-center gap-3">
                    <ArrowRight className="size-4 shrink-0 text-[#a1a1a1]" />
                    <span className="text-sm leading-5">
                      Follow up on Postgres adoption
                    </span>
                  </button>
                  <button className="text-left rounded-lg bg-neutral-800 flex px-3 py-2.5 items-center gap-3">
                    <Clock className="size-4 shrink-0 text-[#a1a1a1]" />
                    <span className="text-sm leading-5">
                      Review 2 pending decisions
                    </span>
                  </button>
                </CardContent>
              </Card>
              <div className="relative mt-auto">
                <Sparkles className="top-1/2 -translate-y-1/2 size-4 text-[#a1a1a1] absolute left-3" />
                <Input
                  className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-10"
                  placeholder="Ask the assistant…"
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
