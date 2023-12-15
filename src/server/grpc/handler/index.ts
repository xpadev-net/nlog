import type { ILoggingServiceServer } from "~/proto/main_grpc_pb";

import { createTask } from "./createTask";
import { appendLog } from "./appendLog";
import { endTask } from "./endTask";
import { ping } from "./ping";

export const getServerImplement = (): ILoggingServiceServer => {
  return {
    createTask,
    appendLog,
    endTask,
    ping,
  };
};
