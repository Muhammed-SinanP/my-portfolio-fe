"use client";
import ErrorDiv from "@/components/ErrorDiv";

const ErrorProjectSection = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <ErrorDiv
      errorSection="Project Section"
      errorMsg={error.message}
      defaultMsg="while fetching about details"
      reset={reset}
    />
  );
};

export default ErrorProjectSection;
