import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  FolderGit2,
  GitBranch,
  GitPullRequest,
  Hexagon,
  Home,
  Layers,
  Lightbulb,
  Rocket,
  Search,
  Settings as SettingsIcon,
  Sparkles,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 flex w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
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
                <a className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard">
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
        <div className="flex flex-col flex-1 h-239 overflow-hidden">
          <header className="shrink-0 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-8 justify-between items-center gap-4 h-16">
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-lg leading-7 tracking-tight">
                Home
              </h1>
              <Badge variant="secondary" className="font-normal text-[#a1a1a1]">
                Engineering workspace
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-72">
                <Search className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                <Input
                  placeholder="Search repos, meetings, decisions..."
                  className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-9"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="size-9 relative bg-neutral-900 border-white/10 border-0 border-solid"
              >
                <Bell className="size-4" />
                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-1.5 top-1.5" />
              </Button>
              <div className="flex pl-2 items-center gap-2">
                <div className="size-8 rounded-full border-white/10 border-1 border-solid overflow-hidden" />
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
            <main className="overflow-y-auto flex p-8 flex-col flex-1 gap-8">
              <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-base leading-6 tracking-tight">
                      Workspace overview
                    </h2>
                    <p className="text-[#a1a1a1] text-sm leading-5">
                      A snapshot of your engineering activity.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
                    <CardContent className="flex p-0 flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
                          <GitBranch className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                        </div>
                        <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                          <TrendingUp className="size-3" />
                          +2
                        </span>
                      </div>
                      <span className="font-semibold text-2xl leading-8 tracking-tight">
                        12
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Connected repositories
                      </span>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
                    <CardContent className="flex p-0 flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
                          <Video className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1">
                          <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                          live
                        </span>
                      </div>
                      <span className="font-semibold text-2xl leading-8 tracking-tight">
                        3
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Active meetings
                      </span>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
                    <CardContent className="flex p-0 flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
                          <Layers className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          updated 1h
                        </span>
                      </div>
                      <span className="font-semibold text-2xl leading-8 tracking-tight">
                        8
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Architecture boards
                      </span>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
                    <CardContent className="flex p-0 flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
                          <CheckCircle2 className="size-4 text-[oklch(0.488_0.243_264.376)]" />
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1">
                          <TrendingUp className="size-3" />
                          +6
                        </span>
                      </div>
                      <span className="font-semibold text-2xl leading-8 tracking-tight">
                        48
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Decisions captured
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </section>
              <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-base leading-6 tracking-tight">
                    Recent repositories
                  </h2>
                  <Button
                    variant="ghost"
                    className="text-[#a1a1a1] text-xs leading-4 gap-1 h-8"
                  >
                    View all
                    <ChevronRight className="size-3" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                    <CardContent className="flex p-0 flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                            <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          </div>
                          <span className="font-medium text-sm leading-5">
                            api-gateway
                          </span>
                        </div>
                        <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                          <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                          synced
                        </span>
                      </div>
                      <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
                        <GitBranch className="size-3.5" />
                        main<span className="text-white/10">·</span>TypeScript
                      </div>
                      <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        Last activity 2m ago
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                    <CardContent className="flex p-0 flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                            <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          </div>
                          <span className="font-medium text-sm leading-5">
                            web-client
                          </span>
                        </div>
                        <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                          <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                          synced
                        </span>
                      </div>
                      <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
                        <GitBranch className="size-3.5" />
                        main<span className="text-white/10">·</span>React
                      </div>
                      <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        Last activity 1h ago
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                    <CardContent className="flex p-0 flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                            <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          </div>
                          <span className="font-medium text-sm leading-5">
                            auth-service
                          </span>
                        </div>
                        <span className="text-[oklch(0.769_0.188_70.08)] text-xs leading-4 flex items-center gap-1">
                          <span className="size-1.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                          syncing
                        </span>
                      </div>
                      <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
                        <GitBranch className="size-3.5" />
                        feat/middleware<span className="text-white/10">·</span>
                        Go
                      </div>
                      <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        Last activity 12m ago
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
              <div className="grid grid-cols-2 gap-8">
                <section className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-base leading-6 tracking-tight">
                      Recent decisions
                    </h2>
                    <Button
                      variant="ghost"
                      className="text-[#a1a1a1] text-xs leading-4 gap-1 h-8"
                    >
                      View all
                      <ChevronRight className="size-3" />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
                      <CardContent className="flex p-0 items-start gap-3">
                        <CheckCircle2 className="size-4 text-[oklch(0.696_0.17_162.48)] shrink-0 mt-0.5" />
                        <div className="flex flex-col flex-1 gap-1">
                          <span className="font-medium text-sm leading-5">
                            Use Redis caching
                          </span>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Approved · Platform team
                          </span>
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2h ago
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
                      <CardContent className="flex p-0 items-start gap-3">
                        <CheckCircle2 className="size-4 text-[oklch(0.696_0.17_162.48)] shrink-0 mt-0.5" />
                        <div className="flex flex-col flex-1 gap-1">
                          <span className="font-medium text-sm leading-5">
                            Move auth to middleware
                          </span>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Approved · Backend team
                          </span>
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          5h ago
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
                      <CardContent className="flex p-0 items-start gap-3">
                        <Clock className="size-4 text-[oklch(0.769_0.188_70.08)] shrink-0 mt-0.5" />
                        <div className="flex flex-col flex-1 gap-1">
                          <span className="font-medium text-sm leading-5">
                            Adopt Postgres for primary storage
                          </span>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Pending review · Data team
                          </span>
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          1d ago
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </section>
                <section className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-base leading-6 tracking-tight">
                      Architecture boards
                    </h2>
                    <Button
                      variant="ghost"
                      className="text-[#a1a1a1] text-xs leading-4 gap-1 h-8"
                    >
                      View all
                      <ChevronRight className="size-3" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
                      <div className="relative h-28">
                        <img
                          src="https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW0lMjBkYXJrfGVufDF8MHx8fDE3ODAxNzk0NjF8MA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="board"
                          className="object-cover w-full h-full"
                          data-photoid="_XXNjSziZuA"
                          data-authorname="Hanna Morris"
                          data-authorurl="https://unsplash.com/@hcmorr"
                          data-blurhash="LKPQBJRj00j@-:t7j]ofD%WBaxof"
                        />
                        <div className="bg-neutral-950/50 absolute inset-0" />
                      </div>
                      <div className="flex p-3 flex-col gap-1">
                        <span className="font-medium text-sm leading-5">
                          Service Mesh
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          14 nodes · updated 1h ago
                        </span>
                      </div>
                    </Card>
                    <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-0 gap-0 overflow-hidden">
                      <div className="relative h-28">
                        <img
                          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwbm9kZSUyMGdyYXBoJTIwYWJzdHJhY3QlMjBkYXJrfGVufDF8MHx8fDE3ODAxNzk0NjF8MA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="board"
                          className="object-cover w-full h-full"
                          data-photoid="xuTJZ7uD7PI"
                          data-authorname="Conny Schneider"
                          data-authorurl="https://unsplash.com/@choys_"
                          data-blurhash="LX2GUWkGawkFaEflkFf5fhabacfi"
                        />
                        <div className="bg-neutral-950/50 absolute inset-0" />
                      </div>
                      <div className="flex p-3 flex-col gap-1">
                        <span className="font-medium text-sm leading-5">
                          Data Pipeline
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          9 nodes · updated 3h ago
                        </span>
                      </div>
                    </Card>
                  </div>
                  <Avatar>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </section>
              </div>
              <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-base leading-6 tracking-tight">
                    Upcoming meetings
                  </h2>
                  <Button
                    variant="ghost"
                    className="text-[#a1a1a1] text-xs leading-4 gap-1 h-8"
                  >
                    View calendar
                    <ChevronRight className="size-3" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                    <CardContent className="flex p-0 justify-between items-center gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                            <Video className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                          </div>
                          <span className="font-medium text-sm leading-5">
                            Architecture sync
                          </span>
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                          <Clock className="size-3.5" />
                          Today · 14:00 – 14:45
                        </span>
                        <div className="-space-x-2 flex mt-1 items-center">
                          <div className="size-7 rounded-full border-neutral-900 border-2 border-solid overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8Mnx8fDE3ODAxNjQyMDl8MA&ixlib=rb-4.1.0&q=80&w=400"
                              alt="p"
                              className="object-cover w-full h-full"
                              data-photoid="n4KewLKFOZw"
                              data-authorname="Imansyah Muhamad Putera"
                              data-authorurl="https://unsplash.com/@imansyahmp"
                              data-blurhash="LOE{FM_NK6r=kqt7$*WXE2RjwvWV"
                            />
                          </div>
                          <div className="size-7 rounded-full border-neutral-900 border-2 border-solid overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1634108783851-f97f86257d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVuZ2luZWVyJTIwcG9ydHJhaXR8ZW58MXwyfHx8MTc4MDA1ODIxOXww&ixlib=rb-4.1.0&q=80&w=400"
                              alt="p"
                              className="object-cover w-full h-full"
                              data-photoid="u_JBECP7kKE"
                              data-authorname="AngTheDesigner"
                              data-authorurl="https://unsplash.com/@angthedesigner"
                              data-blurhash="LA8#7=%M00tR_3-;M{Mx-;%MWBIU"
                            />
                          </div>
                          <div className="size-7 rounded-full border-neutral-900 border-2 border-solid overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtYW4lMjBkZXZlbG9wZXIlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MXwyfHx8MTc4MDA1ODIxOXww&ixlib=rb-4.1.0&q=80&w=400"
                              alt="p"
                              className="object-cover w-full h-full"
                              data-photoid="oh7BwFw07cw"
                              data-authorname="Daniil Lobachev"
                              data-authorurl="https://unsplash.com/@danilal"
                              data-blurhash="L55hY|?b0000oft7ofM{9FD%%M_3"
                            />
                          </div>
                          <div className="size-7 rounded-full bg-neutral-800 text-[#a1a1a1] text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            +2
                          </div>
                        </div>
                      </div>
                      <Button className="bg-neutral-200 text-neutral-900 text-xs leading-4 h-8">
                        Join
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                    <CardContent className="flex p-0 justify-between items-center gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                            <Video className="size-4 text-[oklch(0.488_0.243_264.376)]" />
                          </div>
                          <span className="font-medium text-sm leading-5">
                            Sprint planning
                          </span>
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                          <Clock className="size-3.5" />
                          Tomorrow · 10:00 – 11:00
                        </span>
                        <div className="-space-x-2 flex mt-1 items-center">
                          <div className="size-7 rounded-full border-neutral-900 border-2 border-solid overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1634108783851-f97f86257d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVuZ2luZWVyJTIwcG9ydHJhaXR8ZW58MXwyfHx8MTc4MDA1ODIxOXww&ixlib=rb-4.1.0&q=80&w=400"
                              alt="p"
                              className="object-cover w-full h-full"
                              data-photoid="u_JBECP7kKE"
                              data-authorname="AngTheDesigner"
                              data-authorurl="https://unsplash.com/@angthedesigner"
                              data-blurhash="LA8#7=%M00tR_3-;M{Mx-;%MWBIU"
                            />
                          </div>
                          <div className="size-7 rounded-full border-neutral-900 border-2 border-solid overflow-hidden">
                            <img
                              src="https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtYW4lMjBkZXZlbG9wZXIlMjBmYWNlJTIwcG9ydHJhaXR8ZW58MXwyfHx8MTc4MDA1ODIxOXww&ixlib=rb-4.1.0&q=80&w=400"
                              alt="p"
                              className="object-cover w-full h-full"
                              data-photoid="oh7BwFw07cw"
                              data-authorname="Daniil Lobachev"
                              data-authorurl="https://unsplash.com/@danilal"
                              data-blurhash="L55hY|?b0000oft7ofM{9FD%%M_3"
                            />
                          </div>
                          <div className="size-7 rounded-full bg-neutral-800 text-[#a1a1a1] text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
                            +4
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="bg-neutral-800 text-xs leading-4 border-white/10 border-0 border-solid h-8"
                      >
                        Details
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </main>
            <aside className="shrink-0 overflow-y-auto border-white/10 border-t-0 border-r-0 border-b-0 border-l-1 border-solid flex p-6 flex-col gap-6 w-80 h-full">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
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
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
                <CardHeader className="p-0 gap-1">
                  <div className="flex items-center gap-2">
                    <GitBranch className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                    <span className="font-medium text-sm leading-5">
                      Repository summary
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-2">
                  <p className="leading-relaxed text-[#a1a1a1] text-xs leading-4">
                    api-gateway shows 14 commits this week, mostly around
                    rate-limiting. web-client is stable. auth-service is
                    mid-refactor on the middleware branch.
                  </p>
                  <div className="flex pt-1 flex-wrap gap-1.5">
                    <Badge
                      variant="secondary"
                      className="font-normal text-xs leading-4"
                    >
                      14 commits
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-normal text-xs leading-4"
                    >
                      3 PRs open
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
                <CardHeader className="p-0 gap-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[oklch(0.488_0.243_264.376)]" />
                    <span className="font-medium text-sm leading-5">
                      Recent decisions
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1.5" />
                    <div className="flex flex-col">
                      <span className="font-medium text-xs leading-4">
                        Use Redis caching
                      </span>
                      <span className="text-[#a1a1a1] text-[11px]">
                        Approved · 2h ago
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1.5" />
                    <div className="flex flex-col">
                      <span className="font-medium text-xs leading-4">
                        Move auth to middleware
                      </span>
                      <span className="text-[#a1a1a1] text-[11px]">
                        Approved · 5h ago
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                <CardHeader className="p-0 gap-1">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                    <span className="font-medium text-sm leading-5">
                      Suggested actions
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-2">
                  <button className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full">
                    <GitPullRequest className="size-4 shrink-0 text-[#a1a1a1]" />
                    <span className="text-xs leading-4">
                      Review 3 open PRs in api-gateway
                    </span>
                  </button>
                  <button className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full">
                    <FileText className="size-4 shrink-0 text-[#a1a1a1]" />
                    <span className="text-xs leading-4">
                      Document the Redis caching decision
                    </span>
                  </button>
                  <button className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full">
                    <Users className="size-4 shrink-0 text-[#a1a1a1]" />
                    <span className="text-xs leading-4">
                      Invite Data team to Architecture sync
                    </span>
                  </button>
                </CardContent>
              </Card>
              <div className="relative mt-auto">
                <Sparkles className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                <Input
                  placeholder="Ask the assistant..."
                  className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-9"
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
