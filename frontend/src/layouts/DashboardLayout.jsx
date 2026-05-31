import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import WorkspaceAssistant from "@/components/dashboard/WorkspaceAssistant";
import {
  DashboardLayoutContext,
  defaultDashboardPageConfig,
} from "@/contexts/DashboardLayoutContext";
import {
  DashboardShellProvider,
  useDashboardShell,
} from "@/contexts/DashboardShellContext";

function DashboardLayoutContent() {
  const [pageConfig, setPageConfig] = useState(defaultDashboardPageConfig);
  const { sidebarOpen, closeSidebar } = useDashboardShell();

  const contextValue = useMemo(
    () => ({ pageConfig, setPageConfig }),
    [pageConfig],
  );

  const {
    title,
    badge,
    headerClassName,
    controlsClassName,
    search,
    bellStyle,
    avatarStyle,
    avatarInitials,
    mainClassName,
    showAssistant,
    assistantVariant,
    assistantPlacement,
    assistantFooter,
    assistant,
    layoutClassName,
    contentClassName,
  } = pageConfig;

  const outerClassName = [
    "bg-neutral-950 text-neutral-50 flex w-full min-h-dvh overflow-x-hidden",
    layoutClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const mainContent = mainClassName ? (
    <main className={mainClassName}>
      <Outlet />
    </main>
  ) : (
    <Outlet />
  );

  const assistantPanel =
    showAssistant && assistant ? (
      <WorkspaceAssistant variant={assistantVariant} footer={assistantFooter}>
        {assistant}
      </WorkspaceAssistant>
    ) : null;

  return (
    <DashboardLayoutContext.Provider value={contextValue}>
      <div className={outerClassName}>
        <div
          aria-hidden={!sidebarOpen}
          className={`fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            sidebarOpen
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={closeSidebar}
        />
        <Sidebar />
        {assistantPlacement === "sibling" ? (
          <>
            <div className={`${contentClassName} min-w-0 flex-1 flex flex-col`}>
              <TopBar
                title={title}
                badge={badge}
                headerClassName={headerClassName}
                controlsClassName={controlsClassName}
                search={search}
                bellStyle={bellStyle}
                avatarStyle={avatarStyle}
                avatarInitials={avatarInitials}
              />
              {mainContent}
            </div>
            {assistantPanel}
          </>
        ) : (
          <div className={`${contentClassName} min-w-0 flex-1 flex flex-col`}>
            <TopBar
              title={title}
              badge={badge}
              headerClassName={headerClassName}
              controlsClassName={controlsClassName}
              search={search}
              bellStyle={bellStyle}
              avatarStyle={avatarStyle}
              avatarInitials={avatarInitials}
            />
            {showAssistant ? (
              <div className="flex flex-1 min-h-0 overflow-hidden">
                {mainContent}
                {assistantPanel}
              </div>
            ) : (
              mainContent
            )}
          </div>
        )}
      </div>
    </DashboardLayoutContext.Provider>
  );
}

export default function DashboardLayout() {
  return (
    <DashboardShellProvider>
      <DashboardLayoutContent />
    </DashboardShellProvider>
  );
}
