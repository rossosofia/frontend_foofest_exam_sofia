import QuantityInputButton from "./QuantityInputButton";

export default function QuantityInput({
  value,
  onClickAdd,
  onClickRemove,
  canAddMoreTickets,
}) {
  return (
    <div>
      <label htmlFor="Quantity" className="sr-only">
        Quantity
      </label>

      <div className="flex items-center border border-gray-200 rounded">
        <QuantityInputButton
          onClick={onClickRemove}
          label="-"
          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
        />

        <input
          type="number"
          id="Quantity"
          value={value}
          className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <QuantityInputButton
          onClick={onClickAdd}
          disabled={!canAddMoreTickets}
          label="+"
          className={`w-10 h-10 leading-10 transition hover:opacity-75 ${
            canAddMoreTickets
              ? "text-gray-600"
              : "text-gray-300 cursor-not-allowed"
          }`}
        />
      </div>
    </div>
  );
}
