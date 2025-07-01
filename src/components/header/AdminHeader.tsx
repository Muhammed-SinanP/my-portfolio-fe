"use client";
import { useState } from "react";

import axiosInstance from "@/config/axiosInstance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import DarkModeBtn from "../buttons/DarkModeBtn";
import GoToHomeBtn from "../buttons/GoToHomeBtn";

const AdminHeader = () => {
  const router = useRouter();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);

  async function handleLogout() {
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/admin/logout",
      });
      if (response.status === 200) {
        router.push("/");
        toast.success("Logged out successfully");
      } else {
        toast.error("User logout failed");
      }
    } catch (err) {
      toast.error("User logout failed");
    }
  }

  return (
    <div className="header header-before-scroll">
      <h1 className="text-3xl text-purple-700 font-brand-title font-semibold">
        Admin Dashboard
      </h1>

      <div className="relative flex items-center gap-4">
        <DarkModeBtn />
        <GoToHomeBtn />
        <button
          onClick={() => setShowLogoutConfirm(true)}
          className="btn btn-soft btn-error font-sans"
        >
          Logout
        </button>
        {showLogoutConfirm && (
          <div className="bg-white dark:bg-gray-700 p-4 flex flex-col gap-4 absolute top-0 right-0 rounded-sm font-sans shadow-md w-52">
            <p className="text-center text-sm tracking-wide">Confirm logout!</p>
            <div className="flex justify-around">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="btn btn-sm btn-soft btn-info"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-soft btn-error"
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
