import type { ILoggingServiceServer } from "~/proto/main_grpc_pb";
import type { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { type CreateTaskRequest, CreateTaskResponse } from "~/proto/main_pb";
import { db } from "~/server/db";
import { z } from "zod";

const validate = z.object({
  itemId: z.number(),
  issuer: z.string(),
  processId: z.number(),
  workDir: z.string(),
  command: z.string(),
});

const createTask: ILoggingServiceServer["createTask"] = (
  call: ServerUnaryCall<CreateTaskRequest, CreateTaskResponse>,
  callback: sendUnaryData<CreateTaskResponse>,
) => {
  void (async () => {
    console.log("[start]: createTask");

    const params = {
      itemId: call.request.getItemid(),
      issuer: call.request.getIssuer(),
      processId: call.request.getProcessid(),
      workDir: call.request.getWorkdir(),
      command: call.request.getCommand(),
      exitCode: 0,
    };
    const data = validate.safeParse(params);
    if (!data.success) {
      callback(data.error, null);
      return;
    }

    const task = await db.task.create({
      data: data.data,
    });

    const response = new CreateTaskResponse();
    response.setTaskid(task.id);

    callback(null, response);
    console.log("[end]: createTask");
  })();
};

export { createTask };
