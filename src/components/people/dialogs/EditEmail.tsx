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
import React, { useState } from "react";

interface EditEmailProps {
  children: React.ReactNode;
  id?: string;
}

export function EditEmail({ children, id: _id }: EditEmailProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("example@gmail.com");

  function onSave() {
    // TODO: wire up save handler (API / state) — for now just close
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Work email</DialogTitle>
        </DialogHeader>

        <div className="mt-2">
          <label className="block text-sm font-medium">Email</label>
          <div className="mt-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-lg font-semibold"
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
          <Button className="w-32 rounded bg-primary-gradient" onClick={onSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
