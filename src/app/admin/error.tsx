"use client";
import ErrorDiv from "@/components/ErrorDiv";

export default function AdminErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <ErrorDiv
      errorSection="Admin Section"
      errorMsg={error.message}
      defaultMsg="in Admin Section"
      reset={reset}
    />
  );
}
