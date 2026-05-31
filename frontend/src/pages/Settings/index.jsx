import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  ChevronDown,
  GitBranch,
  Hexagon,
  Home,
  Layers,
  Rocket,
  Search,
  Settings as SettingsIcon,
  Sparkles,
  Upload,
  Video,
} from "lucide-react";

import { FallbackComponent } from "../CustomComponents";

export default function Settings() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="flex w-full h-239">
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
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/deployments">
                  <Rocket className="size-4" />
                  <span>Deployments</span>
                </a>
                <a className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 flex px-3 py-2 items-center gap-2" href="/dashboard/settings">
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
              <h1 className="font-semibold text-lg leading-7 tracking-tight">
                Settings
              </h1>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex px-3 py-2 items-center gap-2 w-72">
                  <Search className="size-4 text-[#a1a1a1]" />
                  <input
                    className="bg-transparent outline-none text-neutral-50 text-sm leading-5 w-full"
                    placeholder="Search repos, meetings, decisions..."
                  />
                </div>
                <button className="relative size-9 rounded-lg bg-neutral-900 border-white/10 border-1 border-solid flex justify-center items-center">
                  <Bell className="size-4 text-[#a1a1a1]" />
                  <span className="size-2 bg-[oklch(0.696_0.17_162.48)] rounded-full absolute right-2 top-2" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="size-9 font-semibold rounded-full bg-neutral-800 text-xs leading-4 flex justify-center items-center">
                    KC
                  </div>
                  <div className="flex flex-col">
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
            <div className="min-h-0 flex flex-1">
              <nav className="shrink-0 bg-neutral-900 border-white/10 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-4 flex-col gap-1 w-48">
                <a className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 px-3 py-2">
                  Profile
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2">
                  Workspace
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2">
                  Integrations
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2">
                  Notifications
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2">
                  Security
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2">
                  Billing
                </a>
                <a className="font-medium rounded-lg text-[#a1a1a1] text-sm leading-5 px-3 py-2">
                  Team
                </a>
              </nav>
              <main className="min-w-0 overflow-y-auto p-8 flex-1">
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
                      <div className="size-16 font-semibold rounded-full bg-neutral-800 text-lg leading-7 flex justify-center items-center">
                        KC
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-medium text-neutral-50 text-sm leading-5">
                          Kartik Chaudhary
                        </span>
                        <span className="text-[#a1a1a1] text-sm leading-5">
                          kartik@devsphere.io
                        </span>
                      </div>
                    </div>
                    <button className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 flex px-4 py-2 items-center gap-2">
                      <Upload className="size-4" />
                      Upload photo
                    </button>
                  </div>
                  <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex p-6 flex-col gap-6">
                    <h3 className="font-semibold text-neutral-50 text-base leading-6">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-[#a1a1a1] text-xs leading-4">
                          Full Name
                        </label>
                        <input
                          className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 py-2"
                          defaultValue="Kartik Chaudhary"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-[#a1a1a1] text-xs leading-4">
                          Email
                        </label>
                        <input
                          className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 py-2"
                          defaultValue="kartik@devsphere.io"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-[#a1a1a1] text-xs leading-4">
                          Role
                        </label>
                        <input
                          className="outline-none rounded-lg bg-neutral-950 text-neutral-50 text-sm leading-5 border-white/10 border-1 border-solid px-3 py-2"
                          defaultValue="Engineering Lead"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-[#a1a1a1] text-xs leading-4">
                          Timezone
                        </label>
                        <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid flex px-3 py-2 justify-between items-center">
                          <span className="text-neutral-50 text-sm leading-5">
                            Asia/Kolkata (UTC+5:30)
                          </span>
                          <ChevronDown className="size-4 text-[#a1a1a1]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="font-medium rounded-lg bg-neutral-200 text-neutral-900 text-sm leading-5 px-4 py-2">
                        Save changes
                      </button>
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
                              kartikchaudhary
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] font-medium rounded-full text-xs leading-4 flex px-2 py-0.5 items-center gap-1">
                            <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                            Connected
                          </span>
                          <button className="font-medium text-[#a1a1a1] text-xs leading-4">
                            Disconnect
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-neutral-950 border-white/10 border-1 border-solid flex px-4 py-3 justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FallbackComponent className="size-5 text-neutral-50" />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-neutral-50 text-sm leading-5">
                              Google
                            </span>
                            <span className="text-[#a1a1a1] text-xs leading-4">
                              kartik@gmail.com
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-[oklch(0.696_0.17_162.48/0.15)] text-[oklch(0.696_0.17_162.48)] font-medium rounded-full text-xs leading-4 flex px-2 py-0.5 items-center gap-1">
                            <span className="size-1.5 bg-[oklch(0.696_0.17_162.48)] rounded-full" />
                            Connected
                          </span>
                          <button className="font-medium text-[#a1a1a1] text-xs leading-4">
                            Disconnect
                          </button>
                        </div>
                      </div>
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
                        <button className="font-medium rounded-lg text-[#ff6467] text-sm leading-5 border-[#ff6467]/40 border-1 border-solid px-4 py-2">
                          Delete Workspace
                        </button>
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
                        <button className="font-medium rounded-lg bg-neutral-800 text-neutral-50 text-sm leading-5 px-4 py-2">
                          Transfer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
