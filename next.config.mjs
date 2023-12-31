/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import million from "million/compiler";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  publicRuntimeConfig: {
    APP_URL: process.env.APP_URL,
    WS_URL: process.env.WS_URL,
  },
};

export default million.next(nextConfig);
