module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${process.env.BACKEND_URL}/:path*`,
      },
    ];
  },
};
