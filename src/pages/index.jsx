import Anchor from "@/components/Anchor";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Anchor href="/campingsite/" className="fixed bottom-5 right-5 text-2xl">
        BUY TICKETS <span className="ml-2">→</span>
      </Anchor>
      <section className=" mx-auto h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-black-500 py-4">
          FOOFEST EXTRAVAGANZA
        </h1>
        <p className="font-bold text-center text-2xl pb-2">1 - 7 July 2023</p>
        <p className="text-center text-2xl">Fantasy Island</p>
      </section>

      <section className="pl-5 pr-5">
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

      <section className="flex items-center my-4 pl-5 pr-5">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Join the Community</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div className="flex-1 relative">
          <Image
            src="https://images.unsplash.com/photo-1684495498026-3419b55bdbac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
            alt="Random Unsplash Image"
            width={200}
            height={600}
          />
        </div>
      </section>
    </>
  );
}
