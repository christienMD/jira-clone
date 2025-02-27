import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface Props {
  workspaceId: string;
  projectId?: string | null;
  status?: string | null;
  assigneeId?: string | null;
  dueDate?: string | null
}

export const useGetTasks = ({
   workspaceId ,
   assigneeId,
   dueDate,
   projectId, 
   status
  }: Props) => {
  const query = useQuery({
    queryKey: ["tasks", workspaceId],
    queryFn: async () => {
      const response = await client.api.tasks.$get({
        query: { workspaceId },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
