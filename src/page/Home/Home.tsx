import { PageLayout } from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { TriangleIcon, ChevronRight } from "lucide-react";
import { CopyLinkButton } from "@/components/home/CopyLinkButton";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const { t } = useTranslation("home");
  const orgName = "Name";
  const progressPercent = 10;
  return (
    <PageLayout title="Home">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="font-semibold text-2xl mb-0.5">
            {t("home.goodMorning")}
          </div>
          <div className="text-lg text-neutral-700 mb-2">
            {t("home.whatsGoingOn", { name: orgName })}
          </div>
        </div>
        <Button className="min-w-44 bg-primary-gradient h-10 rounded">
          {t("home.continueSetup")}
        </Button>
      </div>
      {/* progress */}
      <div className="mb-2">
        <p className="text-primary">{t("home.payrollProgress")}</p>
      </div>
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex-1 h-4 bg-gray-300 rounded-full overflow-hidden mr-2">
          <div
            className="h-full bg-primary-gradient"
            style={{ width: "20%" }}
          />
        </div>
        <span className="text-primary font-medium text-sm">
          {t("home.progressPercent", { percent: progressPercent })}
        </span>
      </div>
      {/* Tasks + side panels */}
      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-8">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg">{t("home.tasks")}</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="underline font-bold text-base "
                >
                  <span>{t("home.priority")}</span>
                  <TriangleIcon
                    className="size-2 rotate-180"
                    fill="currentColor"
                  />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-44">
                <DropdownMenuItem className="text-xl">
                  {t("home.priority")}
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xl">
                  {t("home.dueDate")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="space-y-3">
            <div className="border border-gray-500 rounded-md p-4 bg-white shadow-sm">
              <div className="font-semibold">{t("home.setUpPayroll")}</div>
              <div className="text-sm text-neutral-600 mt-1">
                {t("home.setUpPayrollDesc", { name: orgName })}
              </div>
              <a className="text-sm text-primary mt-2 inline-block">
                {t("home.letsDoIt")}
              </a>
            </div>

            <div className="border border-gray-500 rounded-md p-4 bg-white shadow-sm">
              <div className="font-semibold">{t("home.addTeamMembers")}</div>
              <div className="text-sm text-neutral-600 mt-1">
                {t("home.addTeamMembersDesc", { name: orgName })}
              </div>
              <a className="text-sm text-primary mt-2 inline-block">
                {t("home.letsDoIt")}
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-4 space-y-3">
          <div className="font-semibold text-lg mb-4">
            {t("home.paymentsInProgress")}
          </div>
          <div className="border border-gray-500 rounded-md p-4 bg-white shadow-sm">
            <div className="text-sm text-neutral-600">
              {t("home.whenYouStartPaying")}
            </div>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-lg">{t("home.upcoming")}</div>
              <Button variant="link" className="underline">
                {t("home.syncCalendar")}
              </Button>
            </div>
            <div className="mt-3">
              <div className="font-semibold">{t("home.payroll")}</div>
              <div className="text-sm text-neutral-500 font-semibold">
                {t("home.bankHoliday")}
              </div>
              <div className="text-sm text-neutral-500">
                {t("home.mondayNov11")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations panel */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-3">
          <div className="font-semibold text-lg">
            {t("home.recommendations")}
          </div>
          <Button variant="link" className="underline font-bold">
            {t("home.viewAll")}
          </Button>
        </div>
        <div className="space-y-3">
          <div className="relative border border-gray-500 rounded-md p-4 bg-white shadow-sm">
            <button className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600">
              ×
            </button>
            <div className="font-semibold">{t("home.harassmentTraining")}</div>
            <div className="text-sm text-neutral-600 mt-1">
              {t("home.harassmentDesc")}
            </div>
            <Button
              variant="link"
              className="text-sm text-primary mt-2 inline-flex items-center"
            >
              <span className="underline">{t("home.learnMore")}</span>
              <ChevronRight className="ml-1" />
            </Button>
          </div>

          <div className="relative border border-gray-500 rounded-md p-4 bg-white shadow-sm">
            <button className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600">
              ×
            </button>
            <div className="font-semibold">{t("home.tellUsSmallBusiness")}</div>
            <div className="text-sm text-neutral-600 mt-1">
              {t("home.impactAwardsDesc")}
            </div>
            <Button
              variant="link"
              className="text-sm text-primary mt-2 inline-flex items-center"
            >
              <span className="underline">{t("home.enterToWin")}</span>
              <ChevronRight className="ml-1" />
            </Button>
          </div>

          <div className="relative border border-gray-500 rounded-md p-4 bg-white shadow-sm">
            <button className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600">
              ×
            </button>
            <div className="font-semibold">{t("home.bankingBorrowing")}</div>
            <div className="text-sm text-neutral-600 mt-1">
              {t("home.bankingBorrowingDesc")}
            </div>
            <Button
              variant="link"
              className="text-sm text-primary mt-2 inline-flex items-center"
            >
              <span className="underline">{t("home.learnMore")}</span>
              <ChevronRight className="ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Reminders  */}
      <div className="mt-4">
        <div className="font-semibold text-lg">{t("home.reminders")}</div>

        <div className="relative border border-gray-500 rounded-md p-3 shadow-sm">
          <button
            className="absolute right-4 mt-1 text-neutral-400 hover:text-neutral-600"
            aria-label="Close reminders"
          >
            ×
          </button>
          <div className="font-semibold">{t("home.referEarnTitle")}</div>
          <div className="text-sm text-neutral-600 mt-1">
            {t("home.referEarnDesc")}
          </div>

          <div className="mt-3 flex items-center space-x-2">
            <input
              className="flex-1 border border-blue-400 rounded px-2 py-1 text-sm bg-white"
              readOnly
              value={"https://prospera.com/r/jkelvin59141d42"}
              onFocus={(e) => (e.currentTarget as HTMLInputElement).select()}
            />
            <CopyLinkButton
              copyText={"https://prospera.com/r/jkelvin59141d42"}
              className="bg-primary-gradient text-white"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
