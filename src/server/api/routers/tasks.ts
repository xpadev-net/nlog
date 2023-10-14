import z from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const tasksRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ itemId: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.db.task.findMany({ where: { itemId: input.itemId } });
    }),
});
