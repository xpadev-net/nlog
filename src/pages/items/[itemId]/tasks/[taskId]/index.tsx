import { api } from "~/utils/api";
import { useRouter } from "next/router";

import z from "zod";
import { ItemSidebar } from "~/components/item-sidebar/item-sidebar";
import { TaskSidebar } from "~/components/task-sidebar";
import { TaskDetail } from "~/components/task-detail";

import { block } from "million/react-server";
import { useEffect, useState } from "react";
import type { Log } from "@prisma/client";

const querySchema = z.object({
  itemId: z.preprocess((v) => Number(v), z.number()),
  taskId: z.preprocess((v) => Number(v), z.number()),
});

const TaskPage = () => {
  const router = useRouter();

  const parsedQuery = querySchema.safeParse(router.query);
  if (!parsedQuery.success) {
    return <div>Invalid query</div>;
  }
  const query = parsedQuery.data;

  const { data: task, isLoading } = api.tasks.getTask.useQuery({
    taskId: query.taskId,
  });

  return (
    <div>
      <ItemSidebar />
      <TaskSidebar itemId={query.itemId} />
      <div className="ml-[40rem] h-screen flex flex-col">
        {isLoading && (
          <div className={"grid place-items-center h-screen"}>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        {task && <TaskDetail task={task} />}
        {task && <LogViewerBlock taskId={task.id} />}
      </div>
    </div>
  );
};

const LogViewer = ({ taskId }: { taskId: number }) => {
  const [logs, setLogs] = useState<Log[]>([]);
  const _logs = api.logs.getAll.useQuery({ taskId });
  useEffect(() => {
    if (!_logs.data) return;
    setLogs(_logs.data);
  }, [_logs]);
  const ref = api.logs.onAdd.useSubscription(
    { taskId },
    {
      onData(data) {
        console.log(data);
        setLogs((logs) => [...logs, data]);
      },
    },
  );
  console.log(ref);
  return (
    <pre
      className={
        "whitespace-pre-wrap break-words max-w-full overflow-x-auto flex-grow bg-base-300"
      }
    >
      <code>
        {logs?.map((log) => {
          return (
            <p
              key={log.id}
              className={`${
                log.type === "err" && "bg-error text-error-content"
              } px-4`}
            >
              {log.message.replace(/^[\s\r\n]*[\r\n](.+?)$/, "$1")}
            </p>
          );
        })}
      </code>
    </pre>
  );
};
const LogViewerBlock = block(LogViewer, { ssr: false });

export default TaskPage;
