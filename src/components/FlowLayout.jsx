import { useRouter } from "next/router";
import Basket from "./Basket";

export default function FlowLayout({ children }) {
  const router = useRouter();
  const steps = [
    { label: "Tickets", path: "/tickets" },
    { label: "Accommodations", path: "/accomodations" },
    { label: "Guests Info", path: "/guests" },
    { label: "Payment", path: "/payment" },
  ];

  // Find the current step based on the current route
  const currentStep = steps.findIndex((step) => router.pathname === step.path);

  return (
    <div className="m-5 p-5 flex flex-col h-screen ">
      <div className="flex-grow">
        <h2 className="sr-only">Steps</h2>
        <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
          <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
            {steps.map((step, index) => (
              <li
                key={step.label}
                className="flex items-center gap-2 bg-white p-2"
              >
                <span
                  className={`h-6 w-6 rounded-full text-center text-[10px]/6 font-bold ${
                    currentStep >= index ? "bg-black text-white" : "bg-gray-100"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="hidden sm:block"> {step.label} </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex-grow flex flex-col sm:flex-row gap-10">
        <div className="sm:w-1/2">{children}</div>
        <div className="sm:w-1/2">
          <Basket />
        </div>
      </div>
    </div>
  );
}
