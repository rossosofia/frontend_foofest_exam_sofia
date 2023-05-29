import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

const baseUrl = "https://brazen-fortune-fight.glitch.me";

export default function BandPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [loading, setLoading] = useState(true);

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
        setTimeout(() => {
          setBand(bandData);
          setLoading(false);
        }, 1200);
      })
      .catch(setError);
  }, [slug]);

  if (error) {
    return `An error occurred: ${error.message}`;
  }

  if (band === null) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-2xl bg-gradient-to-r from-custom-purple via-custom-yellow to-custom-red">
        <span className="animate-bounce200 text-8xl">.</span>
        <span className="animate-bounce400 text-8xl">.</span>
        <span className="animate-bounce600 text-8xl">.</span>
      </div>
    );
  }

  // Generate a random Unsplash URL
  const randomImageUrl = `https://source.unsplash.com/random/1200x600/?music,performance,concert,festival,bands?grayscale?${Math.random()}`;

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
          width={600}
          height={400}
          priority
        />

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

        <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-3xl  font-semibold text-white mb-2">
          Genre
        </h2>
        <p className="mb-4 text-white">{band.genre}</p>

        <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-white mb-2">
          Bio
        </h2>
        <p className="text-white">{band.bio}</p>
      </section>
    </Layout>
  );
}
