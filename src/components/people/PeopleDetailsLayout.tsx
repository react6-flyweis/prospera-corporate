import { NavLink, Outlet, useParams } from "react-router";
import { PageLayout } from "@/components/layouts/PageLayout";

const TABS = [
  "Job",
  "Pay",
  "Taxes",
  "Personal",
  "Performance",
  "Time Off",
  "Apps",
  "Documents",
  "Benefits",
  "Notes",
];

function TopNav({ id }: { id: string }) {
  return (
    <nav className="flex gap-4 overflow-auto">
      {TABS.map((t) => {
        const to = `/people/${id}/${encodeURIComponent(
          t.toLowerCase().replace(/\s+/g, "-")
        )}`;
        return (
          <NavLink
            key={t}
            to={to}
            className={(nav: any) =>
              `text-sm font-medium p-1 rounded-full ${
                nav?.isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            {t}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default function PeopleDetailsLayout() {
  const { id = "unknown" } = useParams();
  const name = "Kalyan sarkar";

  return (
    <PageLayout title={name} withBack>
      <div className="flex flex-col">
        <TopNav id={String(id)} />
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </PageLayout>
  );
}
