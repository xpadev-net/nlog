import type { ILoggingServiceServer } from "~/proto/main_grpc_pb";
import type { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { type EndTaskRequest, EndTaskResponse } from "~/proto/main_pb";
import { z } from "zod";
import { db } from "~/server/db";

const validate = z.object({
  taskId: z.number(),
  exitCode: z.optional(z.number()),
});

const endTask: ILoggingServiceServer["endTask"] = (
  call: ServerUnaryCall<EndTaskRequest, EndTaskResponse>,
  callback: sendUnaryData<EndTaskResponse>,
) => {
  void (async () => {
    const params = {
      taskId: call.request.getTaskid(),
      exitCode: call.request.getExitcode(),
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
        exitCode: input.exitCode,
      },
    });
    const response = new EndTaskResponse();
    callback(null, response);
  })();
};
export { endTask };
