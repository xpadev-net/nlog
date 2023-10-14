import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import z from "zod";

export const itemsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.item.findMany();
  }),
  createItem: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.item.create({
        data: {
          name: input.name,
        },
      });
    }),
});
