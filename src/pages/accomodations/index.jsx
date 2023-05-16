import FlowLayout from "@/components/FlowLayout";
import Anchor from "@/components/Anchor";

export default function Accomodations() {
  return (
    <FlowLayout>
      <h1>Step 2</h1>
      <p>This is the content for Step 2.</p>
      <Anchor
        href="/guests/"
        className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500"
      >
        GO TO GUESTS
      </Anchor>
    </FlowLayout>
  );
}
