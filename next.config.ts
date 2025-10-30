const domain = process.env.NEXT_PUBLIC_SITE_URL as string;
const apiHostname = new URL(domain).hostname;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: apiHostname,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
