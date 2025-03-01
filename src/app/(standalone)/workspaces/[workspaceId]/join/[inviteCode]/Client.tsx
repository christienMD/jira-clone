"use client";

import PageError from "@/components/PageError";
import PageLoader from "@/components/PageLoader";
import { useGetWorkspaceInfo } from "@/features/workspaces/api/useGetWorkspaceInfo";
import JoinWorkspaceForm from "@/features/workspaces/components/JoinWorkspaceForm";
import useWorkSpaceId from "@/features/workspaces/hooks/useWorkSpaceId";

const WorkspaceIdJoinClient = () => {
  const workspaceId = useWorkSpaceId();
  const { data: initialValues, isLoading } = useGetWorkspaceInfo({
    workspaceId,
  });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Workspace info not found" />;
  }

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdJoinClient;
