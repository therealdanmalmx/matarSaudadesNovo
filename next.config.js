const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['localhost', 'localhost:1337'],
  },
  ...nextTranslate(),
};
