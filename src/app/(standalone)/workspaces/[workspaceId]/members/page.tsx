import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import MembersList from "@/features/workspaces/components/MembersList";

const WorkspaceIdMembersPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/");

  return (
    <div className="w-full lg:max-w-xl">
      <MembersList />
    </div>
  );
};

export default WorkspaceIdMembersPage;
