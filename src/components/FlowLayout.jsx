import { Stepper, Step, StepLabel } from "@mui/material";
import { useRouter } from "next/router";
import Basket from "./Basket";
import Anchor from "./Anchor";

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
    <div className="m-10 p-5">
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="mt-5">{children}</div>
      <Basket />
    </div>
  );
}
