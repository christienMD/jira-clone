"use client";

import PageError from "@/components/PageError";
import PageLoader from "@/components/PageLoader";

import { useGetWorkspace } from "@/features/workspaces/api/useGetWorkspace";
import EditWorkSpaceForm from "@/features/workspaces/components/EditWorkSpaceForm";
import useWorkSpaceId from "@/features/workspaces/hooks/useWorkSpaceId";

const WorkspaceIdSettingsClient = () => {
  const workspaceId = useWorkSpaceId();
  const { data: initialValues, isLoading } = useGetWorkspace({ workspaceId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Workspace not found" />;
  }

  return (
    <div className="w-full lg:max-w-lg">
      <EditWorkSpaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsClient;
