"use client";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/schemas/projectSchema";
import axiosInstance from "@/config/axiosInstance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof projectSchema>;

const AddProjectPage = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      gitHubLink: [{ label: "", url: "" }],
      keyFeatures: [""],
    },
  });

  const {
    fields: gitHubFields,
    append: appendGitHubField,
    remove: removeGitHubField,
  } = useFieldArray({
    control,
    name: "gitHubLink",
  });

  const {
    fields: featureFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "keyFeatures",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("thumbnail", data.thumbnail[0]);
    formData.append("description", data.description);
    formData.append(
      "technologies",
      JSON.stringify(data.technologies.split(","))
    );
    formData.append("keyFeatures", JSON.stringify(data.keyFeatures));
    formData.append("gitHubLink", JSON.stringify(data.gitHubLink));
    formData.append("liveLink", data.liveLink);
    formData.append("type", data.type);
    try {
      const response = await axiosInstance({
        url: "/admin/addProject",
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        toast.success("Project added successfully");
        router.push("/admin");
      }
    } catch (err) {
      toast.error("Project uploading failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (featureFields.length === 0) {
      appendFeature("");
    }
  }, [featureFields.length, appendFeature]);

  return (
    <div className="p-4 pb-20">
      <h1 className="border-b text-center text-2xl text-brand pb-2 font-medium">
        Add New Project
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
          <label htmlFor="category">Project Category</label>
          <input
            {...register("category")}
            placeholder="e.g., Job board platform"
            className="input-style"
          />
          {errors.category && (
            <p className="err-msg">{errors.category.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1 items-start">
          <p className="cursor-default">Thumbnail</p>

          <div className="flex items-center gap-2">
            <label
              htmlFor="thumbnail"
              className="btn btn-sm btn-soft font-normal"
            >
              Choose file
            </label>
            <input
              type="file"
              id="thumbnail"
              title="Choose file"
              {...register("thumbnail")}
              className="hidden"
            />
            <p className="text-xs mt-1 text-gray-500">
              {watch("thumbnail")?.[0]?.name || "No file selected"}
            </p>
          </div>

          {errors.thumbnail && (
            <p className="err-msg">{String(errors.thumbnail.message)}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea {...register("description")} className="input-style" />
          {errors.description && (
            <p className="err-msg">{errors.description.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="technologies">Technologies</label>
          <input {...register("technologies")} className="input-style" />
          {errors.technologies && (
            <p className="err-msg">{errors.technologies.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="cursor-default">Key Features</p>
          {featureFields.map((field, index) => (
            <div key={field.id} className="flex gap-4 mb-1">
              <input
                className="input-style"
                {...register(`keyFeatures.${index}`)}
              />
              {featureFields.length > 1 && (
                <button
                  type="button"
                  className="btn btn-error btn-sm"
                  onClick={() => removeFeature(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {errors.keyFeatures && (
            <p className="err-msg">{errors.keyFeatures.message as string}</p>
          )}
          <button
            type="button"
            className="btn btn-primary btn-sm text-xs w-36"
            onClick={() => appendFeature("")}
          >
            Add Feature
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <p className="cursor-default">GitHub Link</p>
          {gitHubFields.map((gitHubField, index) => (
            <div key={gitHubField.id} className="flex gap-4 mb-1">
              <input
                placeholder="Label"
                className="input-style"
                {...register(`gitHubLink.${index}.label`)}
              />
              <input
                placeholder="URL"
                className="input-style"
                {...register(`gitHubLink.${index}.url`)}
              />
              {gitHubFields.length > 1 && (
                <button
                  type="button"
                  className="btn btn-error btn-sm"
                  onClick={() => removeGitHubField(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          {errors.gitHubLink && (
            <p className="err-msg">{errors.gitHubLink.message as string}</p>
          )}

          <button
            className="btn btn-primary btn-sm text-xs w-36"
            type="button"
            onClick={() => appendGitHubField({ label: "", url: "" })}
          >
            Add GitHub Link
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="liveLink">Live Link</label>
          <input {...register("liveLink")} className="input-style" />
          {errors.liveLink && (
            <p className="err-msg">{errors.liveLink.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="type">Type</label>
          <input {...register("type")} className="input-style" />
          {errors.type && <p className="err-msg">{errors.type.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="client">Client</label>
          <input {...register("client")} className="input-style" />
          {errors.client && <p className="err-msg">{errors.client.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-success text-white"
        >
          {loading ? "Uploading..." : "Add Project"}
        </button>
      </form>
    </div>
  );
};

export default AddProjectPage;
