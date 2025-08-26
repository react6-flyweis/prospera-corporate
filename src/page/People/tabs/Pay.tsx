import { Button } from "@/components/ui/button";
import { EditPaymentMethod } from "@/components/people/dialogs/EditPaymentMethod";
import { EditCompensation } from "@/components/people/dialogs/EditCompensation";
import { EditDefaultHours } from "@/components/people/dialogs/EditDefaultHours";

import searchIcon from "@/assets/icons/search.png";

export default function Pay() {
  return (
    <div className="space-y-4">
      <section className="rounded-md border border-gray-500 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">Payment</h3>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div>
            <div className="text-sm font-semibold">Payment method</div>
            <div className="mt-1 text-gray-500">Direct deposit</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Bank account</div>
            <div className="mt-1">Kalyan Sarkar’s bank account (Savings)</div>
            <div className="text-xs text-gray-500 mt-1">XXXXX2133</div>
          </div>

          <div className="flex justify-end">
            <EditPaymentMethod>
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                Edit
              </Button>
            </EditPaymentMethod>
          </div>
        </div>
      </section>

      <section className="rounded-md border border-gray-500 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">Compensation</h3>
          <EditCompensation>
            <Button
              variant="link"
              size="sm"
              className="underline underline-offset-4"
            >
              Edit
            </Button>
          </EditCompensation>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div>
            <div className="text-sm font-semibold">Type</div>
            <div className="mt-1">Paid by the hour</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Job title</div>
            <div className="mt-1">UI/UX designer</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Wage</div>
            <div className="mt-1">$1.00 per hour</div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Default hours</div>
              <div className="mt-1">-</div>
            </div>

            <EditDefaultHours>
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                Edit
              </Button>
            </EditDefaultHours>
          </div>

          <div>
            <div className="text-sm font-semibold">Effective date</div>
            <div className="mt-1">Nov 8, 2024</div>
          </div>
        </div>
      </section>

      <section className="rounded-md border border-gray-500 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">Recent paystubs</h3>
        </div>

        <div className="mt-3 text-sm text-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs text-gray-500">
                  <th className="py-2">Payday</th>
                  <th className="py-2">Check amount</th>
                  <th className="py-2">Gross pay</th>
                  <th className="py-2">Payment method</th>
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
                        No results found
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
