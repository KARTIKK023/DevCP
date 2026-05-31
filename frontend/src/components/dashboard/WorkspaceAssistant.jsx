import { Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

const assistantWidth =
  "hidden xl:flex shrink-0 w-72 2xl:w-80 min-w-0 max-w-[20rem]";

function AssistantHeader({ variant }) {
  if (variant === "panel") {
    return (
      <div className="border-white/10 border-b flex p-4 sm:p-5 flex-col gap-1">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-[oklch(0.627_0.265_303.9)]" />
          <span className="font-semibold text-sm leading-5">
            AI Workspace Assistant
          </span>
        </div>
        <span className="text-[#a1a1a1] text-xs leading-4 pl-6">
          Synced 3m ago
        </span>
      </div>
    );
  }

  if (variant === "fullHeight") {
    return (
      <div className="shrink-0 border-white/10 border-b flex px-4 sm:px-6 items-center gap-3 min-h-16">
        <div className="size-9 rounded-lg bg-neutral-800 flex justify-center items-center">
          <Sparkles className="size-4 text-[oklch(0.627_0.265_303.9)]" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="leading-tight font-semibold text-sm leading-5 truncate">
            AI Workspace Assistant
          </span>
          <span className="leading-tight text-[#a1a1a1] text-xs leading-4">
            Synced 3m ago
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div
        className={`rounded-lg bg-neutral-800 flex justify-center items-center shrink-0 ${
          variant === "decisions" ? "size-9" : "size-8"
        }`}
      >
        <Sparkles className="size-4 text-[oklch(0.627_0.265_303.9)]" />
      </div>
      <div className="leading-tight flex flex-col min-w-0">
        <span className="font-semibold text-sm leading-5 truncate">
          AI Workspace Assistant
        </span>
        <span className="text-[#a1a1a1] text-xs leading-4">Synced 3m ago</span>
      </div>
    </div>
  );
}

function AssistantFooter({ footer, variant }) {
  if (footer === "static") {
    if (variant === "fullHeight") {
      return (
        <div className="shrink-0 border-white/10 border-t p-4 sm:p-6">
          <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-10">
            <Sparkles className="size-4 text-[#a1a1a1]" />
            <span className="text-[#a1a1a1] text-sm leading-5">
              Ask the assistant…
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex px-3 items-center gap-2 h-10">
        <Sparkles className="size-4 text-[#a1a1a1]" />
        <span className="text-[#a1a1a1] text-sm leading-5">
          Ask the assistant...
        </span>
      </div>
    );
  }

  const inputClassName =
    variant === "panel"
      ? "bg-neutral-950 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-10 w-full transition-colors focus-visible:ring-2 focus-visible:ring-neutral-50/20"
      : variant === "decisions"
        ? "bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-10 w-full transition-colors focus-visible:ring-2 focus-visible:ring-neutral-50/20"
        : "bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-9 w-full transition-colors focus-visible:ring-2 focus-visible:ring-neutral-50/20";

  const wrapperClassName =
    variant === "panel"
      ? "border-white/10 border-t p-4"
      : "relative mt-auto";

  return (
    <div className={wrapperClassName}>
      <div className="relative">
        <Sparkles className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3 pointer-events-none" />
        <Input placeholder="Ask the assistant..." className={inputClassName} />
      </div>
    </div>
  );
}

export default function WorkspaceAssistant({
  variant = "default",
  footer = "input",
  children,
}) {
  if (variant === "panel") {
    return (
      <aside
        className={`${assistantWidth} bg-neutral-900 border-white/10 border-l flex-col`}
      >
        <AssistantHeader variant="panel" />
        <div className="overflow-y-auto flex p-4 sm:p-5 flex-col flex-1 gap-4 min-h-0">
          {children}
        </div>
        <AssistantFooter footer={footer} variant="panel" />
      </aside>
    );
  }

  if (variant === "fullHeight") {
    return (
      <aside
        className={`${assistantWidth} bg-neutral-900 border-white/10 border-l flex-col`}
      >
        <AssistantHeader variant="fullHeight" />
        <div className="overflow-y-auto flex p-4 sm:p-6 flex-col flex-1 gap-4 min-h-0">
          {children}
        </div>
        <AssistantFooter footer={footer} variant="fullHeight" />
      </aside>
    );
  }

  if (variant === "deployments") {
    return (
      <aside
        className={`${assistantWidth} border-white/10 border-l p-4 sm:p-6 flex-col justify-between min-h-0`}
      >
        <div className="flex flex-col gap-4 sm:gap-6 overflow-y-auto min-h-0">
          <AssistantHeader variant="deployments" />
          {children}
        </div>
        <AssistantFooter footer={footer} variant="deployments" />
      </aside>
    );
  }

  return (
    <aside
      className={`${assistantWidth} overflow-y-auto border-white/10 border-l p-4 sm:p-6 flex-col gap-4 sm:gap-6 h-full min-h-0`}
    >
      <AssistantHeader variant={variant} />
      {children}
      <AssistantFooter footer={footer} variant={variant} />
    </aside>
  );
}
