import { z } from "zod";
import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  status: z.nativeEnum(TaskStatus, { required_error: "Status is Required" }),
  workspaceId: z.string().trim().min(1, "Workspace is required"),
  projectId: z.string().trim().min(1, "ProjectId is Required"),
  dueDate: z.coerce.date(),
  assigneeId: z.string().trim().min(1, "Required"),
  description: z.string().optional(),
});
