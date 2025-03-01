import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface Props {
  workspaceId: string;
}

export const useGetWorkspaceInfo = ({ workspaceId }: Props) => {
  const query = useQuery({
    queryKey: ["workspace-info", workspaceId],
    queryFn: async () => {
      const response = await client.api.workspaces[":workspaceId"]['info'].$get({
        param: { workspaceId },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch workspace info");
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
