import FlowLayout from "@/components/FlowLayout";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function Payments() {
  const router = useRouter();
  function handleNext() {
    router.push("/thanks");
  }
  return (
    <FlowLayout>
      <h1>Step 4</h1>
      <p>This is the content for Step 4.</p>
      <Button variant="outlined" onClick={handleNext}>
        Reserve
      </Button>
    </FlowLayout>
  );
}
