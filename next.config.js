const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  i18n: { locales: ["en-US"], defaultLocale: "en-US" },
  images: { domains: ["github.com"] },

  webpack(config, { dev, isServer }) {
    // Replace React with Preact in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};

module.exports = withPlugins(
  [[withPWA, { pwa: { disable: false, dest: "public", runtimeCaching } }]],
  nextConfig
);
