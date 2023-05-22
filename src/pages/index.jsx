import Anchor from "@/components/Anchor";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Anchor
        href="/campingsite/"
        className="fixed bottom-5 right-5 text-2xl z-50"
      >
        BUY TICKETS <span className="ml-2">→</span>
      </Anchor>
      <section
        className="mx-auto h-[70vh] flex flex-col justify-center items-center 
    bg-gradient-to-r from-custom-purple via-custom-beige to-custom-red"
      >
        <h1 className="text-4xl font-bold text-center text-black-500 py-4">
          FOOFEST EXTRAVAGANZA
        </h1>
        <p className="font-bold text-center text-2xl pb-2">1 - 7 July 2023</p>
        <p className="text-center text-2xl">Fantasy Island</p>
      </section>

      <section className="pl-5 pr-5 border-t-2 border-black ">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-bold">Featured Artists</h2>
          <Anchor href="/schedule/">
            FULL LINE-UP<span className="ml-2">→</span>
          </Anchor>
        </div>
        <div className="flex overflow-x-auto my-4">
          <div className="flex-shrink-0 w-64 h-64 m-2 bg-gray-300"></div>
          <div className="flex-shrink-0 w-64 h-64 m-2 bg-gray-300"></div>
          <div className="flex-shrink-0 w-64 h-64 m-2 bg-gray-300"></div>
          <div className="flex-shrink-0 w-64 h-64 m-2 bg-gray-300"></div>
          <div className="flex-shrink-0 w-64 h-64 m-2 bg-gray-300"></div>
        </div>
      </section>

      <section className="mx-auto h-[70vh] flex flex-col md:flex-row items-center justify-center my-4 p-5 border-t-2 border-black">
        <div className="mb-4 md:mb-0 md:mr-4 md:flex-1">
          <h2 className="text-2xl font-bold">Join the Community</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div className="md:flex-1 ">
          <Image
            src="https://images.unsplash.com/photo-1684346819553-11174cbc8f05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            alt="Random Unsplash Image"
            width={400}
            height={400}
          />
        </div>
      </section>
    </Layout>
  );
}
