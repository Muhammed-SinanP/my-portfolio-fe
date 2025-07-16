const LoadingHeroSection = () => {
  return (
    <div className="section items-center ">
      <div className="h-14"></div>
      <div className="w-24 h-24 rounded-full skeleton"></div>
      <div className="h-6 w-80 skeleton"></div>
      <div className="h-14 w-80 skeleton"></div>
      <div className="h-6 w-36 skeleton"></div>
      <div className="flex flex-col gap-1">
        <div className="h-5 w-96 sm:w-xl skeleton"></div>
        <div className="h-5 w-96 sm:w-xl skeleton"></div>
        <div className="sm:hidden h-5 w-96 sm:w-xl skeleton"></div>
      </div>

      <div className="h-10 w-24 rounded-full skeleton"></div>

      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <div className="h-10 w-24 sm:w-10 rounded-full skeleton"></div>
        <div className="h-10 w-24 sm:w-10 rounded-full skeleton"></div>
        <div className="h-10 w-24 sm:w-10 rounded-full skeleton"></div>
      </div>
    </div>
  );
};

export default LoadingHeroSection;
