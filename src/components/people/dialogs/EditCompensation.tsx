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

interface EditCompensationProps {
  children: React.ReactNode;
}

const compensationSchema = z.object({
  employeeType: z.enum(["hourly", "salary"]),
  department: z.enum(["designer", "sales"]),
  wage: z.string().min(1, "Wage is required"),
  reason: z.string().optional(),
});

type CompensationForm = z.infer<typeof compensationSchema>;

export function EditCompensation({ children }: EditCompensationProps) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<CompensationForm>({
    resolver: zodResolver(compensationSchema),
    defaultValues: {
      employeeType: "hourly",
      department: "designer",
      wage: "",
      reason: "",
    },
  });

  function onSubmit(values: CompensationForm) {
    console.log("Save compensation", values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit compensation</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-2 space-y-4"
          >
            <div>
              <FormLabel className="block text-sm font-medium">
                Employee type
              </FormLabel>
              <p className="text-sm text-gray-500">
                Employees are classified based on their compensation and type of
                work.
              </p>

              <FormField
                control={form.control}
                name="employeeType"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="hourly">
                              Paid by the hour
                            </SelectItem>
                            <SelectItem value="salary">Salary</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
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
              name="wage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wage amount</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="$ 80.00"
                      className="mt-2 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason to change</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      className="mt-2 w-full rounded-md border border-primary p-3 h-24"
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
