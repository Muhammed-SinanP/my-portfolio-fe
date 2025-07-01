"use client";
import AdminHeader from "@/components/header/AdminHeader";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
const AdminPage = () => {
  const router = useRouter();
  return (
    <div>
      <AdminHeader />
      <section className="mt-28 section h-full items-center font-sans tracking-wide ">
        <button
          onClick={() => router.push("/admin/addProject")}
          className="btn btn-info text-white flex justify-center items-center"
        >
          Add Project <FaPlus />
        </button>
        <button
          onClick={() => router.push("/admin/addCertification")}
          className="btn btn-info mt-8 text-white flex justify-center items-center"
        >
          Add Certification <FaPlus />
        </button>
      </section>
    </div>
  );
};

export default AdminPage;
