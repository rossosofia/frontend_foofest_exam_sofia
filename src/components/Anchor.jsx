import { useRouter } from "next/router";

 
//we do that so we dont download data we dont need 
export default function Anchor({ children, href, className, disabled }) {
    const router = useRouter();
  
    function handleClick(e) {
      e.preventDefault();
      if (!disabled) {
        router.push(href);
      }
    }
  
    return (
      <a
        className={`inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } ${className}`}
        href={href}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }
  