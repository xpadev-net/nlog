import z from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { observable } from "@trpc/server/observable";
import { logEmitter } from "~/utils/event";

type Log = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  taskId: number;
  type: string;
  message: string;
};

export const logsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ taskId: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.db.log.findMany({ where: { taskId: input.taskId } });
    }),
  onAdd: publicProcedure
    .input(z.object({ taskId: z.number() }))
    .subscription(({ input }) => {
      return observable<Log>((emit) => {
        const onAdd = (data: Log) => {
          emit.next(data);
        };
        logEmitter.on("add", onAdd);
        return () => {
          logEmitter.off("add", onAdd);
        };
      });
    }),
});
