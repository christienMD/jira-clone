import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLinkIcon, PencilIcon, TrashIcon } from "lucide-react";

interface Props {
  id: string;
  projectId: string;
  children: React.ReactNode;
}

const TaskActions = ({ id, projectId, children }: Props) => {
  return (
    <div className="flex justify-end">
      <DropdownMenu modal={false} >
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            onClick={() => {}}
            disabled={false}
            className="p-[10px] font-medium"
          >
            <ExternalLinkIcon className="size-4 mr-2 stroke" />
            Task Details
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {}}
            disabled={false}
            className="p-[10px] font-medium"
          >
            <ExternalLinkIcon className="size-4 mr-2 stroke" />
            Open Project
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {}}
            disabled={false}
            className="p-[10px] font-medium"
          >
            <PencilIcon className="size-4 mr-2 stroke" />
            Edit Task
          </DropdownMenuItem>
         
          <DropdownMenuItem
            onClick={() => {}}
            disabled={false}
            className="p-[10px] font-medium text-amber-700 focus:text-amber-700"
          >
            <TrashIcon className="size-4 mr-2 stroke" />
            Delete Task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TaskActions;
