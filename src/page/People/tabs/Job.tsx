import { Button } from "@/components/ui/button";
import { EditDepartment } from "@/components/people/EditDepartment";

export default function Job() {
  return (
    <div className="space-y-4">
      <section className="rounded-md border border-gray-500 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">Role</h3>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">Job title</div>
              <div className="mt-1">UI/UX designer</div>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">Department</div>
              <div className="mt-1">Designer</div>
            </div>
            <EditDepartment id="dept-1">
              <Button
                variant="link"
                size="sm"
                className="underline underline-offset-4"
              >
                Edit
              </Button>
            </EditDepartment>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">Work email</div>
              <div className="mt-1">example@gmail.com</div>
            </div>
            <Button
              variant="link"
              size="sm"
              className="underline underline-offset-4"
            >
              Edit
            </Button>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">Manager</div>
              <div className="mt-1">-</div>
            </div>
            <Button
              variant="link"
              size="sm"
              className="underline underline-offset-4"
            >
              Edit
            </Button>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">Direct reports</div>
              <div className="mt-1">-</div>
            </div>
            <Button
              variant="link"
              size="sm"
              className="underline underline-offset-4"
            >
              Edit
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-md border border-gray-500 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">Work</h3>
          <Button
            variant="link"
            size="sm"
            className="underline underline-offset-4"
          >
            Edit
          </Button>
        </div>

        <div className="mt-3 space-y-3 text-sm text-gray-700">
          <div>
            <div className="text-sm font-semibold">Worker type</div>
            <div className="mt-1">Employee</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Country</div>
            <div className="mt-1">United States of America</div>
          </div>

          <div>
            <div className="text-sm font-semibold">Start date</div>
            <div className="mt-1">Aug 15, 2024</div>
          </div>

          <div>
            <Button variant="link" size="sm" className="text-red-600 mt-2">
              Dismiss
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-md border border-gray-500 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">Work address</h3>
        </div>

        <div className="mt-3 space-y-1 text-sm text-gray-700">
          <div className="text-sm font-semibold">Current work address</div>
          <div className="text-xs text-gray-500 flex flex-col">
            <span>87 abc Ln</span>
            <span> Pell City, AL 35125, United States</span>
            <span>+1 98765 43210</span>
          </div>
        </div>
      </section>
    </div>
  );
}
