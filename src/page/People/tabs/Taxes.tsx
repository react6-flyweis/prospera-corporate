import { Button } from "@/components/ui/button";
import { EditFederalTax } from "@/components/people/dialogs/EditFederalTax";
import { EditAlabamaTax } from "@/components/people/dialogs/EditAlabamaTax";

import searchIcon from "@/assets/icons/search.png";

export default function Taxes() {
  return (
    <div className="space-y-4">
      <section className="rounded-md border border-gray-500 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">Federal</h3>
          <div>
            <EditFederalTax>
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                Edit
              </Button>
            </EditFederalTax>
          </div>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div>
            <div className="text-sm font-semibold">Filing status</div>
            <div className="mt-1">Single</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Multiple jobs</div>
            <div className="mt-1">Yes</div>
          </div>

          <div>
            <div className="text-sm font-semibold">
              Dependents and other credits
            </div>
            <div className="mt-1">$1.00</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Other income</div>
            <div className="mt-1">$1.00</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Deductions</div>
            <div className="mt-1">$1.00</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Extra withholding</div>
            <div className="mt-1">$1.00</div>
          </div>
        </div>
      </section>

      <section className="rounded-md border border-gray-500 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">Alabama</h3>
          <div>
            <EditAlabamaTax>
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                Edit
              </Button>
            </EditAlabamaTax>
          </div>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div>
            <div className="text-sm font-semibold">Filing Status</div>
            <div className="mt-1">No Personal Exemption</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Number of Dependents</div>
            <div className="mt-1">1</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Additional Withholding</div>
            <div className="mt-1">$1.00</div>
          </div>

          <div>
            <div className="text-sm font-semibold">File new hire report</div>
            <div className="mt-1">Yes</div>
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
                  <th className="py-2">Jurisdiction</th>
                  <th className="py-2">Tax</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="py-8">
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
