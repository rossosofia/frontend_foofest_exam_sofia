import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Gallery() {
  const [bands, setBands] = useState(null);

  // Helper function to generate a random band name index
  const getRandomBand = () => {
    if (bands) {
      const randomIndex = Math.floor(Math.random() * bands.length);
      return bands[randomIndex];
    }
    return null;
  };

  // displaying random images in the gallery
  const galleryImages = Array.from({ length: 10 }, (_, index) => {
    const randomBand = getRandomBand();
    const imageNumber = Math.floor(Math.random() * 6) + 1;
    return {
      id: index,
      randomImageUrl: `https://source.unsplash.com/random/?music,performance,concert,festival,bands?grayscale?${
        index + 1
      }`,
      bandName: randomBand ? randomBand.name : "",
      bandSlug: randomBand ? randomBand.slug : "",
      imageNumber,
    };
  });

  // animate the gallery
  useEffect(() => {
    const scrollContainer = document.getElementById("galleryContainer");
    let scrollLeft = 0;

    const scrollGallery = () => {
      scrollLeft += 0.8;
      if (
        scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollLeft = 0;
      }
      scrollContainer.scrollLeft = scrollLeft;
      requestAnimationFrame(scrollGallery);
    };

    scrollGallery();
  }, []);

  // fetch band names
  useEffect(() => {
    const fetchData = () => {
      fetch("https://brazen-fortune-fight.glitch.me/bands")
        .then((response) => response.json())
        .then((data) => setBands(data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchData();
  }, []);

  return (
    <div
      id="galleryContainer"
      className="flex flex-nowrap overflow-x-auto overflow-y-scroll my-4 hide-scroll-bar"
    >
      {galleryImages.map((image) => (
        <div key={image.id} className="flex-shrink-0 w-96 md:w-120 relative">
          <div className="relative w-full h-96 md:h-120">
            <Link href={`/bands/${image.bandSlug}`}>
              <Image
                src={`/band${image.imageNumber}.jpg`}
                alt="Random images from Unsplash.com"
                layout="fill"
                objectFit="cover"
              />
            </Link>
          </div>
          <div className="text-white text-center mt-2 pt-4 text-2xl">
            {image.bandName}
          </div>
        </div>
      ))}
    </div>
  );
}
