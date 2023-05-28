import Anchor from "@/components/Anchor";
import Image from "next/image";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <Layout>
      <Anchor
        href="/campingsite/"
        className="fixed bottom-5 right-5 text-2xl md:text-3xl z-50 "
      >
        <p className="font-normal text-sm">FooFest Extravaganza 2023</p>
        BUY TICKETS <span className="ml-2">→</span>
      </Anchor>
      <section className="h-screen w-screen flex flex-col justify-center items-center ">
        <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-white text-center py-4">
          FOOFEST <br /> EXTRAVAGANZA
        </h1>
        <p className="font-bold text-custom-purple text-center text-2xl md:text-4xl pb-2">
          1 - 7 July 2023
        </p>
        <p className="text-center text-custom-purple text-2xl md:text-4xl">
          Fantasy Island
        </p>
      </section>

      <section className="pb-10">
        <div className="flex flex-wrap gap-4 justify-between items-center my-10 py-10 px-10 pb-5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-custom-beige font-medium">
            FEATURED ARTISTS
          </h2>
          <Anchor href="/schedule/">
            FULL LINE-UP<span className="ml-2">→</span>
          </Anchor>
        </div>
        <Gallery></Gallery>
      </section>

      <section className="mx-auto h-[70vh] flex flex-col md:flex-row items-center justify-center py-10 px-10 mb-10">
        <div className="flex flex-col justify-between  mb-4 md:mb-0 md:mr-4 md:flex-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-custom-beige font-medium pb-5">
            JOIN THE COMMUNITY
          </h2>
          <p className="text-custom-beige w-full md:w-5/6 pb-8">
            Stay in tune with the latest updates, exclusive offers, and
            thrilling announcements from the heart of FooFest festival.
          </p>
          <div className="inline-block bg-custom-beige hover:bg-custom-beige border-2 border-custom-purple transition-transform duration-500 ease-in-out transform hover:-translate-x-1 hover:-translate-y-1 text-black my-4 py-6 px-6 rounded w-full md:w-5/6 ">
            <h3 className="text-1xl md:text-2xl font-semibold">
              Subscribe to our newsletter
            </h3>
            <form>
              <label className="flex flex-row justify-between pt-2">
                <input
                  className="bg-custom-beige grow focus:outline-none border-b-[1px] border-b-custom-purple placeholder-custom-purple text-custom-purple"
                  type="email"
                  name="emailaddress"
                  id="emailaddress"
                  placeholder="Your email"
                />
                <button>
                  <span className="text-4xl ml-2 text-custom-purple">→</span>
                </button>
              </label>
            </form>
          </div>
        </div>
        <div className="md:flex-1">
          <Image
            src="https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Random Unsplash Image"
            width={800}
            height={800}
          />
        </div>
      </section>
    </Layout>
  );
}
