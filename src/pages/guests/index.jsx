import FlowLayout from "@/components/FlowLayout";
import Anchor from "@/components/Anchor";

export default function Guests() {
  return (
    <FlowLayout>
      <h1>Step 3</h1>
      <p>This is the content for Step 3.</p>
      <Anchor
        href="/payment/"
        className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500"
      >
        GO TO PAYMENT
      </Anchor>
    </FlowLayout>
  );
}
