import type { ILoggingServiceServer } from "~/proto/main_grpc_pb";

import { createTask } from "./createTask";
import { appendLog } from "./appendLog";
import { endTask } from "./endTask";

export const getServerImplement = (): ILoggingServiceServer => {
  return {
    createTask,
    appendLog,
    endTask,
  };
};
