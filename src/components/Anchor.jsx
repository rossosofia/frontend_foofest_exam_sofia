import { useRouter } from "next/router";

export default function Anchor({ children, href, disabled, onClick }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();

    if (!disabled) {
      router.push(href);
      if (onClick) {
        onClick(e);
      }
    }
  }

  return (
    <a
      className={`inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
