import {
  CalendarPlus,
  CheckCircle2,
  FileText,
  Lightbulb,
  UserPlus,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MeetingsAssistant({ stats = { active: [], upcoming: [], past: [] } }) {
  const activeCount = stats.active?.length || 0;
  const upcomingCount = stats.upcoming?.length || 0;
  const pastCount = stats.past?.length || 0;

  return (
    <>
      <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-4 gap-3">
        <CardHeader className="p-0 flex-row items-center gap-2">
          <Video className="size-4 text-[oklch(0.696_0.17_162.48)]" />
          <CardTitle className="text-sm leading-5">Meeting Summary</CardTitle>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-3">
          <p className="leading-relaxed text-[#a1a1a1] text-xs leading-4">
            {activeCount} active meetings, {upcomingCount} upcoming, {pastCount} completed.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-neutral-800 text-neutral-50 text-xs leading-4"
            >
              {activeCount} active
            </Badge>
            <Badge
              variant="secondary"
              className="bg-neutral-800 text-neutral-50 text-xs leading-4"
            >
              {upcomingCount} upcoming
            </Badge>
            <Badge
              variant="secondary"
              className="bg-neutral-800 text-neutral-50 text-xs leading-4"
            >
              {pastCount} past
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
          <CardTitle className="text-sm leading-5">Suggested Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-2">
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-900 text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-2"
          >
            <FileText className="size-3.5 shrink-0 text-[#a1a1a1]" />
            <span>Review AI notes from Backend Architecture</span>
          </button>
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-900 text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-2"
          >
            <CalendarPlus className="size-3.5 shrink-0 text-[#a1a1a1]" />
            <span>Schedule follow-up for Auth Handoff</span>
          </button>
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-900 text-xs leading-4 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-2"
          >
            <UserPlus className="size-3.5 shrink-0 text-[#a1a1a1]" />
            <span>Invite Data team to Architecture Review</span>
          </button>
        </CardContent>
      </Card>
    </>
  );
}
