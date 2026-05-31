import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  Bell,
  BellRing,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileSearch,
  FileText,
  FolderGit2,
  GitBranch,
  Globe,
  Hexagon,
  Home,
  Layers,
  Lightbulb,
  RefreshCw,
  Rocket,
  Search,
  Settings as SettingsIcon,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Video,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Deployments() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="flex w-full h-239 overflow-hidden">
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
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/repositories">
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
                <a className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/deployments">
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
          <div className="flex flex-col flex-1 overflow-hidden">
            <header className="shrink-0 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 justify-between items-center h-16">
              <div className="flex items-center gap-3">
                <h1 className="font-semibold text-lg leading-7 tracking-tight">
                  Deployments
                </h1>
                <Badge className="bg-neutral-800 text-neutral-50 border-black/1 border-0 border-solid">
                  24 this week
                </Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex px-3 items-center gap-2 w-72 h-9">
                  <Search className="size-4 text-[#a1a1a1]" />
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Search repos, meetings, decisions...
                  </span>
                </div>
                <button className="relative size-9 rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex justify-center items-center">
                  <Bell className="size-4" />
                  <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-2 top-2" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="size-9 font-semibold rounded-full bg-neutral-800 text-xs leading-4 flex justify-center items-center">
                    KC
                  </div>
                  <div className="flex flex-col">
                    <span className="leading-tight font-medium text-sm leading-5">
                      Kartik Chaudhary
                    </span>
                    <span className="leading-tight text-[#a1a1a1] text-xs leading-4">
                      kartik@devsphere.io
                    </span>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-1 overflow-hidden">
              <main className="overflow-y-auto p-8 flex-1">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <h2 className="font-semibold text-2xl leading-8 tracking-tight">
                        Deployment Activity
                      </h2>
                      <p className="text-[#a1a1a1] text-sm leading-5">
                        Monitor deployments across all connected repositories.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg bg-neutral-900 text-[#a1a1a1] text-sm leading-5 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-9">
                        <Globe className="size-4" />
                        Environment
                        <ChevronDown className="size-4" />
                      </button>
                      <button className="rounded-lg bg-neutral-900 text-[#a1a1a1] text-sm leading-5 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-9">
                        <Activity className="size-4" />
                        Status
                        <ChevronDown className="size-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-6 gap-0">
                      <CardContent className="flex p-0 flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <div className="size-10 bg-[oklch(0.696_0.17_162.48/0.15)] rounded-lg flex justify-center items-center">
                            <Rocket className="size-5 text-[oklch(0.696_0.17_162.48)]" />
                          </div>
                          <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                            <TrendingUp className="size-3.5" />
                            +6
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-neutral-50 text-2xl leading-8">
                            24
                          </span>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Total Deployments
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-6 gap-0">
                      <CardContent className="flex p-0 flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <div className="size-10 bg-[oklch(0.696_0.17_162.48/0.15)] rounded-lg flex justify-center items-center">
                            <CheckCircle2 className="size-5 text-[oklch(0.696_0.17_162.48)]" />
                          </div>
                          <span className="text-[oklch(0.696_0.17_162.48)] text-xs leading-4 flex items-center gap-1">
                            <TrendingUp className="size-3.5" />
                            +2.1%
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-neutral-50 text-2xl leading-8">
                            91.7%
                          </span>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Success Rate
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-6 gap-0">
                      <CardContent className="flex p-0 flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <div className="size-10 bg-[oklch(0.488_0.243_264.376/0.18)] rounded-lg flex justify-center items-center">
                            <Clock className="size-5 text-[oklch(0.6_0.22_264.376)]" />
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-1">
                            <TrendingDown className="size-3.5" />
                            -12s
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-neutral-50 text-2xl leading-8">
                            3m 42s
                          </span>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Avg Deploy Time
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Card className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-0 gap-0 overflow-hidden">
                    <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 py-4 justify-between items-center">
                      <span className="font-semibold text-sm leading-5">
                        Recent deployments
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        7 of 24 shown
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 py-4 items-center gap-4">
                        <span className="size-2 shrink-0 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        <div className="shrink-0 flex items-center gap-2 w-44">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          <span className="font-medium text-sm leading-5">
                            api-gateway
                          </span>
                        </div>
                        <div className="shrink-0 text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5 w-40">
                          <GitBranch className="size-3.5" />
                          main
                        </div>
                        <Badge className="shrink-0 bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.78_0.18_22.216)] border-black/1 border-0 border-solid">
                          Production
                        </Badge>
                        <div className="flex items-center flex-1 gap-2">
                          <div className="size-6 font-semibold rounded-full bg-neutral-800 text-[10px] flex justify-center items-center">
                            KC
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Kartik C.
                          </span>
                        </div>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          2m 10s
                        </span>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          5m ago
                        </span>
                        <Badge className="shrink-0 bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] border-black/1 border-0 border-solid justify-center w-24">
                          <Check className="size-3 mr-1" />
                          Success
                        </Badge>
                      </div>
                      <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 py-4 items-center gap-4">
                        <span className="size-2 shrink-0 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        <div className="shrink-0 flex items-center gap-2 w-44">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          <span className="font-medium text-sm leading-5">
                            web-client
                          </span>
                        </div>
                        <div className="shrink-0 text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5 w-40">
                          <GitBranch className="size-3.5" />
                          main
                        </div>
                        <Badge className="shrink-0 bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.78_0.18_22.216)] border-black/1 border-0 border-solid">
                          Production
                        </Badge>
                        <div className="flex items-center flex-1 gap-2">
                          <div className="size-6 font-semibold rounded-full bg-neutral-800 text-[10px] flex justify-center items-center">
                            KC
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Kartik C.
                          </span>
                        </div>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          3m 45s
                        </span>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          1h ago
                        </span>
                        <Badge className="shrink-0 bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] border-black/1 border-0 border-solid justify-center w-24">
                          <Check className="size-3 mr-1" />
                          Success
                        </Badge>
                      </div>
                      <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 py-4 items-center gap-4">
                        <span className="size-2 shrink-0 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        <div className="shrink-0 flex items-center gap-2 w-44">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          <span className="font-medium text-sm leading-5">
                            auth-service
                          </span>
                        </div>
                        <div className="shrink-0 text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5 w-40">
                          <GitBranch className="size-3.5" />
                          feat/middleware
                        </div>
                        <Badge className="shrink-0 bg-[oklch(0.769_0.188_70.08/0.15)] text-[oklch(0.8_0.16_70.08)] border-black/1 border-0 border-solid">
                          Staging
                        </Badge>
                        <div className="flex items-center flex-1 gap-2">
                          <div className="size-6 font-semibold rounded-full bg-neutral-800 text-[10px] flex justify-center items-center">
                            AM
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Aria M.
                          </span>
                        </div>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          4m 12s
                        </span>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          2h ago
                        </span>
                        <Badge className="shrink-0 bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] border-black/1 border-0 border-solid justify-center w-24">
                          <Check className="size-3 mr-1" />
                          Success
                        </Badge>
                      </div>
                      <div className="bg-[oklch(0.704_0.191_22.216/0.07)] border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 py-4 items-center gap-4">
                        <span className="size-2 shrink-0 bg-[oklch(0.704_0.191_22.216)] rounded-full" />
                        <div className="shrink-0 flex items-center gap-2 w-44">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          <span className="font-medium text-sm leading-5">
                            payment-service
                          </span>
                        </div>
                        <div className="shrink-0 text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5 w-40">
                          <GitBranch className="size-3.5" />
                          main
                        </div>
                        <Badge className="shrink-0 bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.78_0.18_22.216)] border-black/1 border-0 border-solid">
                          Production
                        </Badge>
                        <div className="flex items-center flex-1 gap-2">
                          <div className="size-6 font-semibold rounded-full bg-neutral-800 text-[10px] flex justify-center items-center">
                            SR
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Sam R.
                          </span>
                        </div>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          1m 58s
                        </span>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          3h ago
                        </span>
                        <div className="shrink-0 flex flex-col items-end gap-1 w-24">
                          <Badge className="bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.78_0.18_22.216)] border-black/1 border-0 border-solid justify-center">
                            <X className="size-3 mr-1" />
                            Failed
                          </Badge>
                          <a className="text-[oklch(0.78_0.18_22.216)] underline text-[11px]">
                            View logs
                          </a>
                        </div>
                      </div>
                      <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 py-4 items-center gap-4">
                        <span className="size-2 shrink-0 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        <div className="shrink-0 flex items-center gap-2 w-44">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          <span className="font-medium text-sm leading-5">
                            notification-worker
                          </span>
                        </div>
                        <div className="shrink-0 text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5 w-40">
                          <GitBranch className="size-3.5" />
                          develop
                        </div>
                        <Badge className="shrink-0 bg-[oklch(0.769_0.188_70.08/0.15)] text-[oklch(0.8_0.16_70.08)] border-black/1 border-0 border-solid">
                          Staging
                        </Badge>
                        <div className="flex items-center flex-1 gap-2">
                          <div className="size-6 font-semibold rounded-full bg-neutral-800 text-[10px] flex justify-center items-center">
                            BT
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Ben T.
                          </span>
                        </div>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          2m 30s
                        </span>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          5h ago
                        </span>
                        <Badge className="shrink-0 bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] border-black/1 border-0 border-solid justify-center w-24">
                          <Check className="size-3 mr-1" />
                          Success
                        </Badge>
                      </div>
                      <div className="border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 py-4 items-center gap-4">
                        <span className="size-2 shrink-0 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                        <div className="shrink-0 flex items-center gap-2 w-44">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          <span className="font-medium text-sm leading-5">
                            infra-terraform
                          </span>
                        </div>
                        <div className="shrink-0 text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5 w-40">
                          <GitBranch className="size-3.5" />
                          main
                        </div>
                        <Badge className="shrink-0 bg-[oklch(0.704_0.191_22.216/0.15)] text-[oklch(0.78_0.18_22.216)] border-black/1 border-0 border-solid">
                          Production
                        </Badge>
                        <div className="flex items-center flex-1 gap-2">
                          <div className="size-6 font-semibold rounded-full bg-neutral-800 text-[10px] flex justify-center items-center">
                            KC
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Kartik C.
                          </span>
                        </div>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          8m 15s
                        </span>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          1d ago
                        </span>
                        <Badge className="shrink-0 bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] border-black/1 border-0 border-solid justify-center w-24">
                          <Check className="size-3 mr-1" />
                          Success
                        </Badge>
                      </div>
                      <div className="flex px-6 py-4 items-center gap-4">
                        <span className="size-2 shrink-0 bg-[oklch(0.769_0.188_70.08)] rounded-full" />
                        <div className="shrink-0 flex items-center gap-2 w-44">
                          <FolderGit2 className="size-4 text-[#a1a1a1]" />
                          <span className="font-medium text-sm leading-5">
                            api-gateway
                          </span>
                        </div>
                        <div className="shrink-0 text-[#a1a1a1] text-xs leading-4 flex items-center gap-1.5 w-40">
                          <GitBranch className="size-3.5" />
                          feat/rate-limit
                        </div>
                        <Badge className="shrink-0 bg-[oklch(0.488_0.243_264.376/0.18)] text-[oklch(0.62_0.22_264.376)] border-black/1 border-0 border-solid">
                          Preview
                        </Badge>
                        <div className="flex items-center flex-1 gap-2">
                          <div className="size-6 font-semibold rounded-full bg-neutral-800 text-[10px] flex justify-center items-center">
                            AM
                          </div>
                          <span className="text-[#a1a1a1] text-xs leading-4">
                            Aria M.
                          </span>
                        </div>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          1m 45s
                        </span>
                        <span className="shrink-0 text-[#a1a1a1] text-xs leading-4 w-16">
                          1d ago
                        </span>
                        <Badge className="shrink-0 bg-[oklch(0.769_0.188_70.08/0.15)] text-[oklch(0.8_0.16_70.08)] border-black/1 border-0 border-solid justify-center w-24">
                          <RefreshCw className="size-3 mr-1" />
                          In Progress
                        </Badge>
                      </div>
                    </div>
                  </Card>
                  <Card className="border-[oklch(0.704_0.191_22.216/0.25)] rounded-xl bg-neutral-950 border-black/1 border-1 border-solid p-6 gap-4">
                    <CardHeader className="flex p-0 flex-row items-start gap-3">
                      <div className="size-9 shrink-0 bg-[oklch(0.704_0.191_22.216/0.15)] rounded-lg flex justify-center items-center">
                        <AlertTriangle className="size-4.5 text-[oklch(0.78_0.18_22.216)]" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-sm leading-5">
                          Failed Deployments
                        </span>
                        <p className="text-[#a1a1a1] text-sm leading-5">
                          <span className="font-medium text-neutral-50">
                            payment-service
                          </span>
                          failed 3h ago on main → Production. Exit code 1 —
                          OOMKilled. 2 retries attempted.
                        </p>
                      </div>
                    </CardHeader>
                    <CardFooter className="p-0 gap-2">
                      <Button className="bg-neutral-800 text-neutral-50 h-8">
                        <FileText className="size-3.5 mr-1.5" />
                        View Logs
                      </Button>
                      <Button className="border-[oklch(0.704_0.191_22.216/0.35)] bg-transparent text-[oklch(0.78_0.18_22.216)] border-black/1 border-1 border-solid h-8">
                        <RefreshCw className="size-3.5 mr-1.5" />
                        Retry Deployment
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </main>
              <aside className="shrink-0 border-white/10 border-t-0 border-r-0 border-b-0 border-l-1 border-solid flex p-6 flex-col justify-between w-80">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
                      <Sparkles className="size-4 text-[oklch(0.627_0.265_303.9)]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm leading-5">
                        AI Workspace Assistant
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        Synced 3m ago
                      </span>
                    </div>
                  </div>
                  <Card className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid p-4 gap-3">
                    <CardHeader className="flex p-0 flex-row items-center gap-2">
                      <Rocket className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                      <span className="font-semibold text-sm leading-5">
                        Deployment Summary
                      </span>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-3">
                      <p className="text-[#a1a1a1] text-sm leading-5">
                        24 deployments this week, 22 successful, 1 failed, 1 in
                        progress.
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
                      <span className="font-semibold text-sm leading-5">
                        Recent Decisions
                      </span>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                          <span className="text-sm leading-5">
                            Use Redis caching
                          </span>
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4 pl-3.5">
                          Approved · 2h ago
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                          <span className="text-sm leading-5">
                            Move auth to middleware
                          </span>
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
                      <span className="font-semibold text-sm leading-5">
                        Suggested Actions
                      </span>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-2">
                      <button className="text-left rounded-lg bg-neutral-800 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                        <AlertTriangle className="size-4 shrink-0 text-[oklch(0.78_0.18_22.216)]" />
                        Investigate payment-service OOM failure
                      </button>
                      <button className="text-left rounded-lg bg-neutral-800 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                        <FileSearch className="size-4 shrink-0 text-[#a1a1a1]" />
                        Review infra-terraform plan before next deploy
                      </button>
                      <button className="text-left rounded-lg bg-neutral-800 text-sm leading-5 flex px-3 py-2.5 items-center gap-3">
                        <BellRing className="size-4 shrink-0 text-[#a1a1a1]" />
                        Set up deployment alerts for Production
                      </button>
                    </CardContent>
                  </Card>
                </div>
                <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-10">
                  <Sparkles className="size-4 text-[#a1a1a1]" />
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Ask the assistant...
                  </span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
