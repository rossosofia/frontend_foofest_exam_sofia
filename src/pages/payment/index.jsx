import FlowLayout from "@/components/FlowLayout";
import { useRouter } from "next/router";
import Anchor from "@/components/Anchor";
import CreditCardForm from "@/components/CreditCard";
import Timer from "@/components/Timer";

export default function Payments() {
  return (
    <FlowLayout>
      <Timer />
      <CreditCardForm />
    </FlowLayout>
  );
}
