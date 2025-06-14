import { z } from "zod";

/**
 * BONUS: Implement zod schema for model validation
 */
export interface IProject {
  id: string;
  name: string;
  description: string;
}

// Zod schema to validate incoming project (without `id`)
export const projectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Project description is required")
});
