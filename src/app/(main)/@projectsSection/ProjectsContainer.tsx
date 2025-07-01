"use client";
import { Project } from "@/types/project";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const ProjectsContainer = ({ projects }: { projects: Project[] }) => {
  const [showMiniProjects, setShowMiniProjects] = useState<boolean>(false);

  function handleMiniProjects() {
    !showMiniProjects && window.scrollBy({ top: 100, behavior: "smooth" });
    setShowMiniProjects(!showMiniProjects);
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="projects-container">
        {projects.map(
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
          {projects.map(
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
      </button>
    </div>
  );
};

export default ProjectsContainer;
