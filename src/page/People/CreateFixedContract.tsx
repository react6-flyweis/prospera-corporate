import { PageLayout } from "@/components/layouts/PageLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";

type FormValues = z.infer<typeof fixedContractSchema>;

const fixedContractSchema = z.object({
  entity: z.string().min(1, "Entity is required"),
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  contractName: z.string().min(1, "Contract name is required"),
  taxResidence: z.string().min(1, "Please select a country"),
  email: z.string().email("Invalid email address"),
});

export default function CreateFixedContract() {
  const form = useForm<FormValues>({
    resolver: zodResolver(fixedContractSchema),
    defaultValues: {
      entity: "",
      firstName: "",
      middleName: "",
      lastName: "",
      contractName: "",
      taxResidence: "",
      email: "",
    },
  });

  function onSubmit(values: FormValues) {
    // TODO: send values to API
    // eslint-disable-next-line no-console
    console.log("submit", values);
  }

  return (
    <PageLayout title="Create fixed contract" withBack>
      <h3 className="text-lg font-semibold mb-4">Team Information</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormItem className="mb-8">
            <FormLabel>Entity</FormLabel>
            <FormField
              control={form.control}
              name="entity"
              render={({ field }) => (
                <FormControl>
                  <Input {...field} placeholder="Abc Group Inc" />
                </FormControl>
              )}
            />
            <FormMessage />
          </FormItem>

          <h3 className="text-lg font-semibold mb-4">Personal Details</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                )}
              />
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>
                Middle Name{" "}
                <span className="text-xs text-muted-foreground">
                  (optional)
                </span>
              </FormLabel>
              <FormField
                control={form.control}
                name="middleName"
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                )}
              />
              <FormMessage />
            </FormItem>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                )}
              />
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Contract Name</FormLabel>
              <FormField
                control={form.control}
                name="contractName"
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                )}
              />
              <FormMessage />
            </FormItem>
          </div>

          <FormItem className="mb-4">
            <FormLabel>Contractor's Tax Residence</FormLabel>
            <FormField
              control={form.control}
              name="taxResidence"
              render={({ field }) => (
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select country..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="profile">
                          Use the information from contractor's profile
                        </SelectItem>
                        <SelectItem value="AF">Africa</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="GB">United Kingdom</SelectItem>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="IN">India</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              )}
            />
            <FormMessage />
          </FormItem>

          <FormItem className="mb-8">
            <FormLabel>Contractor's Email Address</FormLabel>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
              )}
            />
            <FormMessage />
          </FormItem>

          <div className="flex justify-center">
            <Button
              className="w-48 rounded-full bg-primary-gradient"
              size="lg"
              type="submit"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </PageLayout>
  );
}
