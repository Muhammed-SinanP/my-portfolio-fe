"use client";
import { Project } from "@/types/project";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ProjectsContainer = ({ projects }: { projects: Project[] }) => {
  const [showMiniProjects, setShowMiniProjects] = useState<boolean>(false);

  function handleMiniProjects() {
    !showMiniProjects && window.scrollBy({ top: 100, behavior: "smooth" });
    setShowMiniProjects(!showMiniProjects);
  }

  return (
    <div className="flex flex-col gap-4 items-center mt-2">
      <div className="projects-container">
        {projects
          .sort((a, b) => b.order - a.order)
          .map(
            (project) =>
              !project.mini && (
                <ProjectCard
                  key={project._id}
                  style="h-64 w-full sm:w-sm"
                  projectId={project._id}
                  thumbnail={project.thumbnail}
                  title={project.title}
                  category={project.category}
                  type={project.type}
                />
              )
          )}
      </div>

      {showMiniProjects && (
        <div className="projects-container">
          {projects
            .sort((a, b) => b.order - a.order)
            .map(
              (project) =>
                project.mini && (
                  <ProjectCard
                    key={project._id}
                    style="h-56 w-11/12 sm:w-xs"
                    projectId={project._id}
                    thumbnail={project.thumbnail}
                    title={project.title}
                    category={project.category}
                    type={project.type}
                  />
                )
            )}
        </div>
      )}

      <button
        onClick={handleMiniProjects}
        className="btn btn-sm btn-accent text-white font-normal tracking-wide capitalize"
      >
        {showMiniProjects ? "Hide" : "Show"} mini projects
        {showMiniProjects ? (
          <MdKeyboardDoubleArrowUp size={14} />
        ) : (
          <MdKeyboardDoubleArrowDown size={14} />
        )}
      </button>
    </div>
  );
};

export default ProjectsContainer;
