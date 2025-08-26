import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface EditWorkProps {
  children?: React.ReactNode;
}

export function EditWork({ children }: EditWorkProps) {
  const [open, setOpen] = React.useState(false);
  const [workerType, setWorkerType] = React.useState("Employee");
  const [country, setCountry] = React.useState("United States of America");
  const [startDate, setStartDate] = React.useState("");

  function handleSave() {
    // TODO: persist changes via API or state management
    console.log("Save work", { workerType, country, startDate });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children ?? null}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit work</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div>
            <label className="block text-sm font-medium">Worker type</label>
            <Input
              value={workerType}
              onChange={(e) => setWorkerType(e.target.value)}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Country</label>
            <Input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Start date</label>
            <Input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="MM/DD/YYYY"
              className="w-full mt-2"
            />
          </div>
        </div>

        <DialogFooter className="justify-end space-x-4">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="rounded border-primary border-2 w-32"
          >
            Cancel
          </Button>
          <Button
            className="w-32 rounded bg-primary-gradient"
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
