import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  History,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DecisionsAssistant() {
  return (
    <>
      <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
        <CardHeader className="p-0 gap-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[oklch(0.696_0.17_162.48)]" />
            <span className="font-medium text-sm leading-5">Decision Summary</span>
          </div>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-3">
          <div className="items-baseline flex gap-1">
            <span className="font-semibold text-2xl leading-8">48</span>
            <span className="text-[#a1a1a1] text-xs leading-4">
              total decisions
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[oklch(0.696_0.17_162.48)]/15 text-[oklch(0.696_0.17_162.48)] font-normal border-black/1 border-0 border-solid">
              38 approved
            </Badge>
            <Badge className="bg-[oklch(0.769_0.188_70.08)]/15 text-[oklch(0.769_0.188_70.08)] font-normal border-black/1 border-0 border-solid">
              7 pending
            </Badge>
            <Badge className="font-normal bg-[#ff6467]/15 text-[#ff6467] border-black/1 border-0 border-solid">
              3 rejected
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
        <CardHeader className="p-0 gap-0">
          <div className="flex items-center gap-2">
            <History className="size-4 text-neutral-50" />
            <span className="font-medium text-sm leading-5">Recent Decisions</span>
          </div>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-3">
          <div className="flex items-start gap-2">
            <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1.5" />
            <div className="leading-tight flex flex-col">
              <span className="text-sm leading-5">Use Redis caching</span>
              <span className="text-[#a1a1a1] text-xs leading-4">
                Approved · 2h ago
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="size-2 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1.5" />
            <div className="leading-tight flex flex-col">
              <span className="text-sm leading-5">Move auth to middleware</span>
              <span className="text-[#a1a1a1] text-xs leading-4">
                Approved · 5h ago
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
        <CardHeader className="p-0 gap-0">
          <div className="flex items-center gap-2">
            <Lightbulb className="size-4 text-[oklch(0.769_0.188_70.08)]" />
            <span className="font-medium text-sm leading-5">Suggested Actions</span>
          </div>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-2">
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 flex px-3 py-2.5 items-center gap-3"
          >
            <FileText className="size-4 shrink-0 text-[#a1a1a1]" />
            <span className="text-sm leading-5">
              Document the Redis caching decision
            </span>
          </button>
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 flex px-3 py-2.5 items-center gap-3"
          >
            <ArrowRight className="size-4 shrink-0 text-[#a1a1a1]" />
            <span className="text-sm leading-5">
              Follow up on Postgres adoption
            </span>
          </button>
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 flex px-3 py-2.5 items-center gap-3"
          >
            <Clock className="size-4 shrink-0 text-[#a1a1a1]" />
            <span className="text-sm leading-5">Review 2 pending decisions</span>
          </button>
        </CardContent>
      </Card>
    </>
  );
}
