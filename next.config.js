const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["localhost", " 127.0.0.1"],
  },
  ...nextTranslate(),
};
