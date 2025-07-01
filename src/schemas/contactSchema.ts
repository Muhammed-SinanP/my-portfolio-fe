import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  topic: z.string().min(1, "Enter your topic"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type contactSchemaType = z.infer<typeof contactSchema>;
