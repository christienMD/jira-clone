import { Card, CardContent } from "@/components/ui/card";
import { useGetMembers } from "@/features/members/api/useGetMembers";
import { useGetProjects } from "@/features/projects/api/useGetProjects";
import useWorkSpaceId from "@/features/workspaces/hooks/useWorkSpaceId";
import { Loader } from "lucide-react";
import { useGetTask } from "../api/useGetTask";
import EditTaskForm from "./EditTaskForm";

interface Props {
  onCancel: () => void;
  id: string;
}

const EditTaskFormWrapper = ({ onCancel, id }: Props) => {
  const workspaceId = useWorkSpaceId();

  const { data: initialValues, isLoading: isLoadingTask } = useGetTask({
    taskId: id,
  });

  const { data: projects, isLoading: isLoadingProjects } = useGetProjects({
    workspaceId,
  });
  const { data: members, isLoading: isLoadingMembers } = useGetMembers({
    workspaceId,
  });

  const projectOptions = projects?.documents.map((project) => ({
    id: project.$id,
    name: project.name,
    imageUrl: project.imageUrl,
  }));

  const memberOptions = members?.documents.map((project) => ({
    id: project.$id,
    name: project.name,
  }));

  const isLoading = isLoadingMembers || isLoadingProjects || isLoadingTask;

  if (isLoading) {
    return (
      <Card className="w-full h-[714px] border-none shadow-none">
        <CardContent className="flex items-center justify-center h-full">
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  if(!initialValues) {
    return null;
  }
  return (
    <div className="">
      <EditTaskForm
       initialValues={initialValues}
        onCancel={onCancel}
        projectOptions={projectOptions ?? []}
        memberOptions={memberOptions ?? []}
      />
    </div>
  );
};

export default EditTaskFormWrapper;
