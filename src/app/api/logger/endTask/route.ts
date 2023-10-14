import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { z } from "zod";

const validate = z.object({
  taskId: z.number(),
  exitCode: z.optional(z.number()),
});

export async function POST(request: Request) {
  const response = validate.safeParse(await request.json());
  if (!response.success) {
    return NextResponse.json({
      error: response.error,
    });
  }
  const input = response.data;
  await db.task.update({
    where: {
      id: input.taskId,
    },
    data: {
      exitCode: input.exitCode,
    },
  });
  return NextResponse.json({});
}
