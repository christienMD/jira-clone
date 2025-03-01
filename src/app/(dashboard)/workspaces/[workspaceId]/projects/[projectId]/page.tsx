import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import ProjectIdClient from "./Client";


const ProjectIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  

  return <ProjectIdClient />;
};

export default ProjectIdPage;
