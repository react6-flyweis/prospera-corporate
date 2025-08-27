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
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

// base schema without messages so we can derive the TypeScript type
const createFixedContractSchema = (t: TFunction) =>
  z.object({
    entity: z
      .string()
      .min(1, t("createFixedContract.validation.entityRequired")),
    firstName: z
      .string()
      .min(1, t("createFixedContract.validation.firstNameRequired")),
    middleName: z.string().optional(),
    lastName: z
      .string()
      .min(1, t("createFixedContract.validation.lastNameRequired")),
    contractName: z
      .string()
      .min(1, t("createFixedContract.validation.contractNameRequired")),
    taxResidence: z
      .string()
      .min(1, t("createFixedContract.validation.taxResidenceRequired")),
    email: z.string().email(t("createFixedContract.validation.invalidEmail")),
  });

export type FormValues = z.infer<ReturnType<typeof createFixedContractSchema>>;

export default function CreateFixedContract() {
  const { t } = useTranslation("people");

  const fixedContractSchema = createFixedContractSchema(t);
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
    <PageLayout title={t("createFixedContract.title")} withBack>
      <h3 className="text-lg font-semibold mb-4">
        {t("createFixedContract.teamInformation")}
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormItem className="mb-8">
            <FormLabel>{t("createFixedContract.entity")}</FormLabel>
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

          <h3 className="text-lg font-semibold mb-4">
            {t("createFixedContract.personalDetails")}
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormItem>
              <FormLabel>{t("createFixedContract.firstName")}</FormLabel>
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
                {t("createFixedContract.middleName")}{" "}
                <span className="text-xs text-muted-foreground">
                  ({t("createFixedContract.optional")})
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
              <FormLabel>{t("createFixedContract.lastName")}</FormLabel>
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
              <FormLabel>{t("createFixedContract.contractName")}</FormLabel>
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
            <FormLabel>{t("createFixedContract.taxResidenceLabel")}</FormLabel>
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
                      <SelectValue
                        placeholder={t(
                          "createFixedContract.taxResidencePlaceholder"
                        )}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="profile">
                          {t("createFixedContract.taxResidence_profile")}
                        </SelectItem>
                        <SelectItem value="AF">
                          {t("createFixedContract.taxResidence_AF")}
                        </SelectItem>
                        <SelectItem value="CA">
                          {t("createFixedContract.taxResidence_CA")}
                        </SelectItem>
                        <SelectItem value="GB">
                          {t("createFixedContract.taxResidence_GB")}
                        </SelectItem>
                        <SelectItem value="US">
                          {t("createFixedContract.taxResidence_US")}
                        </SelectItem>
                        <SelectItem value="IN">
                          {t("createFixedContract.taxResidence_IN")}
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              )}
            />
            <FormMessage />
          </FormItem>

          <FormItem className="mb-8">
            <FormLabel>{t("createFixedContract.emailLabel")}</FormLabel>
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
              {t("createFixedContract.next")}
            </Button>
          </div>
        </form>
      </Form>
    </PageLayout>
  );
}
