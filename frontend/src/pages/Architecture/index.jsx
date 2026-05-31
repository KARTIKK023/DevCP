import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  GitBranch,
  Hexagon,
  Home,
  Layers,
  Lightbulb,
  Plus,
  Rocket,
  Search,
  Settings as SettingsIcon,
  Share2,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Architecture() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-[956px] flex w-full">
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
                <a className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/architecture">
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
          <div className="min-w-0 flex flex-col flex-1">
            <header className="shrink-0 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 justify-between items-center h-16">
              <div className="flex items-center gap-3">
                <h1 className="font-semibold text-lg leading-7 tracking-tight">
                  Architecture
                </h1>
                <span className="rounded-full bg-neutral-800 text-neutral-50 text-xs leading-4 border-white/10 border-1 border-solid px-2 py-0.5">
                  8 boards
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex px-3 items-center gap-2 w-72 h-9">
                  <Search className="size-4 text-[#a1a1a1]" />
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    Search repos, meetings, decisions…
                  </span>
                </div>
                <button className="relative size-9 rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex justify-center items-center">
                  <Bell className="size-4 text-[#a1a1a1]" />
                  <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-2 top-2" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="size-9 font-medium rounded-full bg-neutral-800 text-xs leading-4 flex justify-center items-center">
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
            <main className="overflow-y-auto p-8 flex-1">
              <div className="flex mb-6 justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-xl leading-7 tracking-tight">
                    Architecture Boards
                  </h2>
                  <p className="text-[#a1a1a1] text-sm leading-5">
                    Visualize and document your system design.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="transition-colors rounded-lg bg-neutral-900 text-[#a1a1a1] text-sm leading-5 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-9">
                    <Users className="size-4" />
                    <span>Team</span>
                    <ChevronDown className="size-4" />
                  </button>
                  <Button className="bg-neutral-200 text-neutral-900 text-sm leading-5 flex px-3 items-center gap-2 h-9">
                    <Plus className="size-4" />
                    <span>New board</span>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                  <div className="relative bg-[radial-gradient(oklch(1_0_0/0.08)_1px,transparent_1px)] rounded-lg bg-neutral-950 border-white/10 border-1 border-solid h-40 overflow-hidden">
                    <div className="flex absolute inset-0 px-4 justify-center items-center gap-2">
                      <div className="border-[oklch(0.696_0.17_162.48)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Client
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.696_0.17_162.48)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        API Gateway
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.627_0.265_303.9)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Auth
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.488_0.243_264.376)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Database
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex p-0 flex-col gap-3">
                    <span className="font-medium text-neutral-50 text-sm leading-5">
                      Service Mesh
                    </span>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Layers className="size-3.5" />
                        14 nodes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        updated 1h ago
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex p-0 items-center gap-2">
                    <button className="transition-colors font-medium rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 items-center gap-2 h-8">
                      Open Board
                    </button>
                    <button className="transition-colors rounded-lg text-[#a1a1a1] text-xs leading-4 flex px-3 items-center gap-1.5 h-8">
                      <Share2 className="size-3.5" />
                      Share
                    </button>
                  </CardFooter>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                  <div className="relative bg-[radial-gradient(oklch(1_0_0/0.08)_1px,transparent_1px)] rounded-lg bg-neutral-950 border-white/10 border-1 border-solid h-40 overflow-hidden">
                    <div className="flex absolute inset-0 px-4 justify-center items-center gap-2">
                      <div className="border-[oklch(0.769_0.188_70.08)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Ingestion
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.696_0.17_162.48)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Transform
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-white/10 border-1 border-solid px-2.5 py-1.5">
                        Storage
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.488_0.243_264.376)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Analytics
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex p-0 flex-col gap-3">
                    <span className="font-medium text-neutral-50 text-sm leading-5">
                      Data Pipeline
                    </span>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Layers className="size-3.5" />9 nodes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        updated 3h ago
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex p-0 items-center gap-2">
                    <button className="transition-colors font-medium rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 items-center gap-2 h-8">
                      Open Board
                    </button>
                    <button className="transition-colors rounded-lg text-[#a1a1a1] text-xs leading-4 flex px-3 items-center gap-1.5 h-8">
                      <Share2 className="size-3.5" />
                      Share
                    </button>
                  </CardFooter>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                  <div className="relative bg-[radial-gradient(oklch(1_0_0/0.08)_1px,transparent_1px)] rounded-lg bg-neutral-950 border-white/10 border-1 border-solid h-40 overflow-hidden">
                    <div className="flex absolute inset-0 px-4 justify-center items-center gap-2">
                      <div className="border-[oklch(0.696_0.17_162.48)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Browser
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-white/10 border-1 border-solid px-2.5 py-1.5">
                        Load Balancer
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.627_0.265_303.9)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Auth
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.645_0.246_16.439)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Redis
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex p-0 flex-col gap-3">
                    <span className="font-medium text-neutral-50 text-sm leading-5">
                      Auth Flow
                    </span>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Layers className="size-3.5" />
                        11 nodes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        updated 5h ago
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex p-0 items-center gap-2">
                    <button className="transition-colors font-medium rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 items-center gap-2 h-8">
                      Open Board
                    </button>
                    <button className="transition-colors rounded-lg text-[#a1a1a1] text-xs leading-4 flex px-3 items-center gap-1.5 h-8">
                      <Share2 className="size-3.5" />
                      Share
                    </button>
                  </CardFooter>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                  <div className="relative bg-[radial-gradient(oklch(1_0_0/0.08)_1px,transparent_1px)] rounded-lg bg-neutral-950 border-white/10 border-1 border-solid h-40 overflow-hidden">
                    <div className="flex absolute inset-0 justify-center items-center">
                      <div className="border-[oklch(0.696_0.17_162.48)] z-10 rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        API Gateway
                      </div>
                    </div>
                    <div className="rounded-md bg-neutral-800 text-[#a1a1a1] text-[10px] border-white/10 border-1 border-solid absolute left-6 top-3 px-2 py-1">
                      Svc A
                    </div>
                    <div className="rounded-md bg-neutral-800 text-[#a1a1a1] text-[10px] border-white/10 border-1 border-solid absolute right-6 top-3 px-2 py-1">
                      Svc B
                    </div>
                    <div className="rounded-md bg-neutral-800 text-[#a1a1a1] text-[10px] border-white/10 border-1 border-solid absolute left-6 bottom-3 px-2 py-1">
                      Svc C
                    </div>
                    <div className="rounded-md bg-neutral-800 text-[#a1a1a1] text-[10px] border-white/10 border-1 border-solid absolute right-6 bottom-3 px-2 py-1">
                      Svc D
                    </div>
                    <div className="top-1/2 -translate-y-1/2 rounded-md bg-neutral-800 text-[#a1a1a1] text-[10px] border-white/10 border-1 border-solid absolute left-3 px-2 py-1">
                      Svc E
                    </div>
                  </div>
                  <CardContent className="flex p-0 flex-col gap-3">
                    <span className="font-medium text-neutral-50 text-sm leading-5">
                      Microservices Overview
                    </span>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Layers className="size-3.5" />
                        18 nodes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        updated 2d ago
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex p-0 items-center gap-2">
                    <button className="transition-colors font-medium rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 items-center gap-2 h-8">
                      Open Board
                    </button>
                    <button className="transition-colors rounded-lg text-[#a1a1a1] text-xs leading-4 flex px-3 items-center gap-1.5 h-8">
                      <Share2 className="size-3.5" />
                      Share
                    </button>
                  </CardFooter>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                  <div className="relative bg-[radial-gradient(oklch(1_0_0/0.08)_1px,transparent_1px)] rounded-lg bg-neutral-950 border-white/10 border-1 border-solid h-40 overflow-hidden">
                    <div className="flex absolute inset-0 px-4 justify-center items-center gap-2">
                      <div className="border-[oklch(0.488_0.243_264.376)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Cloud
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-white/10 border-1 border-solid px-2.5 py-1.5">
                        VPC
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.769_0.188_70.08)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Subnets
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.696_0.17_162.48)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        EC2/RDS
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex p-0 flex-col gap-3">
                    <span className="font-medium text-neutral-50 text-sm leading-5">
                      Infra Topology
                    </span>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Layers className="size-3.5" />
                        22 nodes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        updated 4d ago
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex p-0 items-center gap-2">
                    <button className="transition-colors font-medium rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 items-center gap-2 h-8">
                      Open Board
                    </button>
                    <button className="transition-colors rounded-lg text-[#a1a1a1] text-xs leading-4 flex px-3 items-center gap-1.5 h-8">
                      <Share2 className="size-3.5" />
                      Share
                    </button>
                  </CardFooter>
                </Card>
                <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-3">
                  <div className="relative bg-[radial-gradient(oklch(1_0_0/0.08)_1px,transparent_1px)] rounded-lg bg-neutral-950 border-white/10 border-1 border-solid h-40 overflow-hidden">
                    <div className="flex absolute inset-0 px-4 justify-center items-center gap-2">
                      <div className="border-[oklch(0.696_0.17_162.48)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        Browser
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.769_0.188_70.08)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        CDN
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-white/10 border-1 border-solid px-2.5 py-1.5">
                        Next.js
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-[#a1a1a1]" />
                      <div className="border-[oklch(0.488_0.243_264.376)] rounded-md bg-neutral-800 text-neutral-50 text-[11px] border-black/1 border-1 border-solid px-2.5 py-1.5">
                        API
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex p-0 flex-col gap-3">
                    <span className="font-medium text-neutral-50 text-sm leading-5">
                      Frontend Architecture
                    </span>
                    <div className="text-[#a1a1a1] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Layers className="size-3.5" />8 nodes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        updated 6d ago
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex p-0 items-center gap-2">
                    <button className="transition-colors font-medium rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 items-center gap-2 h-8">
                      Open Board
                    </button>
                    <button className="transition-colors rounded-lg text-[#a1a1a1] text-xs leading-4 flex px-3 items-center gap-1.5 h-8">
                      <Share2 className="size-3.5" />
                      Share
                    </button>
                  </CardFooter>
                </Card>
              </div>
            </main>
          </div>
          <aside className="shrink-0 bg-neutral-900 border-white/10 border-t-0 border-r-0 border-b-0 border-l-1 border-solid flex flex-col w-80">
            <div className="shrink-0 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 items-center gap-3 h-16">
              <div className="size-9 rounded-lg bg-neutral-800 flex justify-center items-center">
                <Sparkles className="size-4 text-[oklch(0.627_0.265_303.9)]" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight font-semibold text-sm leading-5">
                  AI Workspace Assistant
                </span>
                <span className="leading-tight text-[#a1a1a1] text-xs leading-4">
                  Synced 3m ago
                </span>
              </div>
            </div>
            <div className="overflow-y-auto flex p-6 flex-col flex-1 gap-4">
              <Card className="bg-neutral-950 border-white/10 border-0 border-solid p-4 gap-3">
                <CardHeader className="flex p-0 flex-row items-center gap-2">
                  <Layers className="size-4 text-[oklch(0.696_0.17_162.48)]" />
                  <span className="font-medium text-sm leading-5">
                    Architecture Summary
                  </span>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-3">
                  <p className="leading-relaxed text-[#a1a1a1] text-xs leading-4">
                    8 boards, 3 updated this week, 47 total nodes. Service Mesh
                    is the most active board.
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
                  <span className="font-medium text-sm leading-5">
                    Recent Decisions
                  </span>
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
                  <span className="font-medium text-sm leading-5">
                    Suggested Actions
                  </span>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-2">
                  <button className="transition-colors text-left rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 py-2 items-center gap-2">
                    <FileText className="size-4 shrink-0 text-[#a1a1a1]" />
                    Document Service Mesh dependencies
                  </button>
                  <button className="transition-colors text-left rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 py-2 items-center gap-2">
                    <Plus className="size-4 shrink-0 text-[#a1a1a1]" />
                    Add Redis node to Auth Flow board
                  </button>
                  <button className="transition-colors text-left rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 flex px-3 py-2 items-center gap-2">
                    <Share2 className="size-4 shrink-0 text-[#a1a1a1]" />
                    Share Data Pipeline with Data team
                  </button>
                </CardContent>
              </Card>
            </div>
            <div className="shrink-0 border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid p-6">
              <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-10">
                <Sparkles className="size-4 text-[#a1a1a1]" />
                <span className="text-[#a1a1a1] text-sm leading-5">
                  Ask the assistant…
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
