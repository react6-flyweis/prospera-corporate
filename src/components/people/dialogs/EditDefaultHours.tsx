import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface EditDefaultHoursProps {
  children: React.ReactNode;
}

const hoursSchema = z.object({
  hours: z.string().optional(),
});

type HoursForm = z.infer<typeof hoursSchema>;

export function EditDefaultHours({ children }: EditDefaultHoursProps) {
  const { t } = useTranslation("people-details");
  const [open, setOpen] = React.useState(false);

  const form = useForm<HoursForm>({
    resolver: zodResolver(hoursSchema),
    defaultValues: { hours: "" },
  });

  function onSubmit(values: HoursForm) {
    console.log("Save default hours", values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {t("dialogs.defaultHoursTitle", "Edit default hours")}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-2 space-y-4"
          >
            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t(
                      "dialogs.defaultHoursLabel",
                      "Default hours per pay period"
                    )}{" "}
                    <span className="text-muted-foreground">
                      ({t("dialogs.optional", "optional")})
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="mt-2 w-full border-2 border-primary rounded-md p-4 h-28"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="justify-end space-x-3">
              <Button
                variant="outline"
                className="rounded border-primary border-2 w-32"
                onClick={() => setOpen(false)}
                type="button"
              >
                {t("dialogs.cancel", "Cancel")}
              </Button>
              <Button
                className="w-32 rounded bg-primary-gradient"
                type="submit"
              >
                {t("dialogs.save", "Save")}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
