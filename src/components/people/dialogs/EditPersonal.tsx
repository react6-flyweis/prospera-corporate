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
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface EditPersonalProps {
  children: React.ReactNode;
}

const personalSchema = z.object({
  preferredFirstName: z.string().min(0).optional(),
  legalFirstName: z.string().min(1, "Required"),
  middleName: z.string().optional(),
  legalLastName: z.string().min(1, "Required"),
  pronouns: z.string().optional(),
  ssn: z.string().optional(),
  birthday: z.string().optional(),
  personalEmail: z.string().email("Invalid email").optional(),
  recoveryEmail: z.string().email("Invalid email").optional(),
  phone: z.string().optional(),
});

type PersonalForm = z.infer<typeof personalSchema>;

export function EditPersonal({ children }: EditPersonalProps) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<PersonalForm>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      preferredFirstName: "",
      legalFirstName: "",
      middleName: "",
      legalLastName: "",
      pronouns: "",
      ssn: "",
      birthday: "",
      personalEmail: "",
      recoveryEmail: "",
      phone: "",
    },
  });

  function onSubmit(values: PersonalForm) {
    console.log("Save personal info", values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Edit personal information</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-2 space-y-4"
          >
            <FormField
              control={form.control}
              name="preferredFirstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred first name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Preferred first name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="legalFirstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Legal first name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Legal first name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="invisible">Middle</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Middle" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="legalLastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="invisible">
                        Legal last name
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Legal last name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="pronouns"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pronouns</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Pronouns" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ssn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SSN</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="XXX-XX-111" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birthday</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="MM/DD/YYYY" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="personalEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Personal email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="example@gmail.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="recoveryEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recovery email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="recovery@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+1 555 555 5555" />
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

export default EditPersonal;
