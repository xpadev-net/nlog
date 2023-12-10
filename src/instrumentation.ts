import { startServer } from "~/server/grpc";

console.log("instrumentation.ts triggered");

export const register = () => {
  console.log("register triggered");
  startServer();
};
