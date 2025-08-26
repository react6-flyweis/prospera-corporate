import type { ColumnDef, Row } from "@tanstack/react-table";
import type { TFunction } from "i18next";
import { UserCell } from "../DataTable/UserCell";
import { ColumnHeader } from "../DataTable/ColumnHeader";

export type People = {
  employeeId: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    mobile: string;
  };
  department: string;
  jobTitle: string;
  employmentType: string;
  createdAt: string;
};

export const getPeopleColumns = (t: TFunction): ColumnDef<People>[] => [
  {
    header: (ctx) => <ColumnHeader {...ctx} title={t("columns.employeeId")} />,
    accessorKey: "employeeId",
  },
  {
    header: (ctx) => <ColumnHeader {...ctx} title={t("columns.name")} />,
    accessorKey: "name",
    cell: (props: { row: Row<People> }) => (
      <UserCell
        id={props.row.original.user.id}
        avatar={props.row.original.user.avatar}
        name={props.row.original.user.name}
      />
    ),
    filterFn: (row, _columnId, value) => {
      const searchValue = String(value ?? "").toLowerCase();
      const name = row.original.user.name?.toLowerCase() || "";
      return name.includes(searchValue);
    },
  },
  {
    header: (ctx) => <ColumnHeader {...ctx} title={t("columns.department")} />,
    accessorKey: "department",
    cell: (props: { row: Row<People> }) => (
      <span>{props.row.original.department}</span>
    ),
    filterFn: (row, _columnId, value) => {
      const searchValue = String(value ?? "").toLowerCase();
      const department = row.original.department?.toLowerCase() || "";
      return department.includes(searchValue);
    },
  },
  {
    header: (ctx) => <ColumnHeader {...ctx} title={t("columns.jobTitle")} />,
    accessorKey: "jobTitle",
    cell: (props: { row: Row<People> }) => (
      <span>{props.row.original.jobTitle}</span>
    ),
    filterFn: (row, _columnId, value) => {
      const searchValue = String(value ?? "").toLowerCase();
      const jobTitle = row.original.jobTitle?.toLowerCase() || "";
      return jobTitle.includes(searchValue);
    },
  },
  {
    header: (ctx) => (
      <ColumnHeader {...ctx} title={t("columns.employmentType")} />
    ),
    accessorKey: "employmentType",
    cell: (props: { row: Row<People> }) => (
      <span>{props.row.original.employmentType}</span>
    ),
    filterFn: (row, _columnId, value) => {
      const searchValue = String(value ?? "").toLowerCase();
      const type = row.original.employmentType?.toLowerCase() || "";
      return type.includes(searchValue);
    },
  },
];
