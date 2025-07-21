import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { fetchProfile } from "@/services/profileService";
import * as motion from "motion/react-client";
const SKILL_ORDER = [
  "languages",
  "frontend",
  "backend",
  "database",
  "cloud",
  "tools",
  "other",
] as const; // <-- keeps the typings tight

type SkillCategory = (typeof SKILL_ORDER)[number];

const AboutSection = async () => {
  const profile = await fetchProfile();

  return (
    <section id="about-section" className="section">
      <h1 className="section-title">About Me</h1>
      <div className="max-w-5xl text-center mx-auto">
        <TextGenerateEffect words={profile.profileSummary} />
      </div>

      <h2 className="capitalize font-brand-title tracking-wide text-xl border-b text-brand text-center">
        Technical skills
      </h2>
      <p className="text-center">
        I constantly upgrade my technical skills to stay aligned with the latest
        industry trends, tools, and best practices.
      </p>

      <div>
        {/* loop in the fixed order */}
        {SKILL_ORDER.map((category: SkillCategory) => {
          const values = profile.skills?.[category] ?? [];
          if (!values.length) return null; // skip empty categories

          return (
            <div
              key={category}
              className="flex flex-col gap-0.5 mb-4 items-center capitalize"
            >
              <p className=" text-lg">{category}</p>

              <div className="flex justify-center text-sm flex-wrap gap-2">
                {values.map((value: string, index: number) => (
                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: 0.4 * index,
                      duration: 0.5,
                    }}
                    key={value}
                    className="bg-brand-extralight text-black px-2 py-1 rounded-md shadow-sm"
                  >
                    {value}
                  </motion.p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
