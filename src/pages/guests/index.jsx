import FlowLayout from "@/components/FlowLayout";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function Guests() {
  const router = useRouter();
  function handleNext() {
    router.push("/payment");
  }
  return (
    <FlowLayout>
      <h1>Step 3</h1>
      <p>This is the content for Step 3.</p>
      <Button variant="outlined" onClick={handleNext}>
        Go to payment
      </Button>
    </FlowLayout>
  );
}
