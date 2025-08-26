import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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

interface EditDepartmentProps {
  id: string;
  children: React.ReactNode;
}

export function EditDepartment({ id, children }: EditDepartmentProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit department</DialogTitle>
          <DialogDescription>Change department for id: {id}</DialogDescription>
        </DialogHeader>

        <div className="mt-2">
          <label className="block text-sm font-medium">Department</label>
          <div className="mt-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select department..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button className="w-32 rounded bg-primary-gradient">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
