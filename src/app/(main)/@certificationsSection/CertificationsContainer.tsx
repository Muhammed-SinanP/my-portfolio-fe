import { Button } from "@/components/ui/MovingBorder";
import Image from "next/image";
const paperImg = "/images/paper.webp";
interface Certification {
  _id: string;
  title: string;
  issuer: string;
  certificate: string;
  verificationLink: string;
  description: string;
}
const CertificationsContainer = ({
  certifications,
}: {
  certifications: Certification[];
}) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      {certifications.length > 0 &&
        certifications.map((certification: Certification) => (
          <Button
            key={certification._id}
            borderRadius="8rem"
            className="text-black relative max-w-5xl dark:text-white bg-white/80 dark:bg-neutral-950/80"
          >
            <Image
              src={paperImg}
              alt="bg-image"
              fill
              className="opacity-60 rounded-lg"
            />
            <div className="flex flex-col items-start gap-2 p-4 z-10 dark:text-gray-950">
              <p className="text-lg font-bold">{certification.title}</p>
              <p className="text-base text-start ">
                Issued by:{" "}
                <span className="font-semibold">{certification.issuer}</span>
              </p>
              <p className="text-start">{certification.description}</p>
              <div className="flex gap-0">
                <a
                  href={certification.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-link text-blue-700 font-normal "
                >
                  View certificate
                </a>
                <a
                  href={certification.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-link text-blue-700 font-normal "
                >
                  Verify certificate
                </a>
              </div>
            </div>
          </Button>
        ))}
    </div>
  );
};

export default CertificationsContainer;
