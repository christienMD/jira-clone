import { useParams } from "next/navigation";

const useWorkSpaceId = () => {
  const params = useParams();

  return params.useWorkSpaceId as string;
};

export default useWorkSpaceId;
