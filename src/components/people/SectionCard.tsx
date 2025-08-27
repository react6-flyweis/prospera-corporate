import type { PropsWithChildren } from "react";

export function SectionCard({ children }: PropsWithChildren) {
  return (
    <section className="rounded-md border border-gray-500 shadow-sm p-4">
      {children}
    </section>
  );
}
