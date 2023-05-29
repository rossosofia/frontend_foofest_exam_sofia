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

  // Generate a random Unsplash URL immediately
  const [randomImageUrl] = useState(
    `https://source.unsplash.com/random/1200x600/?music,performance,concert,festival,bands?${Math.random()}`
  );

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-2xl bg-gradient-to-r from-custom-purple via-custom-yellow to-custom-red">
        <span className="animate-bounce200 text-8xl">.</span>
        <span className="animate-bounce400 text-8xl">.</span>
        <span className="animate-bounce600 text-8xl">.</span>
      </div>
    );
  }

  return (
    <Layout>
      <section className="flex flex-col md:flex-row items-start md:items-start p-10 gap-4 mt-20">
        <section className="md:w-1/2 flex flex-col justify-center align-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
              {band.name}
            </h1>
          </div>
          <div>
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

            <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-3xl  font-semibold text-white mb-2 mt-8">
              Genre
            </h2>
            <p className="mb-4 text-white">{band.genre}</p>

            <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-white mb-2 mt-8">
              Bio
            </h2>
            <p className="text-white">{band.bio}</p>
          </div>
        </section>

        <section className="md:w-1/2 flex justify-center align-center">
          <Image
            src="/band2.jpg"
            alt="Random Band Image"
            className="rounded mb-4"
            width={500}
            height={500}
            priority
          />
        </section>
      </section>
    </Layout>
  );
}
