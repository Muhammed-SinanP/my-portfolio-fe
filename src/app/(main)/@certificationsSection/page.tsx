export const dynamic = "force-dynamic";
import { fetchCertifications } from "@/services/certificationService";
import CertificationsContainer from "./CertificationsContainer";

const CertificationsSection = async () => {
  const certifications = await fetchCertifications();
  return (
    <section id="certifications-section" className="section">
      <h1 className="section-title">My Certifications</h1>
      {certifications && (
        <CertificationsContainer certifications={certifications} />
      )}
    </section>
  );
};

export default CertificationsSection;
