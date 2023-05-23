import { Stepper, Step, StepLabel } from "@mui/material";
import { useRouter } from "next/router";
import Basket from "./Basket";
import Timer from "./Timer";

export default function FlowLayout({ children }) {
  const router = useRouter();
  const steps = [
    { label: "Tickets", path: "/tickets" },
    { label: "Accomodations", path: "/accomodations" },
    { label: "Guests Info", path: "/guests" },
    { label: "Payment", path: "/payment" },
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
      <Timer />
      {children}
      <Basket />
    </>
  );
}
