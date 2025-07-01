"use client";
import { useRouter } from "next/navigation";

const FooterSection = () => {
  const router = useRouter();
  return (
    <div className="section ">
      <div>
        <div className="border-[0.1px] text-gray-400 max-w-4xl mx-auto"></div>
      </div>
      <div className="py-4">
        <p className="text-xs text-center text-gray-400">
          &copy; 2025{" "}
          <span
            onClick={() => router.push("/admin")}
            className="cursor-pointer"
          >
            Muhammed Sinan P
          </span>
          . All rights reserved
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
