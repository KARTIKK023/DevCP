import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code2,
  FolderGit2,
  GitBranch,
  GitPullRequest,
  Hexagon,
  Home,
  Layers,
  Lightbulb,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Settings as SettingsIcon,
  Sparkles,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Repositories() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 flex w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <aside className="shrink-0 bg-neutral-900 border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-4 flex-col justify-between w-64">
            <div className="flex flex-col gap-8">
              <div className="flex px-2 items-center gap-2">
                <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
                  <Hexagon className="size-5 text-neutral-50" />
                </div>
                <Link
                to="/dashboard"
                className="font-semibold text-base leading-6 tracking-tight"
                 >
                DevSphere
                </Link>
              </div>
              <nav className="flex flex-col justify-start items-stretch gap-1">
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard">
                  <Home className="size-4" />
                  <span>Home</span>
                </a>
                <a className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/repositories">
                  <GitBranch className="size-4" />
                  <span>Repositories</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/meetings">
                  <Video className="size-4" />
                  <span>Meetings</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/architecture">
                  <Layers className="size-4" />
                  <span>Architecture</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/decisions">
                  <CheckCircle2 className="size-4" />
                  <span>Decisions</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/deployments">
                  <Rocket className="size-4" />
                  <span>Deployments</span>
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/settings">
                  <SettingsIcon className="size-4" />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
            <div className="rounded-xl bg-neutral-950 border-white/10 border-1 border-solid flex p-4 flex-col gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                <span className="font-medium text-sm leading-5">Free plan</span>
              </div>
              <p className="text-[#a1a1a1] text-xs leading-4">
                5 of 12 seats used. Upgrade for unlimited boards.
              </p>
              <button className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 mt-1 px-3 py-2 w-full">
                Upgrade
              </button>
            </div>
          </aside>
        <div className="flex flex-col flex-1 h-239 overflow-hidden">
          <header className="shrink-0 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-8 justify-between items-center gap-4 h-16">
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-lg leading-7 tracking-tight">
                Repositories
              </h1>
              <Badge variant="secondary" className="font-normal text-[#a1a1a1]">
                12 repos
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-72">
                <Search className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                <Input
                  placeholder="Search repos, meetings, decisions..."
                  className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-9"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="size-9 relative bg-neutral-900 border-white/10 border-0 border-solid"
              >
                <Bell className="size-4" />
                <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-1.5 top-1.5" />
              </Button>
              <div className="flex pl-2 items-center gap-2">
                <div className="size-8 font-medium rounded-full bg-neutral-800 text-xs leading-4 border-white/10 border-1 border-solid flex justify-center items-center overflow-hidden">
                  KC
                </div>
                <div className="leading-tight flex flex-col">
                  <span className="font-medium text-sm leading-5">
                    Kartik Chaudhary
                  </span>
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    kartik@devsphere.io
                  </span>
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-1 overflow-hidden">
            <main className="overflow-y-auto flex p-8 flex-col flex-1 gap-6">
              <div className="flex justify-between items-center gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-base leading-6 tracking-tight">
                    All repositories
                  </h2>
                  <p className="text-[#a1a1a1] text-sm leading-5">
                    Manage and monitor your connected repositories.
                  </p>
                </div>
                <div className="flex items-center gap-2">
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
              <div className="grid grid-cols-2 gap-4">
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
            </main>
            <aside className="shrink-0 overflow-y-auto border-white/10 border-t-0 border-r-0 border-b-0 border-l-1 border-solid flex p-6 flex-col gap-6 w-80 h-full">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
                  <Sparkles className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                </div>
                <div className="leading-tight flex flex-col">
                  <span className="font-semibold text-sm leading-5">
                    AI Workspace Assistant
                  </span>
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    Synced 3m ago
                  </span>
                </div>
              </div>
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
                    12 repositories connected across 6 languages. 10 are synced,
                    2 currently syncing (auth-service, notification-worker). 62
                    commits this week, mostly in api-gateway and auth-service.
                  </p>
                  <div className="flex pt-1 flex-wrap gap-1.5">
                    <Badge
                      variant="secondary"
                      className="font-normal text-xs leading-4"
                    >
                      62 commits
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-normal text-xs leading-4"
                    >
                      12 PRs open
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-normal text-xs leading-4"
                    >
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
                      <span className="text-[#a1a1a1] text-[11px]">
                        Approved · 2h ago
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] shrink-0 rounded-full mt-1.5" />
                    <div className="flex flex-col">
                      <span className="font-medium text-xs leading-4">
                        Move auth to middleware
                      </span>
                      <span className="text-[#a1a1a1] text-[11px]">
                        Approved · 5h ago
                      </span>
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
                  <button className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full">
                    <GitPullRequest className="size-4 shrink-0 text-[#a1a1a1]" />
                    <span className="text-xs leading-4">
                      Review 3 open PRs in api-gateway
                    </span>
                  </button>
                  <button className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full">
                    <RefreshCw className="size-4 shrink-0 text-[#a1a1a1]" />
                    <span className="text-xs leading-4">
                      Resolve sync on auth-service
                    </span>
                  </button>
                  <button className="text-left rounded-lg bg-neutral-800 border-white/10 border-1 border-solid flex p-3 items-center gap-2 w-full">
                    <FolderGit2 className="size-4 shrink-0 text-[#a1a1a1]" />
                    <span className="text-xs leading-4">
                      Connect a new repository
                    </span>
                  </button>
                </CardContent>
              </Card>
              <div className="relative mt-auto">
                <Sparkles className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3" />
                <Input
                  placeholder="Ask the assistant..."
                  className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-9"
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
