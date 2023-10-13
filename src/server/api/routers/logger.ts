import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const loggerRouter = createTRPCRouter({
  createTask: publicProcedure
    .input(
      z.object({
        itemId: z.number(),
        issuer: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const task = await ctx.db.task.create({
        data: {
          itemId: input.itemId,
          issuer: input.issuer,
        },
      });
      return {
        taskId: task.id,
      };
    }),
  endTask: publicProcedure
    .input(
      z.object({
        taskId: z.number(),
        exitCode: z.optional(z.number()),
      }),
    )
    .query(async ({ ctx, input }) => {
      await ctx.db.task.update({
        where: {
          id: input.taskId,
        },
        data: {
          exitCode: input.exitCode,
        },
      });
    }),
  appendLog: publicProcedure
    .input(
      z.object({
        taskId: z.number(),
        type: z.union([z.literal("out"), z.literal("err")]),
        message: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const log = await ctx.db.log.create({
        data: {
          taskId: input.taskId,
          type: input.type,
          message: input.message,
        },
      });
      return {
        logId: log.id,
      };
    }),
});
