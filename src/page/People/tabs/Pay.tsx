import { Button } from "@/components/ui/button";
import { EditPaymentMethod } from "@/components/people/dialogs/EditPaymentMethod";
import { EditCompensation } from "@/components/people/dialogs/EditCompensation";
import { EditDefaultHours } from "@/components/people/dialogs/EditDefaultHours";

import searchIcon from "@/assets/icons/search.png";
import { SectionCard } from "@/components/people/SectionCard";
import { useTranslation } from "react-i18next";

export default function Pay() {
  const { t } = useTranslation("people-details");
  return (
    <div className="space-y-4">
      <SectionCard>
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">{t("pay.payment")}</h3>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div>
            <div className="text-sm font-semibold">Payment method</div>
            <div className="mt-1 text-gray-500">{t("pay.directDeposit")}</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Bank account</div>
            <div className="mt-1">{t("pay.bankAccountValue")}</div>
            <div className="text-xs text-gray-500 mt-1">
              {t("pay.accountMask")}
            </div>
          </div>

          <div className="flex justify-end">
            <EditPaymentMethod>
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                {t("edit")}
              </Button>
            </EditPaymentMethod>
          </div>
        </div>
      </SectionCard>

      <SectionCard>
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">{t("pay.compensation")}</h3>
          <EditCompensation>
            <Button
              variant="link"
              size="sm"
              className="underline underline-offset-4"
            >
              {t("edit")}
            </Button>
          </EditCompensation>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div>
            <div className="text-sm font-semibold">{t("pay.type")}</div>
            <div className="mt-1">{t("pay.paidByHour")}</div>
          </div>

          <div>
            <div className="text-sm font-semibold">{t("jobTitle")}</div>
            <div className="mt-1">{t("jobTitleValue")}</div>
          </div>

          <div>
            <div className="text-sm font-semibold">{t("pay.wage")}</div>
            <div className="mt-1">
              {t("pay.wageValue", { defaultValue: "$1.00 per hour" })}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">
                {t("pay.defaultHours")}
              </div>
              <div className="mt-1">-</div>
            </div>

            <EditDefaultHours>
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                {t("edit")}
              </Button>
            </EditDefaultHours>
          </div>

          <div>
            <div className="text-sm font-semibold">
              {t("pay.effectiveDate")}
            </div>
            <div className="mt-1">
              {t("pay.effectiveDateValue", { defaultValue: "Nov 8, 2024" })}
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard>
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">{t("pay.recentPaystubs")}</h3>
        </div>

        <div className="mt-3 text-sm text-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs text-gray-500">
                  <th className="py-2">{t("pay.payday")}</th>
                  <th className="py-2">{t("pay.checkAmount")}</th>
                  <th className="py-2">{t("pay.grossPay")}</th>
                  <th className="py-2">{t("pay.paymentMethodHeader")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="py-8">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={searchIcon}
                        alt="no results"
                        className="w-8 h-8 opacity-60"
                      />
                      <div className="mt-3 text-sm text-gray-600">
                        {t("pay.noResults")}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
