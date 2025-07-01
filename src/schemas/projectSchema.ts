import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  thumbnail: z
    .any()
    .refine(
      (files) =>
        files instanceof FileList &&
        files.length === 1 &&
        files[0].type.startsWith("image/"),
      { message: "Only image files are allowed" }
    ),
  description: z.string().min(10, "Description must be at least 10 characters"),
  technologies: z.string().min(1, "Enter at least one technology"),
  keyFeatures: z
    .array(z.string().min(1, "Feature cannot be empty"))
    .min(1, "At least one key feature is required"),
  gitHubLink: z
    .array(
      z.object({
        label: z.string().min(1, "Label is required"),
        url: z.string().url("Enter a valid GitHub URL"),
      })
    )
    .min(1, "At least one GitHub link is required"),
  liveLink: z.string().url("Enter a valid Live URL"),
  type: z.string(),
  client: z.string(),
});

export type AddProjectType = z.infer<typeof projectSchema>;
