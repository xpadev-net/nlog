import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const dashboardRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.item.findMany({
      include: {
        _count: {
          select: {
            tasks: {
              where: {
                exitCode: {
                  not: 0,
                },
                AND: {
                  checked: {
                    equals: false,
                  },
                },
              },
            },
          },
        },
        tasks: {
          orderBy: {
            id: "desc",
          },
          take: 1,
        },
      },
    });
  }),
});
