import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { getWorkspace } from "@/features/workspaces/queries";
import EditWorkSpaceForm from "@/features/workspaces/components/EditWorkSpaceForm";

interface Props {
  params: { workspaceId: string };
}

const WorkspaeSettingsPage = async ({ params: { workspaceId } }: Props) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspace({ workspaceId });
  if (!initialValues) {
    redirect(`/workspaces/${workspaceId}`);
  }

  return (
    <div className="w-full lg:max-w-lg">
      <EditWorkSpaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaeSettingsPage;
