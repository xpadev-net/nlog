import type {ILoggingServiceServer} from "~/proto/main_grpc_pb";
import type {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import type {AppendLogRequest, AppendLogResponse} from "~/proto/main_pb";
import {db} from "~/server/db";
import {z} from "zod";
import {NextResponse} from "next/server";

const validate = z.object({
  taskId: z.number(),
  type: z.union([z.literal("out"), z.literal("err")]),
  message: z.string(),
});

const appendLog: ILoggingServiceServer["appendLog"] = (
  call: ServerUnaryCall<AppendLogRequest, AppendLogResponse>,
  callback: sendUnaryData<AppendLogResponse>,
) => {
  const params = {
    taskId: call.request.getLog()?.getTaskid(),
    type: call.request.getLog()?.getType(),
    message: call.request.getLog()?.getMessage(),
  }
  const data = validate.safeParse(params);
  if (!data.success) {
    return NextResponse.json({
      error: data.error,
    });
  }
  const log = db.log.create({
    data: data.data
  })
  
  const response = new AppendLogResponse();
  
  response.
  
  callback(null, null);
};

export {appendLog}