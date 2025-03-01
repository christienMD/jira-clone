import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface Props {
  workspaceId: string;
}

export const useGetWorkspace = ({ workspaceId }: Props) => {
  const query = useQuery({
    queryKey: ["workspace", workspaceId],
    queryFn: async () => {
      const response = await client.api.workspaces[":workspaceId"].$get({
        param: { workspaceId },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch workspace ");
      }

      const result = await response.json();

      if ("error" in result) {
        throw new Error(result.error as string);
      }

      return result.data;
    },
  });

  return query;
};
