import { PageLayout } from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center justify-between mb-1">
        <div className="flex-1 h-4 bg-gray-300 rounded-full overflow-hidden mr-2">
          <div
            className="h-full bg-primary-gradient"
            style={{ width: "20%" }}
          />
        </div>
        <span className="text-primary font-medium text-sm">10%</span>
      </div>
    </PageLayout>
  );
}
