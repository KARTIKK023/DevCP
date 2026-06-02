import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Plus,
  XCircle,
} from "lucide-react";
import DecisionsAssistant from "@/components/dashboard/assistants/DecisionsAssistant";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDashboardPage } from "@/hooks/useDashboardPage";

export default function Decisions() {
  useDashboardPage({
    title: "Decisions",
    badge: (
      <Badge className="font-normal bg-neutral-800 text-neutral-50 text-xs leading-4 border-white/10 border-0 border-solid">
        48 total
      </Badge>
    ),
    
    controlsClassName: "gap-4",
    bellStyle: "plain-no-bg",
    avatarStyle: "avatar",
    contentClassName: "flex flex-col flex-1 min-h-0 overflow-hidden",
    assistantVariant: "decisions",
    assistant: <DecisionsAssistant />,
  });

  return (
    <>
<div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-xl leading-7 tracking-tight">
                    All Decisions
                  </h2>
                  <p className="text-[#a1a1a1] text-sm leading-5">
                    Track and manage engineering decisions across your team.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
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
    </>
  );
}
