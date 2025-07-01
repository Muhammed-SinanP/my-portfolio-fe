const SocialBtn = ({
  link,
  icon,
  style,
  title,
  color,
}: {
  link: string;
  icon: React.ReactNode;
  style: string;
  title: string;
  color: string;
}) => {
  return (
    <div className="relative">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-btn peer social-link-btn bg-white/80 dark:bg-gray-700 ${style}`}
      >
        {icon} <span className="mt-0.5 sm:hidden ">{title}</span>
      </a>
      <p
        className={`absolute -top-10 left-1/2 -translate-x-1/2 sm:peer-hover:block hidden text-sm tracking-wide shadow-sm ${color} px-1.5 py-1 rounded-md`}
      >
        {title}
      </p>
    </div>
  );
};

export default SocialBtn;
