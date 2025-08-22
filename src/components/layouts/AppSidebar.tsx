import { useTranslation } from "react-i18next";
import { NavLink, type To } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import logoColor from "@/assets/icons/logo-color.svg";

export type SidebarItem = {
  titleKey: string;
  icon: string;
  url: To;
};

export type AppSidebarProps = React.ComponentProps<typeof Sidebar>;

const navigationItems: SidebarItem[] = [
  { titleKey: "sidebar.home", icon: "home.svg", url: "/" },
  { titleKey: "sidebar.people", icon: "people.svg", url: "/people" },
  { titleKey: "sidebar.pay", icon: "pay.svg", url: "/pay" },
  {
    titleKey: "sidebar.timeAttendance",
    icon: "time-attendance.svg",
    url: "/time-attendance",
  },
  { titleKey: "sidebar.training", icon: "traning.svg", url: "/training" },
  {
    titleKey: "sidebar.performance",
    icon: "performance.svg",
    url: "/performance",
  },
  {
    titleKey: "sidebar.communication",
    icon: "communication.svg",
    url: "/communication",
  },
  { titleKey: "sidebar.analytics", icon: "reports.svg", url: "/analytics" },
  { titleKey: "sidebar.benefits", icon: "app-directory.svg", url: "/benefits" },
  {
    titleKey: "sidebar.taxesCompliance",
    icon: "taxes.svg",
    url: "/taxes-compliance",
  },
  { titleKey: "sidebar.documents", icon: "documents.svg", url: "/documents" },
  { titleKey: "sidebar.reports", icon: "reports.svg", url: "/reports" },
  { titleKey: "sidebar.learning", icon: "learning.svg", url: "/learning" },
  {
    titleKey: "sidebar.taxIncentives",
    icon: "taxes.svg",
    url: "/tax-incentives",
  },
  {
    titleKey: "sidebar.appDirectory",
    icon: "app-directory.svg",
    url: "/app-directory",
  },
  { titleKey: "sidebar.referEarn", icon: "refer-earn.svg", url: "/refer-earn" },
  { titleKey: "sidebar.upgrade", icon: "upgrade.svg", url: "/upgrade" },
  { titleKey: "sidebar.help", icon: "help.svg", url: "/help" },
  { titleKey: "sidebar.settings", icon: "settings.svg", url: "/settings" },
  { titleKey: "sidebar.signOut", icon: "signout.svg", url: "/sign-out" },
];

export function AppSidebar({ ...props }: AppSidebarProps) {
  const { state } = useSidebar();
  const { t } = useTranslation();

  return (
    <Sidebar {...props} className="font-kumbh">
      <SidebarHeader>
        <div className="flex items-center justify-center">
          {state === "collapsed" ? (
            <SidebarTrigger className="size-8 text-white" />
          ) : (
            <img
              alt="logo"
              className="my-2 max-h-20 max-w-20"
              src={logoColor}
            />
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarMenu className="gap-0">
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.titleKey}>
              <NavLink
                className={cn(
                  "flex",
                  state === "collapsed" && "justify-center p-0"
                )}
                end
                to={item.url}
              >
                {({ isActive }) => (
                  <>
                    {state === "collapsed" ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            className={cn(
                              "m-0! transition-all duration-300 ease-in-out",
                              "justify-center rounded-md text-white"
                            )}
                            isActive={isActive}
                            size="lg"
                          >
                            <img
                              alt={t(item.titleKey)}
                              className="max-h-4 max-w-4 flex-shrink-0 transition-all duration-300"
                              src={`/icons/${item.icon}`}
                            />
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          {t(item.titleKey)}
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <SidebarMenuButton
                        className={cn(
                          "m-0! rounded transition-all duration-300 ease-in-out data-[active=true]:bg-[#509CDB]",
                          "pl-5 "
                        )}
                        isActive={isActive}
                        size="lg"
                      >
                        <img
                          alt={t(item.titleKey)}
                          className="max-h-4 max-w-4 flex-shrink-0 transition-all duration-300"
                          src={`/icons/${item.icon}`}
                        />
                        <span className="text-white">{t(item.titleKey)}</span>
                      </SidebarMenuButton>
                    )}
                  </>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
