import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";
import React from "react";
import { PlusCircleIcon } from "lucide-react";
import CreateDepartment from "./CreateDepartment";

interface EditDepartmentProps {
  children: React.ReactNode;
  id?: string;
}

export function EditDepartment({ children, id }: EditDepartmentProps) {
  const [open, setOpen] = React.useState(false);

  function handleSubmit() {
    // TODO: replace with API call when ready
    console.log("Edit department submit id:", id);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit department</DialogTitle>
        </DialogHeader>

        <div className="mt-2">
          <label className="block text-sm font-medium">Department</label>
          <div className="mt-2">
            <Select defaultValue="designer">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select department..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4">
            <CreateDepartment>
              <Button variant="link">
                <PlusCircleIcon className="h-5 w-5" />
                Create department
              </Button>
            </CreateDepartment>
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
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
