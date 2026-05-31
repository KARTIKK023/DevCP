import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Calendar,
  CalendarPlus,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  GitBranch,
  Hexagon,
  Home,
  Layers,
  Lightbulb,
  Plus,
  Rocket,
  Search,
  Settings as SettingsIcon,
  Sparkles,
  Timer,
  UserPlus,
  Users,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Meetings() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="flex w-full h-239 overflow-hidden">
          <aside className="shrink-0 bg-neutral-900 border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-4 flex-col justify-between w-64">
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
                <a className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/meetings">
                  <Video className="size-4" />
                  <span>Meetings</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/architecture">
                  <Layers className="size-4" />
                  <span>Architecture</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/decisions">
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
          <div className="flex flex-col flex-1 overflow-hidden">
            <header className="shrink-0 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 justify-between items-center h-16">
              <div className="flex items-center gap-3">
                <h1 className="font-semibold text-lg leading-7 tracking-tight">
                  Meetings
                </h1>
                <Badge className="border-[oklch(0.696_0.17_162.48)]/30 bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)]">
                  3 active
                </Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-72">
                  <Search className="top-1/2 size-4 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                  <Input
                    className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 w-full h-9"
                    placeholder="Search repos, meetings, decisions…"
                  />
                </div>
                <button className="relative size-9 rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex justify-center items-center">
                  <Bell className="size-4 text-[#a1a1a1]" />
                  <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-2 top-2" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="size-9 font-semibold rounded-full bg-neutral-800 text-xs leading-4 flex justify-center items-center">
                    KC
                  </div>
                  <div className="flex flex-col">
                    <span className="leading-tight font-medium text-sm leading-5">
                      Kartik Chaudhary
                    </span>
                    <span className="leading-tight text-[#a1a1a1] text-xs leading-4">
                      kartik@devsphere.io
                    </span>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-1 overflow-hidden">
              <main className="overflow-y-auto p-8 flex-1">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-xl leading-7 tracking-tight">
                      All meetings
                    </h2>
                    <p className="text-[#a1a1a1] text-sm leading-5">
                      Manage and join your team meetings.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="rounded-lg bg-neutral-900 text-[#a1a1a1] text-sm leading-5 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-9">
                      <span>Status</span>
                      <ChevronDown className="size-4" />
                    </button>
                    <Button className="bg-neutral-200 text-neutral-900 gap-2 h-9">
                      <Plus className="size-4" />
                      New meeting
                    </Button>
                  </div>
                </div>
                <section className="flex mt-8 flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 animate-pulse bg-[oklch(0.696_0.17_162.48)] rounded-full flex" />
                    <h3 className="font-semibold text-sm leading-5 tracking-tight">
                      Active Now
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="relative bg-neutral-900 border-white/10 border-0 border-solid p-5 gap-4">
                      <div className="border-[oklch(0.696_0.17_162.48)]/30 bg-[oklch(0.696_0.17_162.48)]/15 rounded-full border-black/1 border-1 border-solid flex absolute right-5 top-5 px-2 py-0.5 items-center gap-1.5">
                        <span className="size-1.5 animate-pulse bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        <span className="text-[oklch(0.696_0.17_162.48)] font-medium text-[10px]">
                          Live
                        </span>
                      </div>
                      <CardHeader className="p-0 gap-2">
                        <div className="size-9 rounded-lg bg-neutral-800 flex justify-center items-center">
                          <Video className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                        </div>
                        <CardTitle className="text-base leading-6">
                          API Gateway Review
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex p-0 flex-col gap-3">
                        <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Clock className="size-3.5" />
                            <span>2:30 PM</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Timer className="size-3.5" />
                            <span>45 min</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="-space-x-2 flex">
                            <div className="size-7 font-semibold rounded-full bg-neutral-800 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                              KC
                            </div>
                            <div className="size-7 font-semibold rounded-full bg-neutral-700 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                              AM
                            </div>
                            <div className="size-7 font-semibold rounded-full bg-neutral-600 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                              SR
                            </div>
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            3 participants
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 gap-2">
                        <Button className="bg-[oklch(0.696_0.17_162.48)] text-neutral-950 flex-1 gap-1.5 h-9">
                          <Video className="size-4" />
                          Join Now
                        </Button>
                        <Button
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-50 flex-1 h-9"
                        >
                          Details
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="relative bg-neutral-900 border-white/10 border-0 border-solid p-5 gap-4">
                      <div className="border-[oklch(0.696_0.17_162.48)]/30 bg-[oklch(0.696_0.17_162.48)]/15 rounded-full border-black/1 border-1 border-solid flex absolute right-5 top-5 px-2 py-0.5 items-center gap-1.5">
                        <span className="size-1.5 animate-pulse bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        <span className="text-[oklch(0.696_0.17_162.48)] font-medium text-[10px]">
                          Live
                        </span>
                      </div>
                      <CardHeader className="p-0 gap-2">
                        <div className="size-9 rounded-lg bg-neutral-800 flex justify-center items-center">
                          <Video className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                        </div>
                        <CardTitle className="text-base leading-6">
                          Frontend Sync
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex p-0 flex-col gap-3">
                        <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Clock className="size-3.5" />
                            <span>2:45 PM</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Timer className="size-3.5" />
                            <span>30 min</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="-space-x-2 flex">
                            <div className="size-7 font-semibold rounded-full bg-neutral-800 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                              KC
                            </div>
                            <div className="size-7 font-semibold rounded-full bg-neutral-700 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                              BT
                            </div>
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            2 participants
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 gap-2">
                        <Button className="bg-[oklch(0.696_0.17_162.48)] text-neutral-950 flex-1 gap-1.5 h-9">
                          <Video className="size-4" />
                          Join Now
                        </Button>
                        <Button
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-50 flex-1 h-9"
                        >
                          Details
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </section>
                <section className="flex mt-8 flex-col gap-3">
                  <h3 className="font-semibold text-sm leading-5 tracking-tight">
                    Upcoming
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-5 gap-4">
                      <CardHeader className="p-0 gap-2">
                        <div className="size-9 bg-[oklch(0.627_0.265_303.9)]/15 rounded-lg flex justify-center items-center">
                          <Calendar className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                        </div>
                        <CardTitle className="text-base leading-6">
                          Architecture Review
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex p-0 flex-col gap-3">
                        <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="size-3.5" />
                            <span>4:00 PM today</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="size-3.5" />
                            <span>5 participants</span>
                          </div>
                        </div>
                        <div className="-space-x-2 flex">
                          <div className="size-7 font-semibold rounded-full bg-neutral-800 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            KC
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-700 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            AM
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-600 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            SR
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-700 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            DT
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-800 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            +1
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 gap-2">
                        <Button
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-50 flex-1 gap-1.5 h-9"
                        >
                          <CalendarPlus className="size-4" />
                          Add to Calendar
                        </Button>
                        <Button
                          variant="ghost"
                          className="text-[#a1a1a1] flex-1 h-9"
                        >
                          Details
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-5 gap-4">
                      <CardHeader className="p-0 gap-2">
                        <div className="size-9 bg-[oklch(0.488_0.243_264.376)]/15 rounded-lg flex justify-center items-center">
                          <Calendar className="size-4 text-[oklch(0.488_0.243_264.376)]" />
                        </div>
                        <CardTitle className="text-base leading-6">
                          Sprint Planning
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex p-0 flex-col gap-3">
                        <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="size-3.5" />
                            <span>10:00 AM tomorrow</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="size-3.5" />
                            <span>8 participants</span>
                          </div>
                        </div>
                        <div className="-space-x-2 flex">
                          <div className="size-7 font-semibold rounded-full bg-neutral-800 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            KC
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-700 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            AM
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-600 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            BT
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-700 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            SR
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-800 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            +4
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 gap-2">
                        <Button
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-50 flex-1 gap-1.5 h-9"
                        >
                          <CalendarPlus className="size-4" />
                          Add to Calendar
                        </Button>
                        <Button
                          variant="ghost"
                          className="text-[#a1a1a1] flex-1 h-9"
                        >
                          Details
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-5 gap-4">
                      <CardHeader className="p-0 gap-2">
                        <div className="size-9 bg-[oklch(0.769_0.188_70.08)]/15 rounded-lg flex justify-center items-center">
                          <Calendar className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                        </div>
                        <CardTitle className="text-base leading-6">
                          Infra Sync
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex p-0 flex-col gap-3">
                        <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="size-3.5" />
                            <span>3:00 PM tomorrow</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="size-3.5" />
                            <span>3 participants</span>
                          </div>
                        </div>
                        <div className="-space-x-2 flex">
                          <div className="size-7 font-semibold rounded-full bg-neutral-800 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            KC
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-700 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            DT
                          </div>
                          <div className="size-7 font-semibold rounded-full bg-neutral-600 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            SR
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 gap-2">
                        <Button
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-50 flex-1 gap-1.5 h-9"
                        >
                          <CalendarPlus className="size-4" />
                          Add to Calendar
                        </Button>
                        <Button
                          variant="ghost"
                          className="text-[#a1a1a1] flex-1 h-9"
                        >
                          Details
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="bg-neutral-900/40 border-white/10 border-1 border-dashed flex p-5 justify-center items-center gap-2">
                      <div className="text-center flex flex-col items-center gap-2">
                        <div className="size-9 rounded-lg bg-neutral-800 flex justify-center items-center">
                          <Plus className="size-4 text-[#a1a1a1]" />
                        </div>
                        <span className="font-medium text-[#a1a1a1] text-sm leading-5">
                          Schedule a meeting
                        </span>
                      </div>
                    </Card>
                  </div>
                </section>
                <section className="flex mt-8 pb-4 flex-col gap-3">
                  <h3 className="font-semibold text-sm leading-5 tracking-tight">
                    Past Meetings
                  </h3>
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] font-medium text-[#a1a1a1] text-xs leading-4 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-3 items-center">
                      <span>Meeting Name</span>
                      <span>Date</span>
                      <span>Duration</span>
                      <span>Participants</span>
                      <span>AI Notes</span>
                    </div>
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] text-sm leading-5 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-4 items-center">
                      <div className="flex items-center gap-2">
                        <Video className="size-4 text-[#a1a1a1]" />
                        <span className="font-medium">
                          Backend Architecture
                        </span>
                      </div>
                      <span className="text-[#a1a1a1]">Yesterday</span>
                      <span className="text-[#a1a1a1]">60 min</span>
                      <span className="text-[#a1a1a1]">4 participants</span>
                      <a className="text-[oklch(0.696_0.17_162.48)] flex items-center gap-1">
                        <FileText className="size-3.5" />
                        View notes
                      </a>
                    </div>
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] text-sm leading-5 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-5 py-4 items-center">
                      <div className="flex items-center gap-2">
                        <Video className="size-4 text-[#a1a1a1]" />
                        <span className="font-medium">
                          Auth Service Handoff
                        </span>
                      </div>
                      <span className="text-[#a1a1a1]">2 days ago</span>
                      <span className="text-[#a1a1a1]">45 min</span>
                      <span className="text-[#a1a1a1]">3 participants</span>
                      <a className="text-[oklch(0.696_0.17_162.48)] flex items-center gap-1">
                        <FileText className="size-3.5" />
                        View notes
                      </a>
                    </div>
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] text-sm leading-5 px-5 py-4 items-center">
                      <div className="flex items-center gap-2">
                        <Video className="size-4 text-[#a1a1a1]" />
                        <span className="font-medium">Platform Standup</span>
                      </div>
                      <span className="text-[#a1a1a1]">3 days ago</span>
                      <span className="text-[#a1a1a1]">15 min</span>
                      <span className="text-[#a1a1a1]">6 participants</span>
                      <a className="text-[oklch(0.696_0.17_162.48)] flex items-center gap-1">
                        <FileText className="size-3.5" />
                        View notes
                      </a>
                    </div>
                  </Card>
                </section>
              </main>
              <aside className="shrink-0 bg-neutral-900 border-white/10 border-t-0 border-r-0 border-b-0 border-l-1 border-solid flex flex-col w-80">
                <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex p-5 flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                    <span className="font-semibold text-sm leading-5">
                      AI Workspace Assistant
                    </span>
                  </div>
                  <span className="text-[#a1a1a1] text-xs leading-4 pl-6">
                    Synced 3m ago
                  </span>
                </div>
                <div className="overflow-y-auto flex p-5 flex-col flex-1 gap-4">
                  <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-4 gap-3">
                    <CardHeader className="p-0 flex-row items-center gap-2">
                      <Video className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                      <CardTitle className="text-sm leading-5">
                        Meeting Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-3">
                      <p className="leading-relaxed text-[#a1a1a1] text-xs leading-4">
                        3 active meetings, 2 upcoming today, 5 AI note sets
                        generated this week.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-50 text-xs leading-4"
                        >
                          3 active
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-50 text-xs leading-4"
                        >
                          2 today
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-50 text-xs leading-4"
                        >
                          5 notes
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-4 gap-3">
                    <CardHeader className="p-0 flex-row items-center gap-2">
                      <CheckCircle2 className="size-4 text-[oklch(0.488_0.243_264.376)]" />
                      <CardTitle className="text-sm leading-5">
                        Recent Decisions from Meetings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-3">
                      <div className="flex gap-2">
                        <span className="size-1.5 shrink-0 bg-[oklch(0.696_0.17_162.48)] rounded-full mt-1.5" />
                        <div className="flex flex-col">
                          <span className="font-medium text-xs leading-4">
                            Use Redis caching
                          </span>
                          <span className="text-[#a1a1a1] text-[11px]">
                            from API Gateway Review · 2h ago
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="size-1.5 shrink-0 bg-[oklch(0.696_0.17_162.48)] rounded-full mt-1.5" />
                        <div className="flex flex-col">
                          <span className="font-medium text-xs leading-4">
                            Move auth to middleware
                          </span>
                          <span className="text-[#a1a1a1] text-[11px]">
                            from Frontend Sync · 5h ago
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-4 gap-3">
                    <CardHeader className="p-0 flex-row items-center gap-2">
                      <Lightbulb className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                      <CardTitle className="text-sm leading-5">
                        Suggested Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-2">
                      <button className="text-left rounded-lg bg-neutral-900 text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-2">
                        <FileText className="size-3.5 shrink-0 text-[#a1a1a1]" />
                        <span>Review AI notes from Backend Architecture</span>
                      </button>
                      <button className="text-left rounded-lg bg-neutral-900 text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-2">
                        <CalendarPlus className="size-3.5 shrink-0 text-[#a1a1a1]" />
                        <span>Schedule follow-up for Auth Handoff</span>
                      </button>
                      <button className="text-left rounded-lg bg-neutral-900 text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-2">
                        <UserPlus className="size-3.5 shrink-0 text-[#a1a1a1]" />
                        <span>Invite Data team to Architecture Review</span>
                      </button>
                    </CardContent>
                  </Card>
                </div>
                <div className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid p-4">
                  <div className="relative">
                    <Sparkles className="top-1/2 size-4 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                    <Input
                      className="bg-neutral-950 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-10"
                      placeholder="Ask the assistant…"
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
