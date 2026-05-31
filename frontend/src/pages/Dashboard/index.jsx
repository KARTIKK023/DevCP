import {
  CheckCircle2,
  ChevronRight,
  Clock,
  FolderGit2,
  GitBranch,
  Layers,
  TrendingUp,
  Video,
} from "lucide-react";
import DashboardAssistant from "@/components/dashboard/assistants/DashboardAssistant";
import StatCard from "@/components/dashboard/StatCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDashboardPage } from "@/hooks/useDashboardPage";

export default function Dashboard() {
  useDashboardPage({
    title: "Home",
    badge: (
      <Badge variant="secondary" className="font-normal text-[#a1a1a1]">
        Engineering workspace
      </Badge>
    ),
    avatarStyle: "empty",
    contentClassName: "flex flex-col flex-1 min-h-0 overflow-hidden",
    assistant: <DashboardAssistant />,
  });

  return (
    <>
<section className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-base leading-6 tracking-tight">
                      Workspace overview
                    </h2>
                    <p className="text-[#a1a1a1] text-sm leading-5">
                      A snapshot of your engineering activity.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  <StatCard
                    icon={
                      <GitBranch className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                    }
                    meta={
                      <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                        <TrendingUp className="size-3" />
                        +2
                      </span>
                    }
                    value="12"
                    label="Connected repositories"
                  />
                  <StatCard
                    icon={
                      <Video className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                    }
                    meta={
                      <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1">
                        <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        live
                      </span>
                    }
                    value="3"
                    label="Active meetings"
                  />
                  <StatCard
                    icon={
                      <Layers className="size-4 text-[oklch(0.769_0.188_70.08)]" />
                    }
                    meta={
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        updated 1h
                      </span>
                    }
                    value="8"
                    label="Architecture boards"
                  />
                  <StatCard
                    icon={
                      <CheckCircle2 className="size-4 text-[oklch(0.488_0.243_264.376)]" />
                    }
                    meta={
                      <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1">
                        <TrendingUp className="size-3" />
                        +6
                      </span>
                    }
                    value="48"
                    label="Decisions captured"
                  />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </>
  );
}
