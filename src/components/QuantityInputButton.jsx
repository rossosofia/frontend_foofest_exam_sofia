export default function QuantityInputButton({
  onClick,
  disabled,
  label,
  className,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      type="button"
    >
      {label}
    </button>
  );
}
