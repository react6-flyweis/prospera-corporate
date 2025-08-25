import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import employeeImg from "@/assets/images/employee.png";
import contractorImg from "@/assets/images/contractor.png";
import fixedImg from "@/assets/images/fixed-interest-rate.png";
import billingImg from "@/assets/images/billing.png";
import goalsImg from "@/assets/images/goals.png";

type MemberType = {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt?: string;
};

const MEMBER_OPTIONS: MemberType[] = [
  {
    id: "employee",
    title: "Employee",
    description:
      "A person who is employed by an organization for a wage or salary.",
    imgSrc: employeeImg,
    imgAlt: "employee",
  },
  {
    id: "contractor",
    title: "Contractor",
    description:
      "A person who is self-employed and provides services for an organization under a written contract for services.",
    imgSrc: contractorImg,
    imgAlt: "contractor",
  },
];

export default function AddTeamMember() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [selectedContract, setSelectedContract] = useState<string | null>(null);

  const CONTRACT_OPTIONS = [
    {
      id: "fixed",
      title: "Fixed Rate",
      description: "For contracts that have a fixed rate each payment cycle.",
      imgSrc: fixedImg,
    },
    {
      id: "payg",
      title: "Pay As You Go",
      description:
        "For contracts that require time sheets or work submissions each payment cycle.",
      imgSrc: billingImg,
    },
    {
      id: "milestone",
      title: "Milestone",
      description:
        "For contracts with milestones that get paid each time they're completed.",
      imgSrc: goalsImg,
    },
  ];

  return (
    <PageLayout title="Add team member" withBack>
      <div className="grid gap-3">
        {/* Step 1: show member options when nothing is selected */}
        {!selectedMember &&
          MEMBER_OPTIONS.map((m) => (
            <button
              key={m.id}
              className={`flex items-center justify-between w-full rounded-lg border p-4 text-left hover:shadow-sm`}
              type="button"
              aria-label={`Add ${m.title}`}
              onClick={() => {
                setSelectedMember(m.id);
                // clear contract selection when switching away from contractor
                if (m.id !== "contractor") setSelectedContract(null);
              }}
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10  flex items-center justify-center">
                  <img src={m.imgSrc} alt={m.imgAlt ?? m.title} />
                </div>
                <div>
                  <div className="font-medium">{m.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {m.description}
                  </div>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          ))}

        {/* Step 2: after selecting a member, hide options and show the next step */}
        {selectedMember && (
          <div className="grid gap-3">
            {/* If contractor, show contract options as the next step */}
            {selectedMember === "contractor" ? (
              <div className="grid gap-3 pt-2">
                {CONTRACT_OPTIONS.map((c) => {
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedContract(c.id)}
                      className={`flex items-center justify-between w-full rounded-lg border p-4 text-left hover:shadow-sm ${
                        selectedContract === c.id
                          ? "border-primary bg-muted"
                          : ""
                      }`}
                      aria-pressed={selectedContract === c.id}
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 flex items-center justify-center ">
                          <img src={c.imgSrc} alt={c.title} />
                        </div>
                        <div>
                          <div className="font-medium">{c.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {c.description}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </button>
                  );
                })}
              </div>
            ) : (
              /* For employees or other types, show a simple next-step placeholder */
              <div className="rounded-lg border p-4 text-sm text-muted-foreground">
                Continue with the next step for the selected member type.
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
