const ErrorDiv = ({
  errorSection,
  errorMsg,
  defaultMsg,
  reset,
}: {
  errorSection:string;
  errorMsg: string;
  defaultMsg: string;
  reset: () => void;
}) => {
  return (
    <div className="section">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="error-msg">Error occured in - {errorSection}</p>
        <p className="error-msg">
          ! {errorMsg ?? `Something went wrong ${defaultMsg}.`} !
        </p>
        <button className="error-btn" onClick={reset}>
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorDiv;
