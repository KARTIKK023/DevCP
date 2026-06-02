import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  Copy,
  Loader,
  GripVertical,
  Mail,
  Send,
  Video,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiError } from "@/api/client";
import { getMeeting, inviteToMeeting, joinMeeting } from "@/api/meetings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDashboardPage } from "@/hooks/useDashboardPage";
import VideoStage from "@/features/meeting-room/components/VideoStage";

function SplitHandle({ orientation = "vertical", onPointerDown, ...props }) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      tabIndex={0}
      onPointerDown={onPointerDown}
      {...props}
      className={`group z-20 flex items-center justify-center bg-neutral-950/60 hover:bg-neutral-900/80 transition-colors ${
        orientation === "vertical"
          ? "w-2 cursor-col-resize border-x border-white/10"
          : "h-2 cursor-row-resize border-y border-white/10"
      }`}
    >
      <GripVertical className={`size-3 text-[#a1a1a1] ${orientation === "horizontal" ? "rotate-90" : ""}`} />
    </div>
  );
}

function PanelCard({ title, eyebrow, children, className = "" }) {
  return (
    <section className={`min-h-0 flex flex-col bg-neutral-900 border-white/10 border-1 border-solid ${className}`}>
      <div className="px-4 py-3 border-white/10 border-b-1 border-solid">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm leading-5">{title}</span>
          {eyebrow && <span className="text-[#a1a1a1] text-xs leading-4">{eyebrow}</span>}
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-auto p-4">{children}</div>
    </section>
  );
}

function GitHubPanel() {
  const repos = [
    { name: "api-gateway", branch: "main", status: "3 open PRs" },
    { name: "web-client", branch: "feat/meeting-room", status: "8 commits" },
    { name: "auth-service", branch: "main", status: "synced" },
  ];

  return (
    <div className="flex flex-col gap-3">
      {repos.map((repo) => (
        <div key={repo.name} className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid p-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col min-w-0">
              <span className="font-medium text-sm leading-5 truncate">{repo.name}</span>
              <span className="text-[#a1a1a1] text-xs leading-4 truncate">{repo.branch}</span>
            </div>
            <span className="text-[#a1a1a1] text-xs leading-4">{repo.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ArchitecturePanel() {
  const items = ["Meeting API", "Video service", "GitHub sync", "Notes worker"];
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div key={item} className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid p-3 text-sm leading-5">
          {item}
        </div>
      ))}
    </div>
  );
}

function MeetingWorkspacePanel({ meeting, onInvite, inviteEmail, setInviteEmail, inviteMessage }) {
  const participants = meeting?.participants || [];
  const invitedEmails = meeting?.invitedEmails || [];
  const invites = meeting?.invites || [];
  const inviteLink = meeting?.inviteLink || "";

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid p-3 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-sm leading-5">Invite</span>
            <span className="text-[#a1a1a1] text-xs leading-4">
              Send a link or open email composer.
            </span>
          </div>
          <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
            <Check className="size-3.5" />
            ready
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            type="email"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            placeholder="person@company.com"
            className="bg-neutral-900 border-white/10 border-1 border-solid h-10"
          />
          <div className="flex flex-wrap gap-2">
            <Button className="shrink-0" onClick={onInvite}>
              <Send className="size-4" />
              Invite
            </Button>
            <Button
              variant="secondary"
              className="shrink-0"
              disabled={!inviteLink}
              onClick={() => {
                if (!inviteLink) return;
                navigator.clipboard.writeText(inviteLink);
              }}
            >
              <Copy className="size-4" />
              Copy link
            </Button>
            <Button
              variant="secondary"
              className="shrink-0"
              disabled={!inviteEmail}
              onClick={() => {
                const subject = encodeURIComponent(`Invite to ${meeting?.title || "DevSphere meeting"}`);
                const body = encodeURIComponent(
                  `Join the meeting: ${inviteLink || window.location.href}\n\nMeeting: ${meeting?.title || ""}`
                );
                window.location.href = `mailto:${inviteEmail}?subject=${subject}&body=${body}`;
              }}
            >
              <Mail className="size-4" />
              Email invite
            </Button>
          </div>
        </div>
        {inviteMessage && (
          <div className="rounded-lg bg-[oklch(0.696_0.17_162.48)]/10 text-[oklch(0.696_0.17_162.48)] text-xs leading-4 px-3 py-2">
            {inviteMessage}
          </div>
        )}
        <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid p-3 text-xs leading-4 text-[#a1a1a1] break-all">
          {inviteLink || "Invite link will appear here after the first invite."}
        </div>
        <div className="text-xs leading-4 text-[#a1a1a1]">
          Invited: {invitedEmails.length ? invitedEmails.join(", ") : "None yet"}
        </div>
      </div>
      <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid p-3">
        <div className="font-medium text-sm leading-5 mb-3">Recent invites</div>
        <div className="flex flex-col gap-2">
          {invites.length ? invites.slice(0, 4).map((invite) => (
            <div key={invite.token} className="flex items-center justify-between gap-3 rounded-lg bg-neutral-900 px-3 py-2">
              <div className="min-w-0">
                <div className="text-sm leading-5 truncate">{invite.email}</div>
                <div className="text-[#a1a1a1] text-xs leading-4">Sent</div>
              </div>
              <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4">Link ready</span>
            </div>
          )) : (
            <div className="text-xs leading-4 text-[#a1a1a1]">No invites yet.</div>
          )}
        </div>
      </div>
      <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid p-3">
        <div className="font-medium text-sm leading-5 mb-3">Participants</div>
        <div className="flex flex-col gap-2">
          {participants.map((participant) => (
            <div key={participant.userId} className="flex items-center justify-between gap-3 rounded-lg bg-neutral-900 px-3 py-2">
              <div className="min-w-0">
                <div className="text-sm leading-5 truncate">{participant.name}</div>
                <div className="text-[#a1a1a1] text-xs leading-4 truncate">{participant.email}</div>
              </div>
              <span className="text-[#a1a1a1] text-xs leading-4">In room</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MeetingRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meeting, setMeeting] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [leftPercent, setLeftPercent] = useState(64);
  const [topPercent, setTopPercent] = useState(34);
  const [middlePercent, setMiddlePercent] = useState(33);
  const [dragState, setDragState] = useState(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteMessage, setInviteMessage] = useState("");

  useDashboardPage({
    title: "Meeting Room",
    badge: null,
    search: "static",
    bellStyle: "plain-no-bg",
    avatarStyle: "initials",
    showAssistant: false,
    contentClassName: "flex flex-col flex-1 min-h-0 overflow-hidden",
    layoutClassName: "min-h-0 overflow-hidden",
    mainClassName: "flex flex-1 min-h-0 overflow-hidden",
  });

  useEffect(() => {
    let isMounted = true;

    async function loadRoom() {
      try {
        setError("");
        const joinedMeeting = await joinMeeting(id);
        const fullMeeting = await getMeeting(joinedMeeting.id);
        if (isMounted) setMeeting(fullMeeting);
      } catch (err) {
        if (isMounted) {
          setError(err instanceof ApiError ? err.message : "Unable to open meeting room.");
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadRoom();

    return () => {
      isMounted = false;
    };
  }, [id]);

  useEffect(() => {
    const handleMove = (event) => {
      if (!dragState) return;
      const rect = dragState.container.getBoundingClientRect();

      if (dragState.type === "vertical") {
        const nextLeft = ((event.clientX - rect.left) / rect.width) * 100;
        setLeftPercent(Math.min(76, Math.max(44, nextLeft)));
      }

      if (dragState.type === "horizontal") {
        const nextTop = ((event.clientY - rect.top) / rect.height) * 100;
        if (dragState.handle === "top") {
          const clamped = Math.min(58, Math.max(22, nextTop));
          const maxMiddle = 78 - clamped;
          setTopPercent(clamped);
          setMiddlePercent((current) => Math.min(maxMiddle, Math.max(18, current)));
        }

        if (dragState.handle === "middle") {
          const clamped = Math.min(72, Math.max(18, nextTop - topPercent));
          const maxMiddle = 100 - topPercent - 18;
          setMiddlePercent(Math.min(maxMiddle, Math.max(18, clamped)));
        }
      }
    };

    const clearDrag = () => {
      setDragState(null);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", clearDrag);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", clearDrag);
    };
  }, [dragState, topPercent]);

  const beginDrag = (type) => (event) => {
    const container =
      type === "vertical"
        ? event.currentTarget.closest("[data-room-shell]")
        : event.currentTarget.closest("[data-workspace-stack]");
    if (!container) return;
    setDragState({
      type,
      handle: event.currentTarget.dataset.handle,
      container,
    });
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handleInvite = async () => {
    const email = inviteEmail.trim();
    if (!email) return;

    try {
      setInviteMessage("");
      const { meeting: updated, inviteLink } = await inviteToMeeting(id, email);
      setMeeting(updated);
      setInviteEmail("");
      setInviteMessage(inviteLink ? `Invite ready for ${email}` : `Invite sent to ${email}`);
    } catch (err) {
      setInviteMessage(err instanceof ApiError ? err.message : "Unable to invite right now.");
    }
  };

  const leaveRoom = () => navigate("/dashboard/meetings");

  const workspaceHeightStyles = useMemo(
    () => ({
      gridTemplateRows: `${topPercent}% 10px ${middlePercent}% 10px ${Math.max(8, 100 - topPercent - middlePercent)}%`,
    }),
    [topPercent, middlePercent]
  );

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center text-[#a1a1a1]">
        <Loader className="size-5 animate-spin mr-2" />
        Opening room
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-6 max-w-md flex flex-col gap-4">
          <div className="size-10 rounded-lg bg-[#ff6467]/10 flex items-center justify-center">
            <Video className="size-5 text-[#ff6467]" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-lg leading-7">Room unavailable</h2>
            <p className="text-[#a1a1a1] text-sm leading-5">{error}</p>
          </div>
          <Button variant="secondary" onClick={() => navigate("/dashboard/meetings")}>
            <ArrowLeft className="size-4" />
            Back to meetings
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div data-room-shell className="flex flex-1 min-h-0 overflow-hidden bg-neutral-950 flex-col xl:flex-row">
      <div className="min-w-0 flex flex-col min-h-0" style={{ flexBasis: `${leftPercent}%` }}>
        <VideoStage meeting={meeting} onLeave={leaveRoom} />
      </div>
      <SplitHandle orientation="vertical" onPointerDown={beginDrag("vertical")} />
      <div className="min-w-0 flex flex-col min-h-0 flex-1">
        <div data-workspace-stack className="grid min-h-0 flex-1" style={workspaceHeightStyles}>
          <PanelCard title="GitHub Integration" eyebrow="repo context, PRs, commits">
            <GitHubPanel />
          </PanelCard>
          <SplitHandle orientation="horizontal" data-handle="top" onPointerDown={beginDrag("horizontal")} />
          <PanelCard title="Architecture Canvas" eyebrow="service map and working area">
            <ArchitecturePanel />
          </PanelCard>
          <SplitHandle orientation="horizontal" data-handle="middle" onPointerDown={beginDrag("horizontal")} />
          <PanelCard title="Meeting Workspace" eyebrow="invite, participants, notes" className="min-h-[16rem]">
            <MeetingWorkspacePanel
              meeting={meeting}
              onInvite={handleInvite}
              inviteEmail={inviteEmail}
              setInviteEmail={setInviteEmail}
              inviteMessage={inviteMessage}
            />
          </PanelCard>
        </div>
      </div>
    </div>
  );
}
