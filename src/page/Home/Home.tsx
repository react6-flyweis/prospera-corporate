import { PageLayout } from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { TriangleIcon, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <PageLayout title="Home">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="font-semibold text-2xl mb-0.5">Good morning</div>
          <div className="text-lg text-neutral-700 mb-2">
            Here's what's going on with your team at Name
          </div>
        </div>
        <Button className="min-w-44 bg-primary-gradient h-10 rounded">
          Continue setup
        </Button>
      </div>
      {/* progress */}
      <div className="mb-2">
        <p className="text-primary">Payroll setup progress</p>
      </div>
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex-1 h-4 bg-gray-300 rounded-full overflow-hidden mr-2">
          <div
            className="h-full bg-primary-gradient"
            style={{ width: "20%" }}
          />
        </div>
        <span className="text-primary font-medium text-sm">10%</span>
      </div>
      {/* Tasks + side panels */}
      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-8">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg">Tasks</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="underline font-bold text-base "
                >
                  <span>Priority</span>
                  <TriangleIcon
                    className="size-2 rotate-180"
                    fill="currentColor"
                  />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-44">
                <DropdownMenuItem className="text-xl">
                  Priority
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xl">
                  Due date
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="space-y-3">
            <div className="border border-gray-500 rounded-md p-4 bg-white shadow-sm">
              <div className="font-semibold">Set up payroll</div>
              <div className="text-sm text-neutral-600 mt-1">
                Complete the steps on the payroll setup timeline to pay the team
                at Name.
              </div>
              <a className="text-sm text-primary mt-2 inline-block">
                Let’s do it ›
              </a>
            </div>

            <div className="border border-gray-500 rounded-md p-4 bg-white shadow-sm">
              <div className="font-semibold">Add team members</div>
              <div className="text-sm text-neutral-600 mt-1">
                Create profiles for the people Name is planning to pay with
                Prospera.
              </div>
              <a className="text-sm text-primary mt-2 inline-block">
                Let’s do it ›
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-4 space-y-3">
          <div className="font-semibold text-lg mb-4">Payments in progress</div>
          <div className="border border-gray-500 rounded-md p-4 bg-white shadow-sm">
            <div className="text-sm text-neutral-600">
              When you start paying your team, you’ll see payments in progress
              here.
            </div>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-lg">Upcoming</div>
              <Button variant="link" className="underline">
                Sync calendar
              </Button>
            </div>
            <div className="mt-3">
              <div className="font-semibold">Payroll</div>
              <div className="text-sm text-neutral-500 font-semibold">
                Bank Holiday
              </div>
              <div className="text-sm text-neutral-500">
                Monday, November 11
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
