import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

const baseUrl = "https://brazen-fortune-fight.glitch.me";

export default function BandPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [band, setBand] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`${baseUrl}/bands/${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((bandData) => {
        setBand(bandData);
      })
      .catch(setError);
  }, [slug]);

  if (error) {
    return `An error occurred: ${error.message}`;
  }

  if (band === null) {
    return "Loading...";
  }

  // Generate a random Unsplash URL
  const randomImageUrl = `https://source.unsplash.com/500x300/?music?${Math.random()}`;

  return (
    <Layout>
      <section className="flex flex-col justify-between px-10 h-full">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white py-4 pt-10 mt-[5rem]">
            {band.name}
          </h1>
        </div>
      </section>
      <section className="flex flex-col justify-between px-10 h-full mb-8">
        <Image
          src={randomImageUrl}
          alt="Random Band Image"
          className="object-cover rounded mb-4"
          width={500}
          height={300}
        />

        {/* Updated styles */}
        <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-white mb-2">
          Members
        </h2>
        <ul className="list-disc list-inside mb-4 text-white">
          {band.members.map((member, index) => (
            <li key={index} className="mb-1">
              {member}
            </li>
          ))}
        </ul>

        {/* Updated styles */}
        <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-3xl  font-semibold text-white mb-2">
          Genre
        </h2>
        <p className="mb-4 text-white">{band.genre}</p>

        {/* Updated styles */}
        <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-white mb-2">
          Bio
        </h2>
        <p className="text-white">{band.bio}</p>
      </section>
    </Layout>
  );
}
