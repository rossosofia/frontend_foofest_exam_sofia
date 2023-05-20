import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="mx-auto container p-4">
      <h1 className="text-4xl mb-2">{band.name}</h1>
      <Image
        src={band.logo}
        alt={band.name}
        className="object-cover rounded mb-4"
        width={500}
        height={300}
      />
      <h2 className="text-2xl mb-2">Members</h2>
      <ul className="list-disc list-inside mb-4">
        {band.members.map((member, index) => (
          <li key={index} className="mb-1">
            {member}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl mb-2">Genre</h2>
      <p className="mb-4">{band.genre}</p>
      <h2 className="text-2xl mb-2">Bio</h2>
      <p>{band.bio}</p>
    </div>
  );
}
