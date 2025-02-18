import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "The name field is required"),
  image: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),
});
