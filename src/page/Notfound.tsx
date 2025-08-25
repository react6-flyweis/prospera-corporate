import { useTranslation } from "react-i18next";
import { PageLayout } from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { useGoBack } from "@/hooks/go-back";

export default function NotFoundPage() {
  const { t } = useTranslation("common");
  const goBack = useGoBack();

  return (
    <PageLayout
      className="flex h-screen flex-col items-center justify-center text-center"
      title={t("notFoundPage.title")}
    >
      <h1 className="mb-4 font-bold text-6xl text-primary">404</h1>
      <h2 className="mb-2 font-semibold text-2xl text-gray-800">
        {t("notFoundPage.pageNotFound")}
      </h2>
      <p className="mb-6 text-muted-foreground">{t("notFoundPage.message")}</p>
      <Button
        className="min-w-44 bg-primary-gradient"
        onClick={goBack}
        size="lg"
      >
        {t("notFoundPage.goBackButton")}
      </Button>
    </PageLayout>
  );
}
