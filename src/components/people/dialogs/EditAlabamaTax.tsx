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

interface EditAlabamaTaxProps {
  children: React.ReactNode;
}

const alabamaSchema = z.object({
  filingStatus: z.enum([
    "no_personal_exemption",
    "single",
    "married",
    "married_filing_separately",
    "single_head_of_family",
  ]),
  numberOfDependents: z.string().optional(),
  additionalWithholding: z.string().optional(),
  fileNewHireReport: z.enum(["yes", "no"]),
});

type AlabamaForm = z.infer<typeof alabamaSchema>;

export function EditAlabamaTax({ children }: EditAlabamaTaxProps) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<AlabamaForm>({
    resolver: zodResolver(alabamaSchema),
    defaultValues: {
      filingStatus: "no_personal_exemption",
      numberOfDependents: "1",
      additionalWithholding: "",
      fileNewHireReport: "yes",
    },
  });

  function onSubmit(values: AlabamaForm) {
    console.log("Save alabama tax", values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Alabama Taxes</DialogTitle>
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
                  <FormLabel>Filing Status</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="no_personal_exemption">
                            No Personal Exemption
                          </SelectItem>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="married_filing_separately">
                            Married Filing Separately
                          </SelectItem>
                          <SelectItem value="single_head_of_family">
                            Single Head of Family
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
              name="numberOfDependents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Dependents</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="1" className="mt-2 w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalWithholding"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Withholding</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="$1.00"
                      className="mt-2 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fileNewHireReport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File new hire report</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
