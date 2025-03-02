import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  image?: string;
  name: string;
  className?: string;
  fallbackClassName?: string;
}

const ProjectAvatar = ({
  name,
  image,
  fallbackClassName,
  className,
}: Props) => {
  if (image) {
    return (
      <div
        className={cn("size-6 relative rounded-md overflow-hidden", className)}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <Avatar className={cn("size-6 rounded-md", className)}>
      <AvatarFallback
        className={cn(
          "text-white rounded-md bg-blue-600 font-semibold text-sm uppercase",
          fallbackClassName
        )}
      >
        {name[0]}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProjectAvatar;
