"use client";
import { Input } from "@/components/ui/Input";
import axiosInstance from "@/config/axiosInstance";
import { contactSchema, contactSchemaType } from "@/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<contactSchemaType>({
    resolver: zodResolver(contactSchema),
  });

  async function sendEmail(data: contactSchemaType) {
    try {
      setLoading(true);
      const response = await axiosInstance({
        method: "POST",
        url: "/user/sendMessage",
        data: data,
      });
      if (response.status === 200) {
        toast.success("Message sent successfully");
        reset();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <section id="contact-section" className="section">
      <div>
        <p className="text-xl text-brand font-brand-title text-center">
          Connect with me
        </p>
        <h1 className="section-title">get in touch</h1>
      </div>
      <p className="text-center text-sm max-w-3xl mx-auto tracking-wide">
        Have a question, idea, or opportunity? Use the form below to get in
        touch. I’m open to freelance work, collaboration, and full-time
        opportunities.
      </p>
      <div className="">
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="flex flex-col gap-2 max-w-lg mx-auto"
        >
          <div>
            <label htmlFor="name">Enter your name</label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              {...register("name")}
              disabled={loading}
            />
            {errors.name && <p className="err-msg">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email">Enter your email</label>
            <Input
              id="email"
              type="text"
              placeholder="abcd@gmail.com"
              {...register("email")}
              disabled={loading}
            />
            {errors.email && <p className="err-msg">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="topic">Topic</label>
            <Input
              id="topic"
              type="text"
              placeholder="Freelance"
              {...register("topic")}
              disabled={loading}
            />
            {errors.topic && <p className="err-msg">{errors.topic.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={8}
              {...register("message")}
              disabled={loading}
              placeholder="Enter your message"
              className="shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-50 px-2 py-1 text-black transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[1px] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-900 hover:cursor-text dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-teal-400 hover:ring-[1px] hover:ring-teal-300"
            ></textarea>
            {errors.message && (
              <p className="err-msg">{errors.message.message}</p>
            )}
          </div>

          <div className="flex justify-center mt-2">
            <button
              disabled={loading}
              type="submit"
              className=" btn bg-teal-500  font-normal text-white"
            >
              {loading ? "Sending" : "Send"} Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
