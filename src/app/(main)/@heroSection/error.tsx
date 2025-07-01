"use client";
import ErrorDiv from "@/components/ErrorDiv";

export default function ErrorHeroSection({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <div className="h-18"></div>
      <ErrorDiv
        errorSection="Hero Section"
        errorMsg={error.message}
        defaultMsg="while fetching profile details"
        reset={reset}
      />
    </div>
  );
}
