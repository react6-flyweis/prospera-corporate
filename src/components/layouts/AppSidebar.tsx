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
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export type SidebarItem = {
  titleKey: string;
  icon: string;
  url: To;
  items?: { itemKey: string; url: To }[];
};

export type AppSidebarProps = React.ComponentProps<typeof Sidebar>;

const navigationItems: SidebarItem[] = [
  { titleKey: "sidebar.home", icon: "home.svg", url: "/" },
  {
    titleKey: "sidebar.people.title",
    icon: "people.svg",
    url: "/people",
    items: [
      { itemKey: "sidebar.people.teamMember", url: "/people" },
      { itemKey: "sidebar.people.orgChat", url: "/people/org-chat" },
      { itemKey: "sidebar.people.hiringTool", url: "/people/hiring-tool" },
    ],
  },
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
  const { t } = useTranslation("common");
  // Submenu state is handled by the shadcn DropdownMenu primitives.

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
              {item.items && item.items.length > 0 ? (
                <Collapsible key={item.titleKey} asChild defaultOpen={false}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      {state === "collapsed" ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <SidebarMenuButton
                              className={cn(
                                "m-0! transition-all duration-300 ease-in-out",
                                "justify-center rounded-md text-white"
                              )}
                              isActive={false}
                              size="lg"
                            >
                              <img
                                alt={t(item.titleKey)}
                                className="max-h-5 max-w-5 flex-shrink-0 transition-all duration-300"
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
                            "m-0! rounded transition-all duration-300 ease-in-out hover:bg-[#509CDB] data-[active=true]:bg-[#509CDB]",
                            "pl-5 flex-1 text-left"
                          )}
                          isActive={false}
                          size="lg"
                        >
                          <img
                            alt={t(item.titleKey)}
                            className="max-h-5 max-w-5 flex-shrink-0 transition-all duration-300"
                            src={`/icons/${item.icon}`}
                          />
                          <span className="text-white">{t(item.titleKey)}</span>
                          <ChevronRight className="text-white ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      )}
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((sub) => (
                          <SidebarMenuSubItem key={sub.itemKey}>
                            <NavLink to={sub.url} end className="block w-full">
                              {({ isActive }) => (
                                <SidebarMenuSubButton
                                  className="text-white"
                                  isActive={isActive}
                                >
                                  <span>{t(sub.itemKey)}</span>
                                </SidebarMenuSubButton>
                              )}
                            </NavLink>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <NavLink className="flex" to={item.url}>
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
                                className="max-h-5 max-w-5 flex-shrink-0 transition-all duration-300"
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
                            "m-0! rounded transition-all duration-300 ease-in-out hover:bg-[#509CDB] data-[active=true]:bg-[#509CDB]",
                            "pl-5 "
                          )}
                          isActive={isActive}
                          size="lg"
                        >
                          <img
                            alt={t(item.titleKey)}
                            className="max-h-5 max-w-5 flex-shrink-0 transition-all duration-300"
                            src={`/icons/${item.icon}`}
                          />
                          <span className="text-white">{t(item.titleKey)}</span>
                        </SidebarMenuButton>
                      )}
                    </>
                  )}
                </NavLink>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
