const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['localhost', 'localhost:1337', 'matarsaudades-dh80.onrender.com'],
    loader: 'default',
  },
  ...nextTranslate(),
};
