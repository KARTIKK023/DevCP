import {
  CheckCircle2,
  FileText,
  GitBranch,
  GitPullRequest,
  Lightbulb,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DashboardAssistant() {
  return (
    <>
      <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <GitBranch className="size-4 text-[oklch(0.696_0.17_162.48)]" />
            <span className="font-medium text-sm leading-5">
              Repository summary
            </span>
          </div>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-2">
          <p className="leading-relaxed text-[#a1a1a1] text-xs leading-4">
            api-gateway shows 14 commits this week, mostly around rate-limiting.
            web-client is stable. auth-service is mid-refactor on the middleware
            branch.
          </p>
          <div className="flex pt-1 flex-wrap gap-1.5">
            <Badge variant="secondary" className="font-normal text-xs leading-4">
              14 commits
            </Badge>
            <Badge variant="secondary" className="font-normal text-xs leading-4">
              3 PRs open
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[oklch(0.488_0.243_264.376)]" />
            <span className="font-medium text-sm leading-5">
              Recent decisions
            </span>
          </div>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-3">
          <div className="flex items-start gap-2">
            <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1.5" />
            <div className="flex flex-col">
              <span className="font-medium text-xs leading-4">
                Use Redis caching
              </span>
              <span className="text-[#a1a1a1] text-[11px]">Approved · 2h ago</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1.5" />
            <div className="flex flex-col">
              <span className="font-medium text-xs leading-4">
                Move auth to middleware
              </span>
              <span className="text-[#a1a1a1] text-[11px]">Approved · 5h ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
        <CardHeader className="p-0 gap-1">
          <div className="flex items-center gap-2">
            <Lightbulb className="size-4 text-[oklch(0.769_0.188_70.08)]" />
            <span className="font-medium text-sm leading-5">
              Suggested actions
            </span>
          </div>
        </CardHeader>
        <CardContent className="flex p-0 flex-col gap-2">
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full"
          >
            <GitPullRequest className="size-4 shrink-0 text-[#a1a1a1]" />
            <span className="text-xs leading-4">
              Review 3 open PRs in api-gateway
            </span>
          </button>
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full"
          >
            <FileText className="size-4 shrink-0 text-[#a1a1a1]" />
            <span className="text-xs leading-4">
              Document the Redis caching decision
            </span>
          </button>
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full"
          >
            <Users className="size-4 shrink-0 text-[#a1a1a1]" />
            <span className="text-xs leading-4">
              Invite Data team to Architecture sync
            </span>
          </button>
        </CardContent>
      </Card>
    </>
  );
}
