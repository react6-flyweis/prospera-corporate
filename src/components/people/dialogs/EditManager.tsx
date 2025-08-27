import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface EditManagerProps {
  children: React.ReactNode;
  id?: string;
}

export function EditManager({ children, id }: EditManagerProps) {
  const { t } = useTranslation("people-details");
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  function handleSubmit() {
    // TODO: replace with API call when ready
    console.log("Edit manager submit id:", id, "query:", query);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("dialogs.editManagerTitle")}</DialogTitle>
        </DialogHeader>

        <div className="mt-2">
          <h3 className="text-lg font-semibold">
            {t("dialogs.managerHeading")}
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            {t("dialogs.managerDescription")}
          </p>

          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("dialogs.findManagerPlaceholder") as string}
                className="w-full pl-10 pr-3 border-2 h-10 border-primary rounded-md bg-transparent"
              />
            </div>
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
