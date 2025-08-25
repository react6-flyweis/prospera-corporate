import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export function UserCell({ name, avatar }: { name: string; avatar: string }) {
  return (
    <Button variant="link" className="flex items-center gap-2">
      {/* link to user profile */}
      <Avatar>
        <AvatarImage alt={name} src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <span className="text-primary underline">{name}</span>
    </Button>
  );
}
