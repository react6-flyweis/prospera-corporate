import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
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
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface EditPaymentMethodProps {
  children: React.ReactNode;
}

const paymentSchema = z.object({
  routing: z.string().min(4, "Routing number is required"),
  account: z.string().min(1, "Account is required"),
  accountType: z.enum(["savings", "checking"]),
  displayName: z.string().min(1, "Display name is required"),
});

type PaymentForm = z.infer<typeof paymentSchema>;

export function EditPaymentMethod({ children }: EditPaymentMethodProps) {
  const { t } = useTranslation("people-details");
  const [open, setOpen] = React.useState(false);

  const form = useForm<PaymentForm>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      routing: "",
      account: "",
      accountType: "savings",
      displayName: "",
    },
  });

  function onSubmit(values: PaymentForm) {
    console.log("Save payment method", values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {t("dialogs.paymentMethodTitle", "Edit payment method")}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-2 space-y-4"
          >
            <FormField
              control={form.control}
              name="routing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("dialogs.routingLabel", "Routing Number")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("dialogs.routingPlaceholder", "044000024")}
                      className="mt-2 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="account"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("dialogs.accountLabel", "Account Number")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("dialogs.accountPlaceholder", "XXXXX123")}
                      className="mt-2 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("dialogs.accountTypeLabel", "Account Type")}
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="savings">
                            {t("dialogs.savings", "Savings")}
                          </SelectItem>
                          <SelectItem value="checking">
                            {t("dialogs.checking", "Checking")}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("dialogs.displayNameLabel", "Display name")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t(
                        "dialogs.displayNamePlaceholder",
                        "Kalyan Sarkar"
                      )}
                      className="mt-2 w-full"
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
