"use client";
import { Input } from "@/components/ui/Input";
import axiosInstance from "@/config/axiosInstance";
import { contactSchema, contactSchemaType } from "@/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as motion from "motion/react-client";
import { easeInOut } from "motion/react";

const fadeInUpStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const fadeInUpItem = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

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
      toast.error("Failed to send message");
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpStagger}
      >
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="flex flex-col gap-2 max-w-lg mx-auto"
        >
          <motion.div variants={fadeInUpItem}>
            <label htmlFor="name">Enter your name</label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              {...register("name")}
              disabled={loading}
            />
            {errors.name && <p className="err-msg">{errors.name.message}</p>}
          </motion.div>

          <motion.div variants={fadeInUpItem}>
            <label htmlFor="email">Enter your email</label>
            <Input
              id="email"
              type="text"
              placeholder="abcd@gmail.com"
              {...register("email")}
              disabled={loading}
            />
            {errors.email && <p className="err-msg">{errors.email.message}</p>}
          </motion.div>

          <motion.div variants={fadeInUpItem}>
            <label htmlFor="topic">Topic</label>
            <Input
              id="topic"
              type="text"
              placeholder="Freelance"
              {...register("topic")}
              disabled={loading}
            />
            {errors.topic && <p className="err-msg">{errors.topic.message}</p>}
          </motion.div>

          <motion.div variants={fadeInUpItem} className="flex flex-col">
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
          </motion.div>

          <motion.div
            variants={fadeInUpItem}
            className="flex justify-center mt-2"
          >
            <button
              disabled={loading}
              type="submit"
              className=" btn bg-teal-500  font-normal text-white"
            >
              {loading ? "Sending" : "Send"} Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
