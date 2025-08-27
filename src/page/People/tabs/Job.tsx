import { Button } from "@/components/ui/button";
import { EditDepartment } from "@/components/people/dialogs/EditDepartment";
import { EditEmail } from "@/components/people/dialogs/EditEmail";
import { EditManager } from "@/components/people/dialogs/EditManager";
import { EditDirectReports } from "@/components/people/dialogs/EditDirectReports";
import { EditWork } from "@/components/people/dialogs/EditWork";
import { useTranslation } from "react-i18next";
import { SectionCard } from "@/components/people/SectionCard";

export default function Job() {
  const { t } = useTranslation("people-details");
  return (
    <div className="space-y-4">
      <SectionCard>
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">{t("role")}</h3>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">{t("jobTitle")}</div>
              <div className="mt-1">{t("jobTitleValue")}</div>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">{t("department")}</div>
              <div className="mt-1">{t("departmentValue")}</div>
            </div>
            <EditDepartment id="dept-1">
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                {t("edit")}
              </Button>
            </EditDepartment>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">{t("workEmail")}</div>
              <div className="mt-1">{t("workEmailValue")}</div>
            </div>
            <EditEmail id="email-1">
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                {t("edit")}
              </Button>
            </EditEmail>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">{t("manager")}</div>
              <div className="mt-1">{t("managerValue")}</div>
            </div>
            <EditManager id="manager-1">
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                {t("edit")}
              </Button>
            </EditManager>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">{t("directReports")}</div>
              <div className="mt-1">{t("directReportsValue")}</div>
            </div>
            <EditDirectReports id="direct-1">
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                {t("edit")}
              </Button>
            </EditDirectReports>
          </div>
        </div>
      </SectionCard>

      <SectionCard>
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">{t("work")}</h3>
          <EditWork>
            <Button
              variant="link"
              size="sm"
              className="underline underline-offset-4"
            >
              {t("edit")}
            </Button>
          </EditWork>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div>
            <div className="text-sm font-semibold">{t("workerType")}</div>
            <div className="mt-1">{t("workerTypeValue")}</div>
          </div>

          <div>
            <div className="text-sm font-semibold">{t("country")}</div>
            <div className="mt-1">{t("countryValue")}</div>
          </div>

          <div>
            <div className="text-sm font-semibold">{t("startDate")}</div>
            <div className="mt-1">{t("startDateValue")}</div>
          </div>

          <div>
            <Button variant="link" size="sm" className="text-red-600 mt-2 px-0">
              {t("dismiss")}
            </Button>
          </div>
        </div>
      </SectionCard>

      <SectionCard>
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">{t("workAddress")}</h3>
        </div>

        <div className="mt-3 space-y-1 text-sm text-gray-700">
          <div className="text-sm font-semibold">{t("currentWorkAddress")}</div>
          <div className="text-xs text-gray-500 flex flex-col">
            <span>{t("addressLine1")}</span>
            <span> {t("addressLine2")}</span>
            <span>{t("phone")}</span>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
