"use client";

import { RiAddCircleFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetWorkspaces } from "@/features/workspaces/api/useGetWorkspaces";
import WorkspaceAvatar from "@/features/workspaces/components/WorkspaceAvatar";
import useWorkSpaceId from "@/features/workspaces/hooks/useWorkSpaceId";
import useCreateWorkspaceModal from "@/features/workspaces/hooks/useCreateWorkspaceModal";

const WorkspaceSwitcher = () => {
  const workspaceId = useWorkSpaceId();
  const router = useRouter();
  const { open } = useCreateWorkspaceModal();

  const { data: workspaces } = useGetWorkspaces();

  const onSelect = (id: string) => {
    router.push(`/workspaces/${id}`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <RiAddCircleFill onClick={open} className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition" />
      </div>

      <Select onValueChange={onSelect} value={workspaceId}>
        <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
          <SelectValue placeholder="No workspace selected" />
        </SelectTrigger>
        <SelectContent>
          {workspaces?.documents?.map((workspace) => (
            <SelectItem key={workspace.$id} value={workspace.$id}>
              <div className="flex justify-start items-center gap-3 font-medium">
                <WorkspaceAvatar
                  name={workspace.name}
                  image={workspace.imageUrl}
                />
                <span className="truncate">{workspace.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default WorkspaceSwitcher;
