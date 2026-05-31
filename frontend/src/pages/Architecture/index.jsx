import {
  ArrowRight,
  ChevronDown,
  Clock,
  Layers,
  Plus,
  Share2,
  Users,
} from "lucide-react";
import ArchitectureAssistant from "@/components/dashboard/assistants/ArchitectureAssistant";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useDashboardPage } from "@/hooks/useDashboardPage";

export default function Architecture() {
  useDashboardPage({
    title: "Architecture",
    badge: (
      <span className="rounded-full bg-neutral-800 text-neutral-50 text-xs leading-4 border-white/10 border-1 border-solid px-2 py-0.5">
        8 boards
      </span>
    ),
    
    controlsClassName: "gap-4",
    search: "static",
    bellStyle: "plain",
    avatarStyle: "initials-lg",
    contentClassName: "min-w-0 flex flex-col flex-1",
    layoutClassName: "min-h-dvh",
    assistantPlacement: "sibling",
    assistantVariant: "fullHeight",
    assistantFooter: "static",
    assistant: <ArchitectureAssistant />,
  });

  return (
    <>
<div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start mb-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
    </>
  );
}
