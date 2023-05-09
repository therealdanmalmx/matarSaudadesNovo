const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['localhost'],
    loader: 'imgix',
    path: '',
  },
  ...nextTranslate(),
};
