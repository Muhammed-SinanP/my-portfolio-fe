import { z } from "zod";

export const adminLoginSchema = z.object({
  password: z.string().min(4, "Password must be at least 4 characters long"),
});

export type AdminLoginSchemaType = z.infer<typeof adminLoginSchema>;
