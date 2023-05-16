import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function Home() {
  const router = useRouter();
  function handleNext() {
    router.push("/campingsite");
  }
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-500 py-4">
        FooFest Extravaganza
      </h1>
      <Button variant="outlined" onClick={handleNext}>
        Go to campingsite
      </Button>
    </>
  );
}
