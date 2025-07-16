
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

const HomeLayout = ({
  children,
  heroSection,
  aboutSection,
  projectsSection,
  certificationsSection,
}: {
  children: React.ReactNode;
  heroSection: React.ReactNode;
  aboutSection: React.ReactNode;
  projectsSection: React.ReactNode;
  certificationsSection: React.ReactNode;
}) => {
  return (
    <div>
      
      {children}
      {heroSection}
      {aboutSection}
      {projectsSection}
      {certificationsSection}
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default HomeLayout;
