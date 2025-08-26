import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

interface EditFederalTaxProps {
  children: React.ReactNode;
}

const federalSchema = z.object({
  filingStatus: z.enum([
    "single",
    "married_separate",
    "married_joint",
    "head_of_household",
    "exempt",
  ]),
  multipleJobs: z.string().optional(),
  dependents: z.string().optional(),
  otherIncome: z.string().optional(),
});

type FederalForm = z.infer<typeof federalSchema>;

export function EditFederalTax({ children }: EditFederalTaxProps) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<FederalForm>({
    resolver: zodResolver(federalSchema),
    defaultValues: {
      filingStatus: "single",
      multipleJobs: "",
      dependents: "",
      otherIncome: "",
    },
  });

  function onSubmit(values: FederalForm) {
    console.log("Save federal tax", values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Federal tax withholdings</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-2 space-y-4"
          >
            <FormField
              control={form.control}
              name="filingStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Federal filing status (1c) (required)</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="single">
                            Single or married filing separately
                          </SelectItem>
                          <SelectItem value="married_joint">
                            Married filing jointly
                          </SelectItem>
                          <SelectItem value="head_of_household">
                            Head of household
                          </SelectItem>
                          <SelectItem value="exempt">
                            Exempt from withholding
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
              name="multipleJobs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Multiple jobs (2c) (optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Household has only 2 jobs total"
                      className="mt-2 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dependents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Dependents and other credits total (3) (if applicable)
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="$1"
                      className="mt-2 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="otherIncome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other income (4a) (optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="$1"
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
                Cancel
              </Button>
              <Button
                className="w-32 rounded bg-primary-gradient"
                type="submit"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
