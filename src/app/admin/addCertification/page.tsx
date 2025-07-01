"use client";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "@/config/axiosInstance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { certificationSchema } from "@/schemas/certificationSchema";

type FormData = z.infer<typeof certificationSchema>;

const AddCertificationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(certificationSchema) });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("certificate", data.certificate[0]);
    formData.append("description", data.description);
    formData.append("issuer", data.issuer);
    formData.append("verificationLink", data.verificationLink);

    try {
      const response = await axiosInstance({
        url: "/admin/addCertification",
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        toast.success("Certification added successfully");
        router.push("/admin");
      }
    } catch (err) {
      toast.error("Certification uploading failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 pb-20">
      <h1 className="border-b text-center text-2xl text-brand pb-2 font-medium">
        Add New Certification
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-sm max-w-lg mx-auto flex flex-col gap-4 font-sans tracking-wide mt-10"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            {...register("title")}
            className="input-style text-lg font-medium"
          />
          {errors.title && <p className="err-msg">{errors.title.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="issuer">Issuer</label>
          <input {...register("issuer")} className="input-style" />
          {errors.issuer && <p className="err-msg">{errors.issuer.message}</p>}
        </div>
        <div className="flex flex-col gap-1 items-start">
          <p className="cursor-default">Certificate</p>
          <div className="flex items-center gap-2">
            <label
              htmlFor="certificate"
              className="btn btn-sm btn-soft font-normal"
            >
              Choose file
            </label>
            <input
              type="file"
              id="certificate"
              title="Choose file"
              {...register("certificate")}
              className="hidden"
            />
            <p className="text-xs mt-1 text-gray-500">
              {watch("certificate")?.[0]?.name || "No file selected"}
            </p>
          </div>
          {errors.certificate && (
            <p className="err-msg">{String(errors.certificate.message)}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="verificationLink">Verification Link</label>
          <input {...register("verificationLink")} className="input-style" />
          {errors.verificationLink && (
            <p className="err-msg">{errors.verificationLink.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea {...register("description")} className="input-style" />
          {errors.description && (
            <p className="err-msg">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-success text-white"
        >
          {loading ? "Uploading..." : "Add Certfication"}
        </button>
      </form>
    </div>
  );
};

export default AddCertificationPage;
