import z from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const logsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ taskId: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.db.log.findMany({ where: { taskId: input.taskId } });
    }),
});
