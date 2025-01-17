import type {NextConfig} from "next";

const hostnames = [
    'assets.aceternity.com',
    'images.unsplash.com',
    'yqxicxlxliqzxrzajydh.supabase.co'
];
const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: hostnames.map((hostname) => ({
            protocol: 'https',
            hostname,
        })),
    },
};

export default nextConfig;
