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

interface CreateDepartmentProps {
  children?: React.ReactNode;
}

export function CreateDepartment({ children }: CreateDepartmentProps) {
  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);

  function handleSave() {
    // TODO: hook up save logic (API call or state update)
    console.log("Create department:", name);
    // close dialog for now
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children ?? null}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create department</DialogTitle>
        </DialogHeader>

        <div className="mt-2">
          <label className="block text-sm font-medium">Name</label>
          <div className="mt-2">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter department name"
              className="w-full"
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

export default CreateDepartment;
