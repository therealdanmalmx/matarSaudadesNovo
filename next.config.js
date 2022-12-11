const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["cdn.shopify.com", "localhost", "matarsaudades.onrender.com"],
  },
  ...nextTranslate(),
};
