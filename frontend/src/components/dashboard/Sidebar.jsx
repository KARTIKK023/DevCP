import { Link, NavLink } from "react-router-dom";
import {
  CheckCircle2,
  GitBranch,
  Hexagon,
  Home,
  Layers,
  Rocket,
  Settings as SettingsIcon,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import { useDashboardShell } from "@/contexts/DashboardShellContext";

const navItems = [
  { to: "/dashboard", label: "Home", icon: Home, end: true },
  { to: "/dashboard/repositories", label: "Repositories", icon: GitBranch },
  { to: "/dashboard/meetings", label: "Meetings", icon: Video },
  { to: "/dashboard/architecture", label: "Architecture", icon: Layers },
  { to: "/dashboard/decisions", label: "Decisions", icon: CheckCircle2 },
  { to: "/dashboard/deployments", label: "Deployments", icon: Rocket },
  { to: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];

function SidebarContent({ onNavigate, showClose = false }) {
  const { closeSidebar } = useDashboardShell();

  const handleNavigate = () => {
    onNavigate?.();
    closeSidebar();
  };

  return (
    <>
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex px-1 sm:px-2 items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="size-8 shrink-0 rounded-lg bg-neutral-800 flex justify-center items-center">
              <Hexagon className="size-5 text-neutral-50" />
            </div>
            <Link
              to="/dashboard"
              onClick={handleNavigate}
              className="font-semibold text-base leading-6 tracking-tight truncate"
            >
              DevSphere
            </Link>
          </div>
          {showClose && (
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeSidebar}
              className="size-9 shrink-0 rounded-lg text-[#a1a1a1] border-white/10 border-1 border-solid flex justify-center items-center transition-colors hover:bg-neutral-800 hover:text-neutral-50 lg:hidden"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
        <nav className="flex flex-col justify-start items-stretch gap-1">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={handleNavigate}
              className={({ isActive }) =>
                `font-medium rounded-lg text-sm leading-5 flex px-3 py-2.5 items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-50/20 ${
                  isActive
                    ? "bg-neutral-800 text-neutral-50"
                    : "text-[#a1a1a1] hover:bg-neutral-800/60 hover:text-neutral-50"
                }`
              }
            >
              <Icon className="size-4 shrink-0" />
              <span>{label}</span>
            </NavLink>
          ))}
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
        <button
          type="button"
          className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-xs leading-4 mt-1 px-3 py-2.5 w-full transition-colors hover:bg-neutral-700"
        >
          Upgrade
        </button>
      </div>
    </>
  );
}

export default function Sidebar() {
  const { sidebarOpen } = useDashboardShell();

  return (
    <>
      <aside className="hidden lg:flex shrink-0 bg-neutral-900 border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid p-4 flex-col justify-between w-64 min-h-0">
        <SidebarContent />
      </aside>

      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-[min(100vw-3rem,16rem)] bg-neutral-900 border-white/10 border-r-1 border-solid p-4 flex flex-col justify-between transition-transform duration-300 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
        aria-hidden={!sidebarOpen}
      >
        <SidebarContent showClose />
      </aside>
    </>
  );
}
