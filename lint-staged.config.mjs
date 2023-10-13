export default {
  "src/**/*.{ts,tsx,json,scss,css}": [
    () => "npm run lint",
    () => "npm run check-types",
    () => "npm run format",
  ],
};
