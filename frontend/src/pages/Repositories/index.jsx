import { MouseGlow } from "@/components/effects";
import {
  ChevronDown,
  Clock,
  Code2,
  FolderGit2,
  GitBranch,
  Plus,
  RefreshCw,
} from "lucide-react";
import RepositoriesAssistant from "@/components/dashboard/assistants/RepositoriesAssistant";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDashboardPage } from "@/hooks/useDashboardPage";

export default function Repositories() {
  useDashboardPage({
    title: "Repositories",
    badge: (
      <Badge variant="secondary" className="font-normal text-[#a1a1a1]">
        12 repos
      </Badge>
    ),
    contentClassName: "flex flex-col flex-1 min-h-0 overflow-hidden",
    assistant: <RepositoriesAssistant />,
  });

  return (
    <>
<div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
  <MouseGlow />
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-base leading-6 tracking-tight">
                    All repositories
                  </h2>
                  <p className="text-[#a1a1a1] text-sm leading-5">
                    Manage and monitor your connected repositories.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid gap-2 h-9"
                  >
                    <Code2 className="size-4 text-[#a1a1a1]" />
                    Language
                    <ChevronDown className="size-3.5 text-[#a1a1a1]" />
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid gap-2 h-9"
                  >
                    <RefreshCw className="size-4 text-[#a1a1a1]" />
                    Sync status
                    <ChevronDown className="size-3.5 text-[#a1a1a1]" />
                  </Button>
                  <Button className="bg-neutral-200 text-neutral-900 text-sm leading-5 gap-2 h-9">
                    <Plus className="size-4" />
                    New repository
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                        </div>
                        <span className="font-medium text-sm leading-5">
                          api-gateway
                        </span>
                      </div>
                      <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                        <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        synced
                      </span>
                    </div>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
                      <GitBranch className="size-3.5" />
                      main<span className="text-white/20">·</span>TypeScript
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        2m ago
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          14 commits
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          3 PRs
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                        </div>
                        <span className="font-medium text-sm leading-5">
                          web-client
                        </span>
                      </div>
                      <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                        <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        synced
                      </span>
                    </div>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
                      <GitBranch className="size-3.5" />
                      main<span className="text-white/20">·</span>React
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        1h ago
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          8 commits
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          1 PR
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                        </div>
                        <span className="font-medium text-sm leading-5">
                          auth-service
                        </span>
                      </div>
                      <span className="text-[oklch(0.769_0.188_70.08)] text-xs leading-4 flex items-center gap-1">
                        <span className="size-1.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                        syncing
                      </span>
                    </div>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
                      <GitBranch className="size-3.5" />
                      feat/middleware<span className="text-white/20">·</span>Go
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        12m ago
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          22 commits
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          5 PRs
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                        </div>
                        <span className="font-medium text-sm leading-5">
                          payment-service
                        </span>
                      </div>
                      <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                        <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        synced
                      </span>
                    </div>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
                      <GitBranch className="size-3.5" />
                      main<span className="text-white/20">·</span>Java
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        3h ago
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          6 commits
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          2 PRs
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                        </div>
                        <span className="font-medium text-sm leading-5">
                          notification-worker
                        </span>
                      </div>
                      <span className="text-[oklch(0.769_0.188_70.08)] text-xs leading-4 flex items-center gap-1">
                        <span className="size-1.5 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                        syncing
                      </span>
                    </div>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
                      <GitBranch className="size-3.5" />
                      develop<span className="text-white/20">·</span>Python
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        28m ago
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          9 commits
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          1 PR
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-md bg-neutral-800 flex justify-center items-center">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                        </div>
                        <span className="font-medium text-sm leading-5">
                          infra-terraform
                        </span>
                      </div>
                      <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                        <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        synced
                      </span>
                    </div>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-2">
                      <GitBranch className="size-3.5" />
                      main<span className="text-white/20">·</span>HCL
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        1d ago
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          3 commits
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs leading-4"
                        >
                          0 PRs
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
    </>
  );
}
