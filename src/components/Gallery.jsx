import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [bands, setBands] = useState(null);

  // Helper function to generate a random band name index
  const getRandomBandName = () => {
    const bandNames = bands ? bands.map((band) => band.name) : [];
    const randomIndex = Math.floor(Math.random() * bandNames.length);
    return bandNames[randomIndex];
  };

  // displaying random images in the gallery
  const galleryImages = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    randomImageUrl: `https://placeimg.com/720/480/nightlife?${index + 1}`,
    bandName: getRandomBandName(),
  }));

  // animate the gallery
  useEffect(() => {
    const scrollContainer = document.getElementById("galleryContainer");
    let scrollLeft = 0;

    const scrollGallery = () => {
      scrollLeft += 0.5;
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
      className="flex flex-nowrap overflow-x-auto overflow-y-hidden my-4 hide-scroll-bar"
    >
      {galleryImages.map((image) => (
        <div key={image.id} className="flex-shrink-0 w-96 md:w-120 relative">
          <div className="relative w-full h-96 md:h-120">
            <Image
              src={image.randomImageUrl}
              alt="Gallery Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-white text-center mt-2 pt-4 text-2xl">
            {image.bandName}
          </div>
        </div>
      ))}
    </div>
  );
}
