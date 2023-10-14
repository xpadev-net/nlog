import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { z } from "zod";

const validate = z.object({
  itemId: z.number(),
  issuer: z.string(),
  processId: z.number(),
  workDir: z.string(),
  command: z.string(),
});

export async function POST(request: Request) {
  const response = validate.safeParse(await request.json());
  if (!response.success) {
    return NextResponse.json({
      error: response.error,
    });
  }
  const input = response.data;
  const task = await db.task.create({
    data: {
      ...input,
      exitCode: 0,
    },
  });
  return NextResponse.json({
    taskId: task.id,
  });
}
