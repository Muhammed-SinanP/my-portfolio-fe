"use client";
import GoToHomeBtn from "@/components/buttons/GoToHomeBtn";
import LogoutBtn from "@/components/buttons/LogoutBtn";
import AdminHeader from "@/components/header/AdminHeader";
import { useAppSelector } from "@/hooks/redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
const AdminPage = () => {
  const router = useRouter();
  const isAdminLoggedIn = useAppSelector((state) => state.admin.adminLoggedIn);

  useEffect(() => {
    if (!isAdminLoggedIn) {
      router.push("/admin/login");
    }
  }, [isAdminLoggedIn]);

  if (isAdminLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col justify-between">
        <AdminHeader />

        <section className=" section h-full items-center font-sans tracking-wide ">
          <div className="h-28"></div>
          <button
            onClick={() => router.push("/admin/addProject")}
            className="btn btn-info text-white flex justify-center items-center"
          >
            Add Project <FaPlus />
          </button>
          <button
            onClick={() => router.push("/admin/addCertification")}
            className="btn btn-info text-white flex justify-center items-center mt-8"
          >
            Add Certification <FaPlus />
          </button>
        </section>

        <div className="p-4 w-full flex gap-4 justify-between items-center mb-2">
          <GoToHomeBtn />
          <LogoutBtn />
        </div>
      </div>
    );
  }
};

export default AdminPage;
