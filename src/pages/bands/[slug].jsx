import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

const baseUrl = "https://brazen-fortune-fight.glitch.me";

// The default Unsplash image URL to use if the band's logo URL is not valid
const defaultImageUrl = "https://placeimg.com/720/480/nightlife?12881";

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
        const logoUrl = bandData.logo.startsWith("http")
          ? bandData.logo
          : defaultImageUrl;
        bandData.logo = logoUrl;
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

  return (
    <Layout>
      <section className="flex flex-col justify-between px-10 h-full">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white py-4 pt-10 mt-[5rem]">
            {band.name}
          </h1>
        </div>
      </section>
      <div className="mx-auto container p-4">
        <Image
          src={band.logo}
          alt={band.logoCredits ? band.logoCredits : band.name}
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
      </div>
    </Layout>
  );
}
