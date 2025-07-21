import { BsBoxArrowInUpRight } from "react-icons/bs";

const ResumeBtn = ({ resume }: { resume: string }) => {
  return (
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      className="link-btn bg-brand border-none bg-brand-dark-hover text-lg text-white"
    >
      Resume <BsBoxArrowInUpRight size={20} />
    </a>
  );
};

export default ResumeBtn;
