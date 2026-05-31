import {
  Calendar,
  CalendarPlus,
  ChevronDown,
  Clock,
  FileText,
  Plus,
  Timer,
  Users,
  Video,
} from "lucide-react";
import MeetingsAssistant from "@/components/dashboard/assistants/MeetingsAssistant";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDashboardPage } from "@/hooks/useDashboardPage";

export default function Meetings() {
  useDashboardPage({
    title: "Meetings",
    badge: (
      <Badge className="border-[oklch(0.696_0.17_162.48)]/30 bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)]">
        3 active
      </Badge>
    ),
    
    controlsClassName: "gap-4",
    bellStyle: "plain",
    avatarStyle: "initials-lg",
    contentClassName: "flex flex-col flex-1 overflow-hidden",
    layoutClassName: "min-h-0 overflow-hidden",
    assistantVariant: "panel",
    assistant: <MeetingsAssistant />,
  });

  return (
    <>
<div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-xl leading-7 tracking-tight">
                      All meetings
                    </h2>
                    <p className="text-[#a1a1a1] text-sm leading-5">
                      Manage and join your team meetings.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </>
  );
}
