import FlowLayout from "@/components/FlowLayout";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function Accomodations() {
  const router = useRouter();
  function handleNext() {
    router.push("/guests");
  }
  return (
    <FlowLayout>
      <h1>Step 2</h1>
      <p>This is the content for Step 2.</p>
      <Button variant="outlined" onClick={handleNext}>
        Go to guest
      </Button>
    </FlowLayout>
  );
}
