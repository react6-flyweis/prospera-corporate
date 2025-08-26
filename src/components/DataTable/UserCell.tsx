import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Link } from "react-router";

export function UserCell({
  id,
  name,
  avatar,
}: {
  id: string;
  name: string;
  avatar: string;
}) {
  return (
    <Link to={`/people/${id}`}>
      <Button variant="link" className="flex items-center gap-2">
        <Avatar>
          <AvatarImage alt={name} src={avatar} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <span className="text-primary underline">{name}</span>
      </Button>
    </Link>
  );
}
