import { getCurrent } from "@/features/auth/queries";
import UserButton from "@/features/auth/components/user-button";
import CreateWorkSpaceForm from "@/features/workspaces/components/CreateWorkSpaceForm";
import { redirect } from "next/navigation";
import { getWorkspaces } from "./workspaces/queries";

export default async function Home() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const workspaces = await getWorkspaces();
  if (workspaces.total === 0) {
    redirect("/workspaces/create");
  } else {
    redirect(`/workspaces/${workspaces.documents[0].$id}`);
  }
}
