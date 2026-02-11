import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sequelize', 'pg', 'pg-hstore'],
  },
};

export default nextConfig;
