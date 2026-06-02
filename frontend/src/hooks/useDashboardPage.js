import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  defaultDashboardPageConfig,
  useDashboardLayoutContext,
} from "@/contexts/DashboardLayoutContext";

export function useDashboardPage(config) {
  const { setPageConfig } = useDashboardLayoutContext();
  const location = useLocation();
  const configRef = useRef(config);

  // The dashboard pages pass JSX in this config; the ref keeps route updates stable.
  // eslint-disable-next-line react-hooks/refs
  configRef.current = config;

  useLayoutEffect(() => {
    setPageConfig({ ...defaultDashboardPageConfig, ...configRef.current });

    return () => {
      setPageConfig(defaultDashboardPageConfig);
    };
  }, [setPageConfig, location.pathname]);
}
