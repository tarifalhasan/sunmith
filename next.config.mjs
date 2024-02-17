// const createNextIntlPlugin = require("next-intl/plugin");
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgs.search.brave.com"],
  },
};

export default withNextIntl(nextConfig);
