import Link from "next/link";
import Basket from "./Basket";

export default function Layout({ children }) {
  return (
    <>
      <header className="m-5">
        <nav className="flex justify-between items-center">
          <Link className="text-xl font-bold" href={"/"}>
            FOOEXTRA
          </Link>
          <p className="text-xl font-bold">MENU</p>
        </nav>
      </header>
      <main>{children}</main>
      <Basket />
      <footer> Footer</footer>
    </>
  );
}
