import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { dashboardRouter } from "~/server/api/routers/dashboard";
import { tasksRouter } from "~/server/api/routers/tasks";
import { logsRouter } from "~/server/api/routers/logs";
import { itemsRouter } from "~/server/api/routers/items";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  dashboard: dashboardRouter,
  tasks: tasksRouter,
  logs: logsRouter,
  items: itemsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
