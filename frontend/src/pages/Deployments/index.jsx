import {
  Activity,
  AlertTriangle,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  FolderGit2,
  GitBranch,
  Globe,
  RefreshCw,
  Rocket,
  TrendingDown,
  TrendingUp,
  X,
} from "lucide-react";
import DeploymentsAssistant from "@/components/dashboard/assistants/DeploymentsAssistant";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useDashboardPage } from "@/hooks/useDashboardPage";

export default function Deployments() {
  useDashboardPage({
    title: "Deployments",
    badge: (
      <Badge className="bg-neutral-800 text-neutral-50 border-black/1 border-0 border-solid">
        24 this week
      </Badge>
    ),
    
    controlsClassName: "gap-4",
    search: "static",
    bellStyle: "plain",
    avatarStyle: "initials-lg",
    contentClassName: "flex flex-col flex-1 overflow-hidden",
    layoutClassName: "min-h-0 overflow-hidden",
    assistantVariant: "deployments",
    assistantFooter: "static",
    assistant: <DeploymentsAssistant />,
  });

  return (
    <>
<div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </>
  );
}
