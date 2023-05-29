import FlowLayout from "@/components/FlowLayout";
import CreditCardForm from "@/components/CreditCard";
import Timer from "@/components/Timer";
import Basket from "@/components/Basket";

export default function Payments() {
  return (
    <FlowLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 max-w-7xl mx-auto items-start">
        <section>
          <Timer />
          <CreditCardForm />
        </section>
        <section>
          <Basket />
        </section>
      </div>
    </FlowLayout>
  );
}
