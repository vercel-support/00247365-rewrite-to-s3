/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/audits/:path*.:ext(svg|png|jpeg|jpg|css|js)",
          destination:
            "http://dedaub-audit-reports.s3-website.eu-central-1.amazonaws.com/:path*.:ext",
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
