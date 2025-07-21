import Image from "next/image";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client";
import { useState } from "react";
const ProjectCard = ({
  style,
  projectId,
  thumbnail,
  title,
  category,
  type,
}: {
  style: string;
  projectId: string;
  thumbnail: string;
  title: string;
  category: string;
  type?: string;
}) => {
  const [activeProjectId, setActiveProjectId] = useState<string>("0");
  function handleProjectClick(projectId: string) {
    setActiveProjectId(projectId);
    router.push(`/project/${projectId}`);
  }
  const router = useRouter();
  return (
    <motion.div
      initial={{
        opacity: 0.6,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        boxShadow:
          activeProjectId === projectId ? "0px" : "0px 0px 4px 0.5px #009689",
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{
        scale: activeProjectId === projectId ? 1 : 1.1,
        boxShadow:
          activeProjectId === projectId ? "0px" : "0px 0px 6px 1px #00bba7",
      }}
      onClick={() => handleProjectClick(projectId)}
      className={`${style} 
      } sm:scale-95 bg-white/50 group  cursor-pointer group rounded-lg  relative overflow-hidden`}
    >
      <Image
        src={thumbnail}
        alt={`Thumbnail image of ${title}`}
        priority
        fill
        className="absolute object-top object-cover saturate-100 group-hover:saturate-150 "
      />

      <div className="absolute flex sm:invisible sm:scale-0 sm:group-hover:scale-95 transform transition-all duration-500 ease-in-out sm:group-hover:visible bottom-4 w-full flex-col gap-2 items-center">
        <h3 className="px-2.5 shadow-sm shadow-black/60 py-0.5 bg-white dark:bg-base-100 rounded-md font-brand-title font-semibold tracking-wide">
          {title}
        </h3>
        <h4 className="text-lg underline px-2.5 shadow-sm shadow-black/60 py-0.5 bg-white dark:bg-base-100 rounded-md uppercase font-brand-title font-semibold tracking-wide">
          {category}
        </h4>
      </div>

      {type && (
        <p className="px-1.5 py-0.5 shadow-sm shadow-black/60 font-sans font-medium capitalize bg-white dark:bg-base-100 absolute text-xs rounded-md right-4 top-4">
          {type}
        </p>
      )}

      {activeProjectId === projectId && (
        <div className="absolute w-full h-full bg-black/50  top-0 flex justify-center items-center">
          <span className="loading loading-spinner loading-xl text-brand"></span>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
