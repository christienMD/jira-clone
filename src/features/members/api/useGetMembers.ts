import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { InferResponseType } from "hono";

interface Props {
  workspaceId: string;
}

type MembersResponse = InferResponseType<
  typeof client.api.members["$get"]
>;

export const useGetMembers = ({ workspaceId }: Props) => {
  const query = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const response = await client.api.members.$get({
        query: { workspaceId },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }

      const result = await response.json() as MembersResponse;
      
      if ('error' in result) {
        throw new Error(result.error);
      }

      return result.data;
    },
  });

  return query;
};


// import { useQuery } from "@tanstack/react-query";

// import { client } from "@/lib/rpc";

// interface Props {
//   workspaceId: string;
// }

// export const useGetMembers = ({ workspaceId }: Props) => {
//   const query = useQuery({
//     queryKey: ["members"],
//     queryFn: async () => {
//       const response = await client.api.members.$get({
//         query: { workspaceId },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch members");
//       }

//       const result = await response.json();

//       return result.data;
//     },
//   });

//   return query;
// };
