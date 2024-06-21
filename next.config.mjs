/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/audits/:path*.svg",
          destination:
            "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com/:path*.svg",
        },
        {
          source: "/audits/:path*.png",
          destination:
            "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com/:path*.png",
        },
        {
          source: "/audits/:path*.jpeg",
          destination:
            "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com/:path*.jpeg",
        },
        {
          source: "/audits/:path*.jpg",
          destination:
            "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com/:path*.jpg",
        },
        {
          source: "/audits/:path*.css",
          destination:
            "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com/:path*.css",
        },
        {
          source: "/audits/:path*.js",
          destination:
            "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com/:path*.js",
        },
        {
          source: "/audits",
          destination:
            "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com",
        },
        {
          source: "/audits/:path*",
          destination:
            "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com/:path*/index.html",
        },
      ],
    };
  },
};

export default nextConfig;
