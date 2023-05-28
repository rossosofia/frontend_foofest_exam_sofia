import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="mt-[-5rem] bg-gradient-to-r from-custom-purple via-custom-yellow to-custom-red overflow-hidden">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
