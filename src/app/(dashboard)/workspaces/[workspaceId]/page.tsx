import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

const WorkspacesIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <div>WorkspacesIdPage</div>;
};

export default WorkspacesIdPage;
