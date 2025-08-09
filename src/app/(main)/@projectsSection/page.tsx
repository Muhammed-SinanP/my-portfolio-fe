export const dynamic = "force-dynamic";
import { fetchAllProjects } from "@/services/projectService";
import ProjectsContainer from "./ProjectsContainer";

const ProjectsSection = async () => {
  const projects = await fetchAllProjects();

  return (
    <section id="projects-section" className="section">
      <h1 className="section-title">My Projects</h1>
      {projects && <ProjectsContainer projects={projects} />}
    </section>
  );
};

export default ProjectsSection;
