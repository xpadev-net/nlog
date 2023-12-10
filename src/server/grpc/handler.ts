import { type ILoggingServiceServer } from "~/proto/main_grpc_pb";
import {
  type AppendLogRequest,
  type AppendLogResponse,
  type CreateTaskRequest,
  CreateTaskResponse,
  type EndTaskRequest,
  type EndTaskResponse,
} from "~/proto/main_pb";
import { type sendUnaryData, type ServerUnaryCall } from "@grpc/grpc-js";
import { db } from "~/server/db";


const appendLog: ILoggingServiceServer["appendLog"] = (
  call: ServerUnaryCall<AppendLogRequest, AppendLogResponse>,
  callback: sendUnaryData<AppendLogResponse>,
) => {
  console.log("[start]: appendLog");
  const log = db.log.create({
    data: {
      taskId: call.request.getLog()?.getTaskid(),
      type: call.request.getType(),
      message: call.request.getMessage(),
    }
  })
  callback(null, null);
  console.log("[end]: appendLog");
};

const endTask: ILoggingServiceServer["endTask"] = (
  _: ServerUnaryCall<EndTaskRequest, EndTaskResponse>,
  callback: sendUnaryData<EndTaskResponse>,
) => {
  console.log("[start]: endTask");

  callback(null, null);
  console.log("[end]: endTask");
};

export const getServerImplement = (): ILoggingServiceServer => {
  return {
    createTask,
    appendLog,
    endTask,
  };
};
