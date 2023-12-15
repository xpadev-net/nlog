import type { ILoggingServiceServer } from "~/proto/main_grpc_pb";
import type { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { type PingRequest, PingResponse } from "~/proto/main_pb";
import { z } from "zod";
import { db } from "~/server/db";

const validate = z.object({
  taskId: z.number(),
});

const ping: ILoggingServiceServer["ping"] = (
  call: ServerUnaryCall<PingRequest, PingResponse>,
  callback: sendUnaryData<PingResponse>,
) => {
  void (async () => {
    const params = {
      taskId: call.request.getTaskid(),
    };
    const data = validate.safeParse(params);
    if (!data.success) {
      callback(data.error, null);
      return;
    }
    const input = data.data;
    await db.task.update({
      where: {
        id: input.taskId,
      },
      data: {
        updatedAt: new Date(),
      },
    });
    const response = new PingResponse();
    callback(null, response);
  })();
};
export { ping };
