import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("people-details");
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
          <DialogTitle>{t("dialogs.editDirectReportsTitle")}</DialogTitle>
        </DialogHeader>

        <div className="mt-2">
          <h3 className="text-lg font-semibold">
            {t("dialogs.directReportsHeading")}
          </h3>

          <div className="mt-4">
            <Input
              value={value}
              onChange={(e) => setValue((e.target as HTMLInputElement).value)}
              placeholder={t("dialogs.addDirectReportsPlaceholder") as string}
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
            {t("dialogs.cancel")}
          </Button>
          <Button
            className="w-32 rounded bg-primary-gradient"
            onClick={handleSubmit}
          >
            {t("dialogs.save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
