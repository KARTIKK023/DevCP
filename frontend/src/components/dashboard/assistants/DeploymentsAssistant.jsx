import {
  AlertTriangle,
  BellRing,
  CheckCircle2,
  FileSearch,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DeploymentsAssistant() {
  return (
    <>
      <Card className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
        <CardHeader className="flex p-0 flex-row items-center gap-2">
          <Rocket className="size-4 text-[oklch(0.696_0.17_162.48)]" />
          <span className="font-semibold text-sm leading-5">
            Deployment Summary
          </span>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-3">
          <p className="text-[#a1a1a1] text-sm leading-5">
            24 deployments this week, 22 successful, 1 failed, 1 in progress.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] border-black/1 border-0 border-solid">
              22 successful
            </Badge>
            <Badge className="bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.78_0.18_22.216)] border-black/1 border-0 border-solid">
              1 failed
            </Badge>
            <Badge className="bg-[oklch(0.769_0.188_70.08/0.15)] text-[oklch(0.8_0.16_70.08)] border-black/1 border-0 border-solid">
              1 in progress
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
        <CardHeader className="flex p-0 flex-row items-center gap-2">
          <CheckCircle2 className="size-4 text-[oklch(0.62_0.22_264.376)]" />
          <span className="font-semibold text-sm leading-5">Recent Decisions</span>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
              <span className="text-sm leading-5">Use Redis caching</span>
            </div>
            <span className="text-[#a1a1a1] text-xs leading-4 pl-3.5">
              Approved · 2h ago
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
              <span className="text-sm leading-5">Move auth to middleware</span>
            </div>
            <span className="text-[#a1a1a1] text-xs leading-4 pl-3.5">
              Approved · 5h ago
            </span>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
        <CardHeader className="flex p-0 flex-row items-center gap-2">
          <Lightbulb className="size-4 text-[oklch(0.769_0.188_70.08)]" />
          <span className="font-semibold text-sm leading-5">Suggested Actions</span>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-2">
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 text-sm leading-5 flex px-3 py-2.5 items-center gap-3"
          >
            <AlertTriangle className="size-4 shrink-0 text-[oklch(0.78_0.18_22.216)]" />
            Investigate payment-service OOM failure
          </button>
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 text-sm leading-5 flex px-3 py-2.5 items-center gap-3"
          >
            <FileSearch className="size-4 shrink-0 text-[#a1a1a1]" />
            Review infra-terraform plan before next deploy
          </button>
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 text-sm leading-5 flex px-3 py-2.5 items-center gap-3"
          >
            <BellRing className="size-4 shrink-0 text-[#a1a1a1]" />
            Set up deployment alerts for Production
          </button>
        </CardContent>
      </Card>
    </>
  );
}
