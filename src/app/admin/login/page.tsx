"use client";
const googleIcon = "/images/googleIcon.webp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  adminLoginSchema,
  AdminLoginSchemaType,
} from "@/schemas/adminLoginSchema";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axiosInstance from "@/config/axiosInstance";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { saveAdminData } from "@/redux/features/adminSlice";
import toast from "react-hot-toast";
import axios from "axios";
import DarkModeBtn from "@/components/buttons/DarkModeBtn";
import GoToHomeBtn from "@/components/buttons/GoToHomeBtn";
import Image from "next/image";

export default function AdminLoginPage() {
  const dispatch = useAppDispatch();
  const isAdminLoggedIn = useAppSelector((state) => state.admin.adminLoggedIn);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginSchemaType>({
    resolver: zodResolver(adminLoginSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: AdminLoginSchemaType) => {
    try {
      const response = await axiosInstance("/admin/login", {
        method: "POST",
        data: data,
      });

      if (response.status === 200) {
        dispatch(saveAdminData());
        toast.success("Logged in successfully");
        router.push("/admin");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          toast.error("Incorrect password");
        } else {
          toast.error("Login failed");
        }
      } else {
        toast.error("Unexpected error");
      }
    }
  };

  function googleSignIn() {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/googleSignIn`;
  }

  useEffect(() => {
    if (isAdminLoggedIn) {
      router.push("/admin");
    }
  });

  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <div className="w-full flex justify-end p-6 pb-0">
        <DarkModeBtn />
      </div>

      <div className="bg-white dark:bg-gray-950 w-80 sm:w-96 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl text-center mb-4  text-purple-700">
          Admin Login
        </h1>

        <div className="flex w-full items-center justify-center text-center">
          <button
            onClick={googleSignIn}
            className="btn btn-lg btn-outline border-thin bg-gray-50 dark:bg-gray-800 text-teal-500 hover:bg-teal-500 hover:text-white my-1 flex w-full items-center justify-center gap-2"
          >
            <Image src={googleIcon} alt="google icon" width={20} height={20} />
            <span className="text-lg font-normal ">Continue with Google</span>
          </button>
        </div>

        <div className="my-2 mb-3 flex w-full items-center justify-center">
          <div className="border-thin w-full border-b-0.5"></div>
          <div className="px-2 text-xs ">or</div>
          <div className="border-thin w-full border-b-0.5"></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-1.5"
        >
          <label className="">Enter password</label>
          <input
            type="password"
            autoComplete="off"
            {...register("password")}
            className="input-style"
          />
          {errors.password && (
            <p className="text-xs text-red-600 tracking-wide">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 font-normal text-base btn btn-lg bg-teal-500 hover:bg-teal-600 text-white"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full flex justify-start p-6 pt-0">
        <GoToHomeBtn />
      </div>
    </div>
  );
}
