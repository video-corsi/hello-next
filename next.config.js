/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    loader: 'akamai',
    path: '',
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.airtable.com/v0/appZFj1H7Cb1IiG4G/gadget/:path*',
      },
    ]
  },
}
