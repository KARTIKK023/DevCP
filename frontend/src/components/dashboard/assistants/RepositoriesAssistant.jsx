import {
  CheckCircle2,
  FolderGit2,
  GitBranch,
  GitPullRequest,
  Lightbulb,
  RefreshCw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function RepositoriesAssistant() {
  return (
    <>
      <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-2">
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
            12 repositories connected across 6 languages. 10 are synced, 2
            currently syncing (auth-service, notification-worker). 62 commits
            this week, mostly in api-gateway and auth-service.
          </p>
          <div className="flex pt-1 flex-wrap gap-1.5">
            <Badge variant="secondary" className="font-normal text-xs leading-4">
              62 commits
            </Badge>
            <Badge variant="secondary" className="font-normal text-xs leading-4">
              12 PRs open
            </Badge>
            <Badge variant="secondary" className="font-normal text-xs leading-4">
              2 syncing
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-2">
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
      <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
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
            <RefreshCw className="size-4 shrink-0 text-[#a1a1a1]" />
            <span className="text-xs leading-4">
              Resolve sync on auth-service
            </span>
          </button>
          <button
            type="button"
            className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full"
          >
            <FolderGit2 className="size-4 shrink-0 text-[#a1a1a1]" />
            <span className="text-xs leading-4">Connect a new repository</span>
          </button>
        </CardContent>
      </Card>
    </>
  );
}
