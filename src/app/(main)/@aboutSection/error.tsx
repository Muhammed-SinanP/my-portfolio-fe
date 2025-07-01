"use client";

import ErrorDiv from "@/components/ErrorDiv";

export default function ErrorAboutSection({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="section">
      <ErrorDiv
        errorSection="About section"
        errorMsg={error.message}
        defaultMsg="while fetching profile details"
        reset={reset}
      />
    </div>
  );
}
