import { NextPage } from "next";
import type { ReactElement } from "react";
import MainLayout from "../layouts/main";
import DashboardLayout from "../layouts/dashboard";

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

export type PageWithDashboardLayoutType = NextPage & {
  layout: typeof DashboardLayout;
};

export type PageWithLayoutType =
  | PageWithMainLayoutType
  | PageWithDashboardLayoutType;

export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

export default PageWithLayoutType;
