import { Bell, Menu, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDashboardShell } from "@/contexts/DashboardShellContext";
import { useAuth } from "@/hooks/useAuth";
import { getInitials } from "@/lib/utils";

export default function TopBar({
  title,
  badge = null,
  headerClassName = "",
  controlsClassName = "gap-2 sm:gap-3",
  search = "input",
  bellStyle = "button",
  avatarStyle = "initials",
  avatarInitials,
}) {
  const { toggleSidebar } = useDashboardShell();
  const { user } = useAuth();
  const initials = avatarInitials || getInitials(user?.name);
  const displayName = user?.name || "Guest";
  const displayEmail = user?.email || "";

  const headerPadding =
    headerClassName ||
    "px-4 sm:px-6 lg:px-8";

  return (
    <header
      className={`sticky top-0 z-30 shrink-0 border-white/10 border-b bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/80 flex ${headerPadding} justify-between items-center gap-3 sm:gap-4 min-h-16 py-2`}
    >
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={toggleSidebar}
          className="size-9 shrink-0 rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex justify-center items-center text-[#a1a1a1] transition-colors hover:bg-neutral-800 hover:text-neutral-50 lg:hidden"
        >
          <Menu className="size-4" />
        </button>
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <h1 className="font-semibold text-base sm:text-lg leading-7 tracking-tight truncate">
            {title}
          </h1>
          {badge && <div className="shrink-0 scale-90 sm:scale-100 origin-left">{badge}</div>}
        </div>
      </div>
      <div className={`flex items-center ${controlsClassName} shrink-0`}>
        {search === "input" && (
          <div className="relative hidden md:block w-48 lg:w-64 xl:w-72">
            <Search className="size-4 top-1/2 -translate-y-1/2 text-[#a1a1a1] absolute left-3 pointer-events-none" />
            <Input
              placeholder="Search repos, meetings, decisions..."
              className="bg-neutral-900 text-sm leading-5 border-white/10 border-0 border-solid pl-9 h-9 w-full transition-colors focus-visible:ring-2 focus-visible:ring-neutral-50/20"
            />
          </div>
        )}
        {search === "static" && (
          <div className="hidden md:flex rounded-lg bg-neutral-900 border-white/10 border-1 border-solid px-3 items-center gap-2 w-48 lg:w-64 xl:w-72 h-9 min-w-0">
            <Search className="size-4 text-[#a1a1a1] shrink-0" />
            <span className="text-[#a1a1a1] text-sm leading-5 truncate">
              Search repos, meetings, decisions…
            </span>
          </div>
        )}
        {search === "settings" && (
          <div className="hidden md:flex rounded-lg bg-neutral-900 border-white/10 border-1 border-solid px-3 py-2 items-center gap-2 w-48 lg:w-64 xl:w-72 min-w-0">
            <Search className="size-4 text-[#a1a1a1] shrink-0" />
            <input
              className="bg-transparent outline-none text-neutral-50 text-sm leading-5 w-full min-w-0 placeholder:text-[#a1a1a1]"
              placeholder="Search repos, meetings, decisions..."
            />
          </div>
        )}
        {bellStyle === "button" && (
          <Button
            variant="outline"
            size="icon"
            aria-label="Notifications"
            className="size-9 relative bg-neutral-900 border-white/10 border-0 border-solid transition-colors hover:bg-neutral-800"
          >
            <Bell className="size-4" />
            <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-1.5 top-1.5" />
          </Button>
        )}
        {bellStyle === "plain" && (
          <button
            type="button"
            aria-label="Notifications"
            className="relative size-9 rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex justify-center items-center transition-colors hover:bg-neutral-800"
          >
            <Bell className="size-4 text-[#a1a1a1]" />
            <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-2 top-2" />
          </button>
        )}
        {bellStyle === "plain-no-bg" && (
          <button
            type="button"
            aria-label="Notifications"
            className="relative size-9 rounded-lg flex justify-center items-center transition-colors hover:bg-neutral-900"
          >
            <Bell className="size-4 text-[#a1a1a1]" />
            <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-2 top-2" />
          </button>
        )}
        <div className="flex pl-1 sm:pl-2 items-center gap-2">
          {avatarStyle === "empty" && (
            <div className="size-8 shrink-0 rounded-full border-white/10 border-1 border-solid overflow-hidden" />
          )}
          {avatarStyle === "initials" && (
            <div className="size-8 shrink-0 font-medium rounded-full bg-neutral-800 text-xs leading-4 border-white/10 border-1 border-solid flex justify-center items-center overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar} alt="" className="size-full object-cover" />
              ) : (
                initials
              )}
            </div>
          )}
          {avatarStyle === "avatar" && (
            <Avatar className="size-8 shrink-0">
              {user?.avatar ? (
                <img src={user.avatar} alt="" className="size-full object-cover rounded-full" />
              ) : (
                <AvatarFallback className="bg-neutral-800 text-neutral-50 text-xs leading-4">
                  {initials}
                </AvatarFallback>
              )}
            </Avatar>
          )}
          {avatarStyle === "initials-lg" && (
            <div className="size-9 shrink-0 font-semibold rounded-full bg-neutral-800 text-xs leading-4 flex justify-center items-center overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar} alt="" className="size-full object-cover" />
              ) : (
                initials
              )}
            </div>
          )}
          <div className="leading-tight hidden sm:flex flex-col min-w-0">
            <span className="font-medium text-sm leading-5 truncate">
              {displayName}
            </span>
            <span className="text-[#a1a1a1] text-xs leading-4 truncate">
              {displayEmail}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
