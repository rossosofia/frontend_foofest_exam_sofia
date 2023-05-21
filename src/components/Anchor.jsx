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
      className={`inline-block bg-white hover:bg-gray-100 border-2 border-black transition-transform duration-500 ease-in-out transform hover:-translate-x-1 hover:-translate-y-1 text-black font-bold py-2 px-4 rounded ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
