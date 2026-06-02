import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  CalendarPlus,
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader,
  Plus,
  Timer,
  Users,
  Video,
  X,
} from "lucide-react";
import { ApiError } from "@/api/client";
import { createMeeting, getMeetings, joinMeeting } from "@/api/meetings";
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
import { getInitials } from "@/lib/utils";

const filters = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
  { id: "invited", label: "Invited" },
];

function getDefaultScheduledAt() {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 15);
  date.setSeconds(0, 0);
  return toDateTimeLocalValue(date);
}

function toDateTimeLocalValue(date) {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().slice(0, 16);
}

function getMeetingStatus(meeting) {
  const now = Date.now();
  const start = new Date(meeting.scheduledAt).getTime();
  const end = start + meeting.durationMinutes * 60 * 1000;

  if (now >= start && now <= end) return "active";
  if (now < start) return "upcoming";
  return "past";
}

function formatMeetingTime(meeting) {
  const date = new Date(meeting.scheduledAt);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function formatFullMeetingTime(meeting) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(meeting.scheduledAt));
}

function downloadCalendarInvite(meeting) {
  const start = new Date(meeting.scheduledAt);
  const end = new Date(start.getTime() + meeting.durationMinutes * 60 * 1000);
  const stamp = (date) => date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DevSphere//Meetings//EN",
    "BEGIN:VEVENT",
    `UID:${meeting.id}@devsphere`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${meeting.title}`,
    `DESCRIPTION:${meeting.description || "DevSphere meeting"}`,
    `URL:${meeting.roomUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  const url = URL.createObjectURL(new Blob([body], { type: "text/calendar" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${meeting.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.ics`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function ParticipantStack({ participants }) {
  const visible = participants.slice(0, 4);
  const remaining = participants.length - visible.length;

  return (
    <div className="flex items-center gap-2">
      <div className="-space-x-2 flex">
        {visible.map((participant) => (
          <div
            key={participant.userId}
            title={participant.name}
            className="size-7 font-semibold rounded-full bg-neutral-800 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center"
          >
            {getInitials(participant.name)}
          </div>
        ))}
        {remaining > 0 && (
          <div className="size-7 font-semibold rounded-full bg-neutral-700 text-[10px] border-neutral-900 border-2 border-solid flex justify-center items-center">
            +{remaining}
          </div>
        )}
      </div>
      <span className="text-[#a1a1a1] text-xs leading-4">
        {participants.length} participant{participants.length === 1 ? "" : "s"}
      </span>
    </div>
  );
}

function MeetingCard({ meeting, status, onJoin, isJoining }) {
  const isActive = status === "active";
  const isPast = status === "past";
  const isInvited = meeting.accessType === "invited";

  return (
    <Card className="relative bg-neutral-900 border-white/10 border-1 border-solid p-5 gap-4">
      <div
        className={`rounded-full border-black/1 border-1 border-solid flex absolute right-5 top-5 px-2 py-0.5 items-center gap-1.5 ${
          isActive
            ? "border-[oklch(0.696_0.17_162.48)]/30 bg-[oklch(0.696_0.17_162.48)]/15"
            : isPast
              ? "bg-neutral-800 text-[#a1a1a1]"
              : "bg-[oklch(0.488_0.243_264.376)]/15"
        }`}
      >
        <span
          className={`size-1.5 rounded-full ${
            isActive
              ? "animate-pulse bg-[oklch(0.696_0.17_162.48)]"
              : isPast
                ? "bg-[#a1a1a1]"
                : "bg-[oklch(0.488_0.243_264.376)]"
          }`}
        />
        <span
          className={`font-medium text-[10px] capitalize ${
            isActive
              ? "text-[oklch(0.696_0.17_162.48)]"
              : isPast
                ? "text-[#a1a1a1]"
                : "text-[oklch(0.488_0.243_264.376)]"
          }`}
        >
          {status}
        </span>
      </div>
      <CardHeader className="p-0 gap-2 pr-20">
        <div className="size-9 rounded-lg bg-neutral-800 flex justify-center items-center">
          {isActive ? (
            <Video className="size-4 text-[oklch(0.696_0.17_162.48)]" />
          ) : (
            <Calendar className="size-4 text-[oklch(0.488_0.243_264.376)]" />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <CardTitle className="text-base leading-6">{meeting.title}</CardTitle>
          {isInvited && (
            <span className="text-[oklch(0.769_0.188_70.08)] text-[11px] leading-4">
              Invited to join
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex p-0 flex-col gap-3">
        {meeting.description && (
          <p className="text-[#a1a1a1] text-xs leading-5 pr-2">
            {meeting.description}
          </p>
        )}
        <div className="text-[#a1a1a1] text-xs leading-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            <span>{formatMeetingTime(meeting)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Timer className="size-3.5" />
            <span>{meeting.durationMinutes} min</span>
          </div>
        </div>
        <ParticipantStack participants={meeting.participants} />
      </CardContent>
      <CardFooter className="p-0 gap-2">
        <Button
          className={`flex-1 gap-1.5 h-9 ${
            isPast
              ? "bg-neutral-800 text-neutral-50"
              : "bg-[oklch(0.696_0.17_162.48)] text-neutral-950"
          }`}
          disabled={isJoining || isPast}
          onClick={() => onJoin(meeting)}
        >
          {isJoining ? <Loader className="size-4 animate-spin" /> : <Video className="size-4" />}
          {isPast ? "Ended" : "Join Now"}
        </Button>
        <Button
          variant="secondary"
          className="bg-neutral-800 text-neutral-50 flex-1 gap-1.5 h-9"
          onClick={() => downloadCalendarInvite(meeting)}
        >
          <CalendarPlus className="size-4" />
          Calendar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Meetings() {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [joiningId, setJoiningId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    scheduledAt: getDefaultScheduledAt(),
    durationMinutes: 30,
  });

  const meetingsByStatus = useMemo(() => {
    return meetings.reduce(
      (groups, meeting) => {
        groups[getMeetingStatus(meeting)].push(meeting);
        return groups;
      },
      { active: [], upcoming: [], past: [], invited: [] }
    );
  }, [meetings]);

  const visibleMeetings = useMemo(() => {
    if (filter === "all") return meetings;
    if (filter === "invited") {
      return meetings.filter((meeting) => meeting.accessType === "invited");
    }
    return meetingsByStatus[filter];
  }, [filter, meetings, meetingsByStatus]);

  useDashboardPage({
    title: "Meetings",
    badge: (
      <Badge className="border-[oklch(0.696_0.17_162.48)]/30 bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)]">
        Live data
      </Badge>
    ),
    controlsClassName: "gap-4",
    bellStyle: "plain",
    avatarStyle: "initials-lg",
    contentClassName: "flex flex-col flex-1 overflow-hidden",
    layoutClassName: "min-h-0 overflow-hidden",
    assistantVariant: "panel",
    assistant: <MeetingsAssistant stats={meetingsByStatus} />,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadMeetings() {
      try {
        setError("");
        const data = await getMeetings();
        if (isMounted) setMeetings(data);
      } catch (err) {
        if (isMounted) {
          setError(err instanceof ApiError ? err.message : "Unable to load meetings.");
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadMeetings();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const meeting = await createMeeting({
        title: form.title,
        description: form.description,
        scheduledAt: new Date(form.scheduledAt).toISOString(),
        durationMinutes: Number(form.durationMinutes),
      });

      setMeetings((current) =>
        [...current, meeting].sort((a, b) => new Date(a.scheduledAt) - new Date(b.scheduledAt))
      );
      setForm({
        title: "",
        description: "",
        scheduledAt: getDefaultScheduledAt(),
        durationMinutes: 30,
      });
      setShowCreateForm(false);
      setFilter("all");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Unable to create meeting.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJoin = async (meeting) => {
    setJoiningId(meeting.id);
    setError("");

    try {
      const updatedMeeting = await joinMeeting(meeting.id);
      setMeetings((current) =>
        current.map((item) => (item.id === updatedMeeting.id ? updatedMeeting : item))
      );
      navigate(`/dashboard/meetings/${updatedMeeting.id}/room`);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Unable to join meeting.");
    } finally {
      setJoiningId("");
    }
  };

  return (
    <main className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-xl leading-7 tracking-tight">
              All meetings
            </h2>
            <p className="text-[#a1a1a1] text-sm leading-5">
              Create meetings, track schedules, and jump into a room.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-lg bg-neutral-900 text-[#a1a1a1] text-sm leading-5 border-white/10 border-1 border-solid flex items-center gap-2 h-9 px-3">
              <span>Status</span>
              <ChevronDown className="size-4" />
            </div>
            <Button
              className="bg-neutral-200 text-neutral-900 gap-2 h-9"
              onClick={() => setShowCreateForm((value) => !value)}
            >
              {showCreateForm ? <X className="size-4" /> : <Plus className="size-4" />}
              {showCreateForm ? "Close" : "New meeting"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ["Active", meetingsByStatus.active.length, Video],
            ["Upcoming", meetingsByStatus.upcoming.length, Calendar],
            ["Past", meetingsByStatus.past.length, CheckCircle2],
            ["Total", meetings.length, Users],
          ].map(([label, value, Icon]) => (
            <Card
              key={label}
              className="bg-neutral-900 border-white/10 border-1 border-solid p-4"
            >
              <CardContent className="p-0 flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[#a1a1a1] text-xs leading-4">{label}</span>
                  <span className="font-semibold text-2xl leading-8">{value}</span>
                </div>
                <div className="size-9 rounded-lg bg-neutral-800 flex justify-center items-center">
                  <Icon className="size-4 text-[#a1a1a1]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showCreateForm && (
          <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-5">
            <form onSubmit={handleCreate} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-4 flex flex-col gap-2">
                <label className="font-medium text-sm leading-5">Title</label>
                <input
                  name="title"
                  required
                  minLength={2}
                  value={form.title}
                  onChange={handleChange}
                  placeholder="API Gateway Review"
                  className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 h-10"
                />
              </div>
              <div className="lg:col-span-3 flex flex-col gap-2">
                <label className="font-medium text-sm leading-5">Start time</label>
                <input
                  name="scheduledAt"
                  type="datetime-local"
                  required
                  value={form.scheduledAt}
                  onChange={handleChange}
                  className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 h-10"
                />
              </div>
              <div className="lg:col-span-2 flex flex-col gap-2">
                <label className="font-medium text-sm leading-5">Minutes</label>
                <input
                  name="durationMinutes"
                  type="number"
                  min="5"
                  max="480"
                  value={form.durationMinutes}
                  onChange={handleChange}
                  className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 h-10"
                />
              </div>
              <div className="lg:col-span-3 flex flex-col gap-2">
                <label className="font-medium text-sm leading-5">Description</label>
                <input
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Optional agenda"
                  className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 h-10"
                />
              </div>
              <div className="lg:col-span-12 flex justify-end">
                <Button type="submit" disabled={isSubmitting} className="h-9">
                  {isSubmitting ? <Loader className="size-4 animate-spin" /> : <Plus className="size-4" />}
                  Create meeting
                </Button>
              </div>
            </form>
          </Card>
        )}

        {error && (
          <div className="rounded-lg bg-[#ff6467]/10 text-[#ff6467] text-sm leading-5 px-4 py-3">
            {error}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-lg px-3 h-9 text-sm leading-5 border-1 border-solid transition-colors ${
                filter === item.id
                  ? "bg-neutral-200 text-neutral-950 border-neutral-200"
                  : "bg-neutral-900 text-[#a1a1a1] border-white/10 hover:text-neutral-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="min-h-64 flex items-center justify-center text-[#a1a1a1]">
            <Loader className="size-5 animate-spin mr-2" />
            Loading meetings
          </div>
        ) : visibleMeetings.length === 0 ? (
          <Card className="bg-neutral-900/40 border-white/10 border-1 border-dashed flex p-8 justify-center items-center">
            <div className="text-center flex flex-col items-center gap-3">
              <div className="size-10 rounded-lg bg-neutral-800 flex justify-center items-center">
                <CalendarPlus className="size-5 text-[#a1a1a1]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm leading-5">No meetings here yet</span>
                <span className="text-[#a1a1a1] text-xs leading-4">
                  Create one and it will show up dynamically on this page.
                </span>
              </div>
            </div>
          </Card>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
            {visibleMeetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
                status={getMeetingStatus(meeting)}
                onJoin={handleJoin}
                isJoining={joiningId === meeting.id}
              />
            ))}
          </section>
        )}

        {visibleMeetings.length > 0 && (
          <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-0 gap-0 overflow-hidden">
            <div className="border-white/10 border-b-1 border-solid flex px-5 py-4 justify-between items-center">
              <span className="font-semibold text-sm leading-5">Meeting timeline</span>
              <span className="text-[#a1a1a1] text-xs leading-4">
                {visibleMeetings.length} shown
              </span>
            </div>
            <div className="flex flex-col">
              {visibleMeetings.slice(0, 6).map((meeting) => (
                <div
                  key={meeting.id}
                  className="border-white/10 border-b-1 border-solid flex flex-col sm:flex-row px-5 py-4 gap-2 sm:items-center sm:justify-between last:border-b-0"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="size-2 shrink-0 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                    <div className="flex flex-col min-w-0">
                      <span className="font-medium text-sm leading-5 truncate">
                        {meeting.title}
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        {formatFullMeetingTime(meeting)}
                      </span>
                    </div>
                  </div>
                  <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                    <span>{meeting.durationMinutes} min</span>
                    <span>{meeting.participants.length} participants</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}
