import { z } from "zod";

export const certificationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  certificate: z
    .any()
    .refine((file) => file?.length === 1, {
      message: "Certificate is required",
    }),
  description: z.string().min(10, "Description must be at least 10 characters"),
  issuer: z.string().min(1, "Issuer is required"),
  verificationLink: z.string().url("Enter a valid Verification URL"),
});

export type AddProjectType = z.infer<typeof certificationSchema>;
