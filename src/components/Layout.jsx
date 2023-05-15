import Link from "next/link";
import Basket from "./Basket";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link href={"/"}> Home </Link>
        </nav>
      </header>
      <main>{children}</main>
      <Basket />
      <footer> Footer</footer>
    </>
  );
}
