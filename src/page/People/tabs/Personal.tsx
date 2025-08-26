import { EditPersonal } from "@/components/people/dialogs/EditPersonal";
import { Button } from "@/components/ui/button";

export default function Personal() {
  return (
    <div>
      <div className="rounded-lg border p-4 bg-white">
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-semibold">Personal information</h3>
          <EditPersonal>
            <Button variant="link" size="sm">
              Edit
            </Button>
          </EditPersonal>
        </div>

        <div className="mt-4 space-y-4 text-sm text-muted-foreground">
          <div>
            <div className="text-xs font-medium">Preferred first name</div>
            <div className="mt-1 text-sm text-foreground">Kalyan</div>
          </div>

          <div>
            <div className="text-xs font-medium">Legal name</div>
            <div className="mt-1 text-sm text-foreground">Kalyan Sarkar</div>
          </div>

          <div>
            <div className="text-xs font-medium">Pronouns</div>
            <div className="mt-1 text-sm text-foreground">-</div>
          </div>

          <div>
            <div className="text-xs font-medium">Prospera employee ID</div>
            <div className="mt-1 text-sm text-foreground">123456789</div>
          </div>

          <div>
            <div className="text-xs font-medium">SSN</div>
            <div className="mt-1 text-sm text-foreground">XXX-XX-111</div>
          </div>

          <div>
            <div className="text-xs font-medium">Birthday</div>
            <div className="mt-1 text-sm text-foreground">Jul 7, 1987</div>
          </div>

          <div>
            <div className="text-xs font-medium">Personal email</div>
            <div className="mt-1 text-sm text-foreground">
              example@gmail.com
            </div>
          </div>

          <div>
            <div className="text-xs font-medium">Recovery email</div>
            <div className="mt-1 text-sm text-foreground">
              example1@gmail.com
            </div>
          </div>

          <div>
            <div className="text-xs font-medium">Phone number</div>
            <div className="mt-1 text-sm text-foreground">+1 98765 43210</div>
          </div>
        </div>
      </div>
    </div>
  );
}
