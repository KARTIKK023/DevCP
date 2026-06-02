import { GitBranch, Layers, MessageSquareText } from "lucide-react";

const reservedFeatures = [
  {
    title: "GitHub Integration",
    description: "Repo context, PRs, commits, and file references will live here.",
    icon: GitBranch,
  },
  {
    title: "Architecture Canvas",
    description: "System diagrams and whiteboard collaboration will live here.",
    icon: Layers,
  },
  {
    title: "Meeting Workspace",
    description: "Agenda, notes, decisions, and action items will live here.",
    icon: MessageSquareText,
  },
];

export default function RoomFeaturePanel() {
  return (
    <aside className="bg-neutral-900 border-white/10 lg:border-l border-t lg:border-t-0 flex flex-col w-full lg:w-[22rem] shrink-0 min-h-0">
      <div className="border-white/10 border-b-1 border-solid p-4">
        <span className="font-semibold text-sm leading-5">Workspace area</span>
        <p className="text-[#a1a1a1] text-xs leading-4 mt-1">
          Reserved for meeting-side tools.
        </p>
      </div>
      <div className="p-4 overflow-y-auto min-h-0 flex-1 flex flex-col gap-3">
        {reservedFeatures.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-lg bg-neutral-950 border-white/10 border-1 border-dashed p-4 flex gap-3"
          >
            <div className="size-9 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
              <Icon className="size-4 text-[#a1a1a1]" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-sm leading-5">{title}</span>
              <span className="text-[#a1a1a1] text-xs leading-4">{description}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
