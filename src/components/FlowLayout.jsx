import { Stepper, Step, StepLabel } from "@mui/material";
import { useRouter } from "next/router";

export default function FlowLayout({ children }) {
  const router = useRouter();
  const steps = [
    { label: "Tickets", path: "/tickets" },
    { label: "Accomodations", path: "/accomodations" },
    { label: "Guests Info", path: "/guests" },
    { label: "Payment", path: "/payment" },
    { label: "Thanks", path: "/thanks" },
  ];

  // Find the current step based on the current route
  const currentStep = steps.findIndex((step) => router.pathname === step.path);

  return (
    <>
      <div>
        <p>Arrow</p>
        <p>Timer</p>
      </div>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {children}
    </>
  );
}
