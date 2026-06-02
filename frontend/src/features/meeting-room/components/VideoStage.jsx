import { useEffect, useMemo, useRef, useState } from "react";
import {
  Copy,
  ExternalLink,
  Maximize2,
  Mic,
  MicOff,
  MonitorUp,
  PhoneOff,
  Video,
  VideoOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const JITSI_DOMAIN = "meet.jit.si";
const JITSI_SCRIPT = `https://${JITSI_DOMAIN}/external_api.js`;

function getRoomName(roomUrl = "") {
  if (!roomUrl) return "";

  try {
    return new URL(roomUrl).pathname.replace("/", "");
  } catch {
    return roomUrl.split("/").pop();
  }
}

function loadJitsiApi() {
  if (window.JitsiMeetExternalAPI) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${JITSI_SCRIPT}"]`);
    if (existingScript) {
      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = JITSI_SCRIPT;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function VideoStage({ meeting, onLeave }) {
  const containerRef = useRef(null);
  const apiRef = useRef(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [participantCount, setParticipantCount] = useState(meeting?.participants?.length || 1);
  const [connectionError, setConnectionError] = useState("");
  const [copied, setCopied] = useState(false);
  const roomName = useMemo(() => getRoomName(meeting?.roomUrl), [meeting?.roomUrl]);
  const inviteUrl = meeting?.id
    ? `${window.location.origin}/dashboard/meetings/${meeting.id}/room`
    : window.location.href;

  useEffect(() => {
    return () => {
      apiRef.current?.dispose();
      apiRef.current = null;
    };
  }, []);

  const startCall = async () => {
    if (!roomName || !containerRef.current || apiRef.current) return;

    setIsStarting(true);
    setConnectionError("");

    try {
      await loadJitsiApi();

      const api = new window.JitsiMeetExternalAPI(JITSI_DOMAIN, {
        roomName,
        parentNode: containerRef.current,
        width: "100%",
        height: "100%",
        configOverwrite: {
          prejoinPageEnabled: false,
          disableDeepLinking: true,
          startWithAudioMuted: isMuted,
          startWithVideoMuted: isCameraOff,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          MOBILE_APP_PROMO: false,
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "desktop",
            "tileview",
            "chat",
            "raisehand",
            "fullscreen",
          ],
        },
      });

      api.addListener("videoConferenceJoined", () => setHasJoined(true));
      api.addListener("readyToClose", () => onLeave?.());
      api.addListener("audioMuteStatusChanged", ({ muted }) => setIsMuted(Boolean(muted)));
      api.addListener("videoMuteStatusChanged", ({ muted }) => setIsCameraOff(Boolean(muted)));
      api.addListener("participantJoined", () => setParticipantCount((count) => count + 1));
      api.addListener("participantLeft", () => setParticipantCount((count) => Math.max(1, count - 1)));

      apiRef.current = api;
      setIsCallActive(true);
    } catch {
      setConnectionError("Unable to start the video room. Check your network and try again.");
    } finally {
      setIsStarting(false);
    }
  };

  const toggleAudio = () => {
    if (apiRef.current) {
      apiRef.current.executeCommand("toggleAudio");
      return;
    }
    setIsMuted((value) => !value);
  };

  const toggleVideo = () => {
    if (apiRef.current) {
      apiRef.current.executeCommand("toggleVideo");
      return;
    }
    setIsCameraOff((value) => !value);
  };

  const toggleScreenShare = () => {
    apiRef.current?.executeCommand("toggleShareScreen");
  };

  const toggleFullscreen = () => {
    apiRef.current?.executeCommand("toggleFullscreen");
  };

  const leaveCall = () => {
    apiRef.current?.executeCommand("hangup");
    apiRef.current?.dispose();
    apiRef.current = null;
    setIsCallActive(false);
    onLeave?.();
  };

  const copyInvite = async () => {
    await navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="bg-neutral-950 flex flex-col flex-1 min-w-0 min-h-[34rem]">
      <div className="border-white/10 border-b-1 border-solid flex px-4 sm:px-5 py-3 justify-between items-center gap-3">
        <div className="min-w-0 flex flex-col">
          <span className="font-semibold text-sm leading-5 truncate">
            {meeting?.title || "Meeting room"}
          </span>
          <span className="text-[#a1a1a1] text-xs leading-4 truncate">
            {hasJoined ? `${participantCount} in call` : "Ready to start"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" aria-label="Copy invite link" onClick={copyInvite}>
            <Copy className="size-4" />
          </Button>
          <Button variant="secondary" size="icon" aria-label="Share screen" onClick={toggleScreenShare} disabled={!isCallActive}>
            <MonitorUp className="size-4" />
          </Button>
          <Button variant="secondary" size="icon" aria-label="Fullscreen" onClick={toggleFullscreen} disabled={!isCallActive}>
            <Maximize2 className="size-4" />
          </Button>
        </div>
      </div>

      <div className="relative flex-1 min-h-[28rem] bg-neutral-950">
        <div ref={containerRef} className="absolute inset-0" />
        {!isCallActive && (
          <div className="absolute inset-0 flex items-center justify-center p-5">
            <div className="max-w-md w-full rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-6 flex flex-col gap-5">
              <div className="size-12 rounded-xl bg-neutral-800 flex items-center justify-center">
                <Video className="size-6 text-neutral-50" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-xl leading-7">Start video call</h2>
                <p className="text-[#a1a1a1] text-sm leading-5">
                  This room runs inside DevSphere. Future workspace tools will stay beside the call.
                </p>
              </div>
              {connectionError && (
                <p className="rounded-lg bg-[#ff6467]/10 text-[#ff6467] text-sm leading-5 px-3 py-2">
                  {connectionError}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                <Button variant={isMuted ? "destructive" : "secondary"} onClick={toggleAudio}>
                  {isMuted ? <MicOff className="size-4" /> : <Mic className="size-4" />}
                  {isMuted ? "Muted" : "Mic on"}
                </Button>
                <Button variant={isCameraOff ? "destructive" : "secondary"} onClick={toggleVideo}>
                  {isCameraOff ? <VideoOff className="size-4" /> : <Video className="size-4" />}
                  {isCameraOff ? "Camera off" : "Camera on"}
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="flex-1" onClick={startCall} disabled={isStarting}>
                  <Video className="size-4" />
                  {isStarting ? "Starting..." : "Join video room"}
                </Button>
                {meeting?.roomUrl && (
                  <Button
                    variant="secondary"
                    className="flex-1"
                    onClick={() => window.open(meeting.roomUrl, "_blank", "noopener,noreferrer")}
                  >
                    <ExternalLink className="size-4" />
                    Backup open
                  </Button>
                )}
              </div>
              {copied && (
                <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4">
                  Invite link copied
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="border-white/10 border-t-1 border-solid flex px-4 sm:px-5 py-3 items-center justify-center gap-2">
        <Button variant={isMuted ? "destructive" : "secondary"} size="icon" aria-label="Toggle microphone" onClick={toggleAudio}>
          {isMuted ? <MicOff className="size-4" /> : <Mic className="size-4" />}
        </Button>
        <Button variant={isCameraOff ? "destructive" : "secondary"} size="icon" aria-label="Toggle camera" onClick={toggleVideo}>
          {isCameraOff ? <VideoOff className="size-4" /> : <Video className="size-4" />}
        </Button>
        <Button
          variant="destructive"
          className="h-9 px-4 rounded-xl bg-[#ff6467]/10"
          aria-label="Leave meeting"
          onClick={leaveCall}
        >
          <PhoneOff className="size-4" />
          Leave
        </Button>
      </div>
    </section>
  );
}
