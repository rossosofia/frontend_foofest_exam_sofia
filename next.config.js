/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "brazen-fortune-fight.glitch.me",
      "images.unsplash.com",
      "source.unsplash.com",
      "placeimg.com",
    ],
  },
};

module.exports = nextConfig;
