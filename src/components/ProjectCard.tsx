import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/project/${projectId}`)}
      className={`${style} border-thin border-gray-200 cursor-pointer group rounded-lg shadow-sm shadow-black/60 hover:shadow-teal-500 sm:scale-95 sm:active:scale-95 active:shadow-sm hover:scale-100 transform transition-all ease-in-out duration-400 relative overflow-hidden`}
    >
      <Image
        src={thumbnail}
        alt={`Thumbnail image of ${title}`}
        priority
        fill
        className="absolute object-top object-cover saturate-100 group-hover:saturate-150 "
      />

      <div className="absolute bottom-4 w-full flex flex-col gap-2 items-center">
        <h3 className="px-2.5 shadow-sm shadow-black/60 py-0.5 bg-white dark:bg-base-100 rounded-md uppercase font-brand-title font-semibold tracking-wide">
          {title}
        </h3>
        <h4 className="text-lg px-2.5 shadow-sm shadow-black/60 py-0.5 bg-white dark:bg-base-100 rounded-md uppercase font-brand-title font-semibold tracking-wide">
          {category}
        </h4>
      </div>

      {type && (
        <p className="px-1.5 py-0.5 shadow-sm shadow-black/60 font-sans font-medium capitalize bg-white dark:bg-base-100 absolute text-xs rounded-md right-4 top-4">
          {type}
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
