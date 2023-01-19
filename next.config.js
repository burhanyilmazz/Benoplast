/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   swcMinify: true,
   experimental: {
      images: {
         unoptimized: true,
      },
      styledComponents: true
   },
   images: {
      domains: ['panel.benoplast.com', 'www.benoplast.com', 'benoplast.com', 'volde.ozanuzer.com']
   },
   env: {
      API_URL: 'https://panel.benoplast.com/api',
      HOST_URL: 'https://www.benoplast.com'
   },
}

module.exports = nextConfig
