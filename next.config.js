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
      domains: ['benoplast.ozanuzer.com']
   },
   env: {
      API_URL: 'https://benoplast.ozanuzer.com/api',
      HOST_URL: 'https://www.benoplast.com'
   },
}

module.exports = nextConfig
