import { getCurrent } from "@/features/auth/queries";
import EditProjectForm from "@/features/projects/components/EditProjectForm";
import { getProject } from "@/features/projects/queries";
import { redirect } from "next/navigation";


interface Props {
    params: { projectId: string };
  }

const ProjectIdSettingsPage = async({params: {projectId}}:Props) => {
     const user = await getCurrent();
      if (!user) redirect("/sign-in");
    
      const initialValues = await getProject({
        projectId,
      });
    
      if (!initialValues) {
        throw new Error("Project not found");
      }


  return (
    <div className="w-full lg:max-w-lg">
    <EditProjectForm initialValues={initialValues} />
  </div>
  )
}

export default ProjectIdSettingsPage