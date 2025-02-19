import { useParams } from "next/navigation";

const useWorkSpaceId = () => {
  const params = useParams();

  return params.workspaceId as string;
};

export default useWorkSpaceId;
