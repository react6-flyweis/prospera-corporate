import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface EditDirectReportsProps {
  children: React.ReactNode;
  id?: string;
}

export function EditDirectReports({ children, id }: EditDirectReportsProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  function handleSubmit() {
    // TODO: replace with API call when ready
    console.log("Edit direct reports submit id:", id, "value:", value);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit direct reports</DialogTitle>
        </DialogHeader>

        <div className="mt-2">
          <h3 className="text-lg font-semibold">Direct reports</h3>

          <div className="mt-4">
            <Input
              value={value}
              onChange={(e) => setValue((e.target as HTMLInputElement).value)}
              placeholder="Add direct reports"
              className="w-full h-12 rounded-lg border-2 border-primary pl-4"
            />
          </div>
        </div>

        <DialogFooter className="justify-end space-x-3">
          <Button
            variant="outline"
            className="rounded border-primary border-2 w-32"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="w-32 rounded bg-primary-gradient"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
