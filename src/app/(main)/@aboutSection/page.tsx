import { fetchProfile } from "@/services/profileService";

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
      <p className="max-w-5xl text-center mx-auto">{profile.profileSummary}</p>

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
                {values.map((value: string) => (
                  <p
                    key={value}
                    className="bg-brand-extralight text-black px-2 py-1 rounded-md shadow-sm"
                  >
                    {value}
                  </p>
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
