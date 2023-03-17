// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },

  /**
   * Allows the use of Unspash images to the project
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
  },

  swcMinify: true,

  /**
   * Experimental features
   *
   * `appDir: true` enables the Next13 app routing. See https://beta.nextjs.org/docs/routing/fundamentals
   */
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['surrealdb.js']
  },
};
export default config;
