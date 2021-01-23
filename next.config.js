const withPlugins = require("next-compose-plugins");

// const isProd = process.env.NODE_ENV === "production";

module.exports = withPlugins([], {
  i18n: { locales: ["en-US"], defaultLocale: "en-US" },
  images: { domains: ["github.com"] },

  // webpack(config, { dev, isServer }) {
  //   // Replace React with Preact in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: "preact/compat",
  //       "react-dom/test-utils": "preact/test-utils",
  //       "react-dom": "preact/compat",
  //     });
  //   }
  //
  //   return config;
  // },
});
