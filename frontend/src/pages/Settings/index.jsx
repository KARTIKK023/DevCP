import { MouseGlow } from "@/components/effects";
import { AlertTriangle, LogOut, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useDashboardPage } from "@/hooks/useDashboardPage";
import { formatDate, formatProvider, getInitials } from "@/lib/utils";
import { FallbackComponent } from "../CustomComponents";

export default function Settings() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const initials = getInitials(user?.name);

  useDashboardPage({
    title: "Settings",
    badge: null,
    controlsClassName: "gap-4",
    search: "settings",
    bellStyle: "plain",
    avatarStyle: "initials-lg",
    showAssistant: false,
    contentClassName: "min-w-0 flex flex-col flex-1",
    layoutClassName: "min-h-0",
  });

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className="min-h-0 flex flex-1 flex-col md:flex-row min-w-0">
        <MouseGlow />
        <nav className="shrink-0 bg-neutral-900 border-white/10 md:border-r flex p-3 sm:p-4 flex-row md:flex-col gap-1 w-full md:w-48 overflow-x-auto md:overflow-x-visible">
          <a className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 px-3 py-2 whitespace-nowrap shrink-0">
            Profile
          </a>
          <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2 whitespace-nowrap shrink-0 transition-colors hover:bg-neutral-800/60 hover:text-neutral-50">
            Workspace
          </a>
          <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2 whitespace-nowrap shrink-0 transition-colors hover:bg-neutral-800/60 hover:text-neutral-50">
            Integrations
          </a>
          <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2 whitespace-nowrap shrink-0 transition-colors hover:bg-neutral-800/60 hover:text-neutral-50">
            Notifications
          </a>
          <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2 whitespace-nowrap shrink-0 transition-colors hover:bg-neutral-800/60 hover:text-neutral-50">
            Security
          </a>
          <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2 whitespace-nowrap shrink-0 transition-colors hover:bg-neutral-800/60 hover:text-neutral-50">
            Billing
          </a>
          <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2 whitespace-nowrap shrink-0 transition-colors hover:bg-neutral-800/60 hover:text-neutral-50">
            Team
          </a>
        </nav>
        <main className="min-w-0 overflow-y-auto p-4 sm:p-6 lg:p-8 flex-1">
          <div className="max-w-2xl flex mx-auto flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-neutral-50 text-2xl leading-8 tracking-tight">
                Profile Settings
              </h2>
              <p className="text-[#a1a1a1] text-sm leading-5">
                Manage your personal account information.
              </p>
            </div>
            <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex p-6 justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="size-16 font-semibold rounded-full bg-neutral-800 text-lg leading-7 flex justify-center items-center overflow-hidden">
                  {user?.avatar ? (
                    <img src={user.avatar} alt="" className="size-full object-cover" />
                  ) : (
                    initials
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-neutral-50 text-sm leading-5">
                    {user?.name}
                  </span>
                  <span className="text-[#a1a1a1] text-sm leading-5">
                    {user?.email}
                  </span>
                </div>
              </div>
              <Button variant="secondary" disabled>
                <Upload className="size-4" />
                Upload photo
              </Button>
            </div>
            <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex p-6 flex-col gap-6">
              <h3 className="font-semibold text-neutral-50 text-base leading-6">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-[#a1a1a1] text-xs leading-4">
                    Full Name
                  </label>
                  <input
                    readOnly
                    className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 py-2"
                    value={user?.name || ""}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-[#a1a1a1] text-xs leading-4">
                    Email
                  </label>
                  <input
                    readOnly
                    className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 py-2"
                    value={user?.email || ""}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-[#a1a1a1] text-xs leading-4">
                    Provider
                  </label>
                  <input
                    readOnly
                    className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 py-2"
                    value={formatProvider(user?.provider)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-[#a1a1a1] text-xs leading-4">
                    Account Created
                  </label>
                  <input
                    readOnly
                    className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 py-2"
                    value={formatDate(user?.createdAt)}
                  />
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex p-6 flex-col gap-6">
              <h3 className="font-semibold text-neutral-50 text-base leading-6">
                Connected Accounts
              </h3>
              <div className="flex flex-col gap-4">
                <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FallbackComponent className="size-5 text-neutral-50" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-neutral-50 text-sm leading-5">
                        GitHub
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        {user?.provider === "github" ? "Connected" : "Not connected"}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" disabled className="text-xs">
                    {user?.provider === "github" ? "Disconnect" : "Connect"}
                  </Button>
                </div>
                <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                  <div className="flex items-center gap-3">
                    <FallbackComponent className="size-5 text-neutral-50" />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-neutral-50 text-sm leading-5">
                        Google
                      </span>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        {user?.provider === "google" ? "Connected" : "Not connected"}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" disabled className="text-xs">
                    {user?.provider === "google" ? "Disconnect" : "Connect"}
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex p-6 flex-col gap-4">
              <h3 className="font-semibold text-neutral-50 text-base leading-6">
                Session
              </h3>
              <p className="text-[#a1a1a1] text-sm leading-5">
                Sign out of DevSphere on this device.
              </p>
              <div className="flex justify-end">
                <Button variant="secondary" onClick={handleLogout}>
                  <LogOut className="size-4" />
                  Log out
                </Button>
              </div>
            </div>
            <div className="rounded-xl bg-neutral-900 border-[#ff6467]/20 border-1 border-solid flex p-6 flex-col gap-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="size-4 text-[#ff6467]" />
                <h3 className="font-semibold text-[#ff6467] text-base leading-6">
                  Danger Zone
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-neutral-50 text-sm leading-5">
                      Delete Workspace
                    </span>
                    <span className="text-[#a1a1a1] text-xs leading-4">
                      Permanently delete this workspace and all data.
                    </span>
                  </div>
                  <Button variant="destructive" disabled>
                    Delete Workspace
                  </Button>
                </div>
                <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-neutral-50 text-sm leading-5">
                      Transfer Ownership
                    </span>
                    <span className="text-[#a1a1a1] text-xs leading-4">
                      Transfer workspace ownership to another member.
                    </span>
                  </div>
                  <Button variant="secondary" disabled>
                    Transfer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
