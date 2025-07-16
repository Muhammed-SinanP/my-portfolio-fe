export interface GitHubLink {
  _id?: string;
  label: string;
  url: string;
}
export interface Project {
  _id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  keyFeatures: string[];
  gitHubLink: GitHubLink[];
  liveLink: string;
  technologies: string[];
  type: string;
  mini: string;
  client: string;
  order:number;
}
