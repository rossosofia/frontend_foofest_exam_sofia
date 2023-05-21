import FlowLayout from "@/components/FlowLayout";
import { useRouter } from "next/router";
import Anchor from "@/components/Anchor";

export default function Payments() {
  return (
    <FlowLayout>
      <h1>Step 4</h1>
      <p>This is the content for Step 4.</p>
      <Anchor href="/thanks/">PAY</Anchor>
    </FlowLayout>
  );
}
