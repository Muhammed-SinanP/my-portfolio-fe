import { fetchProfile } from "@/services/profileService";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import SocialBtn from "@/components/buttons/SocialBtn";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ContainerTextFlip } from "@/components/ui/ContainerTextFlip";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const HeroSection = async () => {
  const profile = await fetchProfile();

  return (
    <section
      id="hero-section"
      className="section items-center overflow-x-hidden"
    >
      <div className="h-14"></div>
      <Spotlight />
      <Image
        src={profile?.profilePicture}
        alt="Profile picture"
        priority
        width={100}
        height={100}
        className="object-cover rounded-full shadow-sm"
      />

      <div className="text-xl font-semibold tracking-wide flex items-center gap-2">
        <div className="flex items-center">
          Hi<span className="text-2xl -mr-0.5">👋</span>,
        </div>
        <div>
          I&apos;m<span className="text-brand"> {profile?.fullName}</span>
        </div>
      </div>
      <h1 className="text-4xl sm:text-5xl text-center font-bold text-brand capitalize font-brand-title">
        <ContainerTextFlip
          words={[
            "Full Stack",
            "MERN",
            "React",
            "Frontend",
            "Backend",
            "Node JS",
          ]}
        />
        <span className="-ml-2">Developer</span>
      </h1>

      <div className="text-center max-w-3xl">
        <TextGenerateEffect words={profile.intro} />
      </div>

      <a
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="link-btn bg-brand border-none bg-brand-dark-hover text-lg text-white"
      >
        Resume <BsBoxArrowInUpRight size={20} />
      </a>

      <div className="flex flex-col sm:flex-row gap-4 ">
        <SocialBtn
          title="LinkedIn"
          link={profile.socialLinks.linkedIn}
          icon={<FaLinkedin size={20} />}
          style="hover:bg-blue-600 border-blue-600 text-blue-600 hover:text-white"
          color="bg-blue-600 text-white"
        />
        <SocialBtn
          title="GitHub"
          link={profile.socialLinks.gitHub}
          icon={<FaGithub size={20} />}
          style="hover:bg-black border-black text-black hover:text-white"
          color="bg-black text-white"
        />
        <SocialBtn
          title="LeetCode"
          link={profile.socialLinks.leetCode}
          icon={<SiLeetcode size={20} />}
          style="hover:bg-yellow-400 text-yellow-400 border-yellow-400 hover:text-black"
          color="bg-yellow-400 text-black"
        />
      </div>
    </section>
  );
};

export default HeroSection;
