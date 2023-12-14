import type { ILoggingServiceServer } from "~/proto/main_grpc_pb";
import type { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { type AppendLogRequest, AppendLogResponse, Log } from "~/proto/main_pb";
import { db } from "~/server/db";
import { z } from "zod";
import LogType = Log.LogType;

const validate = z.object({
  taskId: z.number(),
  type: z.union([z.literal("out"), z.literal("err")]),
  message: z.string(),
});

const appendLog: ILoggingServiceServer["appendLog"] = (
  call: ServerUnaryCall<AppendLogRequest, AppendLogResponse>,
  callback: sendUnaryData<AppendLogResponse>,
) => {
  void (async () => {
    const params = {
      taskId: call.request.getLog()?.getTaskid(),
      type:
        call.request.getLog()?.getType() === Log.LogType.STDOUT ? "out" : "err",
      message: call.request.getLog()?.getMessage(),
    };
    const data = validate.safeParse(params);
    if (!data.success) {
      callback(data.error, null);
      return;
    }
    const log = await db.log.create({
      data: data.data,
    });

    const response = new AppendLogResponse();

    response.setLogid(log.id);

    callback(null, response);
  })();
};

export { appendLog };
