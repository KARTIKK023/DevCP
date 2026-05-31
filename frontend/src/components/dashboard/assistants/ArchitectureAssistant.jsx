import {
  CheckCircle2,
  FileText,
  Layers,
  Lightbulb,
  Plus,
  Share2,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ArchitectureAssistant() {
  return (
    <>
      <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-4 gap-3">
        <CardHeader className="flex p-0 flex-row items-center gap-2">
          <Layers className="size-4 text-[oklch(0.696_0.17_162.48)]" />
          <span className="font-medium text-sm leading-5">
            Architecture Summary
          </span>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-3">
          <p className="leading-relaxed text-[#a1a1a1] text-xs leading-4">
            8 boards, 3 updated this week, 47 total nodes. Service Mesh is the
            most active board.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-neutral-800 text-neutral-50 text-[11px] border-white/10 border-1 border-solid px-2 py-0.5">
              8 boards
            </span>
            <span className="rounded-full bg-neutral-800 text-neutral-50 text-[11px] border-white/10 border-1 border-solid px-2 py-0.5">
              47 nodes
            </span>
            <span className="bg-[oklch(0.696_0.17_162.48)/0.15] text-[oklch(0.696_0.17_162.48)] border-[oklch(0.696_0.17_162.48)/0.3] rounded-full text-[11px] border-black/1 border-1 border-solid px-2 py-0.5">
              Most active: Service Mesh
            </span>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-4 gap-3">
        <CardHeader className="flex p-0 flex-row items-center gap-2">
          <CheckCircle2 className="size-4 text-[oklch(0.488_0.243_264.376)]" />
          <span className="font-medium text-sm leading-5">Recent Decisions</span>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-3">
          <div className="flex items-start gap-2">
            <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1" />
            <div className="flex flex-col">
              <span className="leading-tight text-neutral-50 text-sm leading-5">
                Use Redis caching
              </span>
              <span className="text-[#a1a1a1] text-xs leading-4">
                Service Mesh · 2h ago
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1" />
            <div className="flex flex-col">
              <span className="leading-tight text-neutral-50 text-sm leading-5">
                Move auth to middleware
              </span>
              <span className="text-[#a1a1a1] text-xs leading-4">
                Auth Flow · 5h ago
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-4 gap-3">
        <CardHeader className="flex p-0 flex-row items-center gap-2">
          <Lightbulb className="size-4 text-[oklch(0.769_0.188_70.08)]" />
          <span className="font-medium text-sm leading-5">Suggested Actions</span>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-2">
          <button
            type="button"
            className="transition-colors text-left rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 py-2 items-center gap-2"
          >
            <FileText className="size-4 shrink-0 text-[#a1a1a1]" />
            Document Service Mesh dependencies
          </button>
          <button
            type="button"
            className="transition-colors text-left rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 py-2 items-center gap-2"
          >
            <Plus className="size-4 shrink-0 text-[#a1a1a1]" />
            Add Redis node to Auth Flow board
          </button>
          <button
            type="button"
            className="transition-colors text-left rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 py-2 items-center gap-2"
          >
            <Share2 className="size-4 shrink-0 text-[#a1a1a1]" />
            Share Data Pipeline with Data team
          </button>
        </CardContent>
      </Card>
    </>
  );
}
