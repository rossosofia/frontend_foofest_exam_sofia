export default function QuantityInput() {
  return (
    <div>
      <label htmlFor="Quantity" className="sr-only">
        Quantity
      </label>

      <div className="flex items-center border border-gray-200 rounded">
        <button
          type="button"
          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          -
        </button>

        <input
          type="number"
          id="Quantity"
          value="1"
          className="h-10 w-16 border-transparent text-center sm:text-sm"
        />

        <button
          type="button"
          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          +
        </button>
      </div>
    </div>
  );
}
