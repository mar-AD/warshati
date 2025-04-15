// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// next.config.js
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
/** @type {import('next'). NextConfig} */
const nextConfig = {};
export default withNextIntl (nextConfig);