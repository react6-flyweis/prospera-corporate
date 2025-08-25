import { InfoIcon, RefreshCwIcon, SearchIcon } from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { DataTable, type DataTableRef } from "@/components/DataTable";
import { PageLayout } from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  getPeopleColumns,
  type People,
} from "@/components/people/peopleColumns";
import peoplesData from "@/components/people/peoplesData";
import { Segmented } from "@/components/ui/segmented";

export default function People() {
  const { t } = useTranslation("people");
  const [search, setSearch] = useState("");
  const tableRef = useRef<DataTableRef<People>>(null);

  const peopleColumns = getPeopleColumns(t);

  // status filter state: 'active' | 'onboarding' | 'offboarding' | 'dismissed' | 'all'
  const [statusFilter, setStatusFilter] = useState<string>("active");

  const handleRefresh = () => {
    // TODO: implement refresh logic
  };

  // Live search: update global filter as user types
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (tableRef.current) {
      tableRef.current.getColumn("name")?.setFilterValue(value);
    }
  };

  return (
    <PageLayout title={t("title")}>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button onClick={handleRefresh} size="icon" variant="ghost">
            <RefreshCwIcon className="size-7 text-primary" />
          </Button>
          <div className="relative">
            <span className="-translate-y-1/2 absolute top-1/2 left-2 text-muted-foreground">
              <SearchIcon className="h-4 w-4" />
            </span>
            <Input
              className="h-9 w-64 rounded pl-8"
              onChange={handleSearchChange}
              placeholder={t("searchPlaceholder")}
              value={search}
            />
          </div>
        </div>
        <Button
          className="flex h-9 items-center gap-2 rounded bg-primary-gradient"
          variant="default"
        >
          <InfoIcon className="h-5 w-5" />
          {t("addTeamMemberButton")}
        </Button>
      </div>

      <div className="my-4">
        <Segmented
          value={statusFilter}
          onChange={setStatusFilter}
          items={[
            { value: "active", label: t("active") },
            { value: "onboarding", label: t("onboarding") },
            { value: "offboarding", label: t("offboarding") },
            { value: "dismissed", label: t("dismissed") },
          ]}
        />
      </div>

      <DataTable
        columns={peopleColumns}
        data={peoplesData}
        pageSize={6}
        ref={tableRef}
        showPagination
      />
    </PageLayout>
  );
}
