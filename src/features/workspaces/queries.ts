import { DATABASE_ID, WORKSPACES_ID } from "@/config";
import { createSessionClient } from "@/lib/appwrite";
import { getMember } from "../members/utils";
import { Workspace } from "./types";

interface Props {
  workspaceId: string;
}

export const getWorkspace = async ({ workspaceId }: Props) => {
  const { account, databases } = await createSessionClient();

  const user = await account.get();

  const member = await getMember({
    databases,
    userId: user.$id,
    workspaceId,
  });

  if (!member) {
    throw new Error("Unauthorized");
  }

  const workspaces = await databases.getDocument<Workspace>(
    DATABASE_ID,
    WORKSPACES_ID,
    workspaceId
  );

  return workspaces;
};

interface GetWorkspaeInProps {
  workspaceId: string;
}

export const getWorkspaceInfo = async ({ workspaceId }: GetWorkspaeInProps) => {
  const { databases } = await createSessionClient();

  const workspace = await databases.getDocument<Workspace>(
    DATABASE_ID,
    WORKSPACES_ID,
    workspaceId
  );

  return {
    name: workspace.name,
  };
};
