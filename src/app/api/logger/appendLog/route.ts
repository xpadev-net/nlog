import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { z } from "zod";

const validate = z.object({
  taskId: z.number(),
  type: z.union([z.literal("out"), z.literal("err")]),
  message: z.string(),
});

export async function POST(request: Request) {
  const response = validate.safeParse(await request.json());
  if (!response.success) {
    return NextResponse.json({
      error: response.error,
    });
  }
  const input = response.data;
  const log = await db.log.create({
    data: {
      taskId: input.taskId,
      type: input.type,
      message: input.message ?? "",
    },
  });
  return NextResponse.json({
    logId: log.id,
  });
}
