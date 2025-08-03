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
    <div style={{ perspective: 1000 }}>
      <motion.div
        initial={{
          rotateX: 80,
          transformOrigin: "bottom",
        }}
        whileInView={{
          rotateX: 0,
          transformOrigin: "bottom",
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileHover={{
          scale: activeProjectId === projectId ? 1 : 1.08,
        }}
        onClick={() => handleProjectClick(projectId)}
        className={`${style} 
       sm:scale-95 bg-white/50 group shadow-sm hover:shadow-md shadow-gray-800 dark:shadow-black cursor-pointer group rounded-lg  relative overflow-hidden`}
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
    </div>
  );
};

export default ProjectCard;
