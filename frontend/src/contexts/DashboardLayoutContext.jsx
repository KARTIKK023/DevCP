import { createContext, useContext } from "react";

export const defaultDashboardPageConfig = {
  title: "",
  badge: null,
  headerClassName: "",
  controlsClassName: "gap-2 sm:gap-3",
  search: "input",
  bellStyle: "button",
  avatarStyle: "initials",
  avatarInitials: "KC",
  mainClassName:
    "overflow-y-auto flex p-4 sm:p-6 lg:p-8 flex-col flex-1 gap-6 sm:gap-8 min-h-0",
  showAssistant: true,
  assistantVariant: "default",
  assistantPlacement: "inline",
  assistantFooter: "input",
  assistant: null,
  layoutClassName: "",
  contentClassName: "flex flex-col flex-1 min-h-0 overflow-hidden",
};

export const DashboardLayoutContext = createContext(null);

export function useDashboardLayoutContext() {
  const context = useContext(DashboardLayoutContext);

  if (!context) {
    throw new Error(
      "useDashboardLayoutContext must be used within DashboardLayout",
    );
  }

  return context;
}
