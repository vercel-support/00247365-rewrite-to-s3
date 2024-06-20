/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/audits/:path*",
        destination:
          "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com/:path*",
      },
    ];
  },
};

export default nextConfig;
