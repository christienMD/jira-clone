"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import DottedSeparator from "@/components/DottedSeparator";

import { useJoinWorkspace } from "../api/useJoinWorkspace";
import useInviteCode from "../hooks/useInviteCode";
import useWorkSpaceId from "../hooks/useWorkSpaceId";

interface Props {
  initialValues: {
    name: string;
  };
}

const JoinWorkspaceForm = ({ initialValues: { name } }: Props) => {
  const { mutate, isPending } = useJoinWorkspace();
  const inviteCode = useInviteCode();
  const workspaceId = useWorkSpaceId();
  const router = useRouter();

  const onSubmit = () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join workspace</CardTitle>
        <CardDescription>
          You&apos;ve been invited to join <strong>{name}</strong> workspace
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent>
        <div className="flex flex-col space-y-2 gap-2 lg:flex-row items-center justify-between w-full">
          <Button
            size="lg"
            variant="secondary"
            className="w-full lg:w-fit"
            disabled={isPending}
            asChild
          >
            <Link href="/">Cancel</Link>
          </Button>
          <Button
            disabled={isPending}
            onClick={onSubmit}
            size="lg"
            type="button"
            className="w-full lg:w-fit"
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JoinWorkspaceForm;
