import { fetchProjectDetails } from "@/services/projectService";
import { Project } from "@/types/project";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export interface GitHubLink {
  label: string;
  url: string;
}
const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const project: Project = await fetchProjectDetails(projectId);

  return (
    <div className="section">
      <div>
        <div className="capitalize flex justify-between items-center">
          <p className="font-bold text-lg">{project.title}</p>
          {project.type && (
            <p className="border-thin flex justify-center items-center p-1 px-1.5 text-sm rounded-md text-gray-950 bg-gray-100 dark:bg-gray-300">
              {project.type}
            </p>
          )}
        </div>
        <h1 className="text-2xl capitalize font-semibold">
          {project.category}
        </h1>
        {project.client && <p>Client: {project.client}</p>}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/4 relative h-56 sm:h-72 lg:h-80 rounded-lg  border border-gray-200 shadow-sm overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`Thumbnail of ${project.title}`}
            className="object-cover object-top"
            fill
          />
        </div>
        <div className="md:w-1/5 font-sans tracking-wide capitalize flex flex-wrap md:flex-col gap-3 items-start">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-info text-white"
          >
            <FaGlobe />
            Open live link
          </a>

          {project.gitHubLink.map(({ label, url, _id }) => (
            <a
              key={_id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-neutral"
            >
              <FaGithub />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">Stacks used</p>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="border-thin rounded-md px-2 py-0.5 text-gray-950 bg-gray-100 dark:bg-gray-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">Description</p>
        <p>{project.description}</p>
      </div>

      <div>
        <p className="text-lg font-semibold">Key features</p>
        <ul className="list-disc">
          {project.keyFeatures.map((feature, index) => (
            <li key={index} className="ml-4">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default ProjectDetailsPage;
