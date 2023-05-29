import { useContext, useState } from "react";
import { StoreContext } from "@/context/storeContext";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMenuOpen } = useContext(StoreContext);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="py-5 px-10 sticky top-0 backdrop-filter backdrop-blur-md z-50 ">
        <nav className="flex justify-between items-center">
          <Link className="text-xl text-white font-bold" href={"/"}>
            FOOEXTRA
          </Link>
          {isOpen || isMenuOpen ? (
            <p
              className="text-xl text-white font-bold cursor-pointer relative z-50"
              onClick={closeMenu}
              href="/"
            >
              CLOSE
            </p>
          ) : (
            <p
              className="text-xl text-white font-bold cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              MENU
            </p>
          )}
        </nav>
      </header>

      {(isOpen || isMenuOpen) && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center backdrop-blur-md z-40 px-10">
          <div className="text-white z-50">
            <ul className="space-y-10">
              <li className="group">
                <Link
                  href="/schedule"
                  onClick={closeMenu}
                  className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold group-hover:opacity-50"
                >
                  LINE UP 2023
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/all-bands"
                  onClick={closeMenu}
                  className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold group-hover:opacity-50"
                >
                  ALL BANDS
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/campingsite"
                  onClick={closeMenu}
                  className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold group-hover:opacity-50"
                >
                  CAMPING SITE
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/campingsite"
                  onClick={closeMenu}
                  className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold group-hover:opacity-50"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
