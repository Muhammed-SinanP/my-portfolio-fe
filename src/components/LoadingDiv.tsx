const LoadingDiv = ({ section }: { section: string }) => {
  return (
    <div className="section items-center">
      <p>Loading {section}</p>
      <div>
        <span className="loading loading-spinner loading-lg text-brand"></span>
      </div>
    </div>
  );
};

export default LoadingDiv;
