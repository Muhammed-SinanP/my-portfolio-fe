interface NavLink {
  index: number;
  title: string;
  sectionId: string;
}

export const navLinks: NavLink[] = [
  { index: 1, title: "Home", sectionId: "hero-section" },
  { index: 2, title: "About Me", sectionId: "about-section" },
  { index: 3, title: "Projects", sectionId: "projects-section" },
  { index: 4, title: "Certifications", sectionId: "certifications-section" },
];

export const allSectionIds: string[] = [
  "hero-section",
  "about-section",
  "projects-section",
  "certifications-section",
  "contact-section",
];
