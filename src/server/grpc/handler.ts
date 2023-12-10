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

const createTask: ILoggingServiceServer["createTask"] = (
  _: ServerUnaryCall<CreateTaskRequest, CreateTaskResponse>,
  callback: sendUnaryData<CreateTaskResponse>,
) => {
  console.log("[start]: createTask");

  const response = new CreateTaskResponse();
  response.setTaskid(1);

  callback(null, response);
  console.log("[end]: createTask");
};

const appendLog: ILoggingServiceServer["appendLog"] = (
  _: ServerUnaryCall<AppendLogRequest, AppendLogResponse>,
  callback: sendUnaryData<AppendLogResponse>,
) => {
  console.log("[start]: appendLog");

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
