import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DashboardShellContext = createContext(null);

export function DashboardShellProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((open) => !open);
  }, []);

  useEffect(() => {
    void Promise.resolve().then(closeSidebar);
  }, [location.pathname, closeSidebar]);

  useEffect(() => {
    if (!sidebarOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [sidebarOpen]);

  return (
    <DashboardShellContext.Provider
      value={{ sidebarOpen, setSidebarOpen, closeSidebar, toggleSidebar }}
    >
      {children}
    </DashboardShellContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDashboardShell() {
  const context = useContext(DashboardShellContext);

  if (!context) {
    throw new Error("useDashboardShell must be used within DashboardShellProvider");
  }

  return context;
}
