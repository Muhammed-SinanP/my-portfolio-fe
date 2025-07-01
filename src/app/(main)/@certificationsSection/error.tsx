"use client";
import ErrorDiv from "@/components/ErrorDiv";
import React from "react";
const ErrorCertificationsSection = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <ErrorDiv
      errorSection="Certifications Section"
      errorMsg={error.message}
      defaultMsg="while fetching certifications"
      reset={reset}
    />
  );
};

export default ErrorCertificationsSection;
