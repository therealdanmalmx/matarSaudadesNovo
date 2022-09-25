const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  nextConfig,
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
  ...nextTranslate(),
};
