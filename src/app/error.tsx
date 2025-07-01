"use client";

import ErrorDiv from "@/components/ErrorDiv";

export default function GlobalErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <ErrorDiv
      errorSection="Main Page"
      errorMsg={error.message}
      defaultMsg="Globally"
      reset={reset}
    />
  );
}
