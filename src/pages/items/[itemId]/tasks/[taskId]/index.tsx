import { api } from "~/utils/api";
import { useRouter } from "next/router";

import z from "zod";
import { ItemSidebar } from "~/components/item-sidebar/item-sidebar";
import { TaskSidebar } from "~/components/task-sidebar";
import { TaskDetail } from "~/components/task-detail";

import { block } from "million/react-server";
import { type FC, useEffect, useMemo, useRef, useState } from "react";
import type { Log } from "@prisma/client";
import { parseAnsi } from "~/utils/ansi";

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
        {task && (
          <>
            <TaskDetail task={task} />
            <LogViewerBlock taskId={task.id} />
          </>
        )}
      </div>
    </div>
  );
};

const LogViewer = ({ taskId }: { taskId: number }) => {
  const list = useRef<HTMLPreElement>(null);
  const timeoutRef = useRef<number>();
  const [logs, setLogs] = useState<Log[]>([]);
  const _logs = api.logs.getAll.useQuery({ taskId });

  const reFetch = () => {
    void _logs?.refetch();
  };

  useEffect(() => {
    if (!_logs.data) return;
    if (!list.current) return;
    const isBottom =
      list.current.scrollTop + list.current.clientHeight ===
      list.current.scrollHeight;
    const scrollTop = list.current.scrollTop;
    if (_logs.data.length === logs.length) {
      return;
    }
    setLogs(_logs.data);
    setTimeout(() => {
      if (isBottom) {
        list.current?.scrollTo(0, list.current.scrollHeight);
        console.log("refetch: set timeout");
        timeoutRef.current = window.setTimeout(reFetch, 10000);
      } else {
        timeoutRef.current = -1;
        list.current?.scrollTo(0, scrollTop);
      }
    }, 0);
  }, [_logs, logs]);

  useEffect(() => {
    console.log("on mount: set timeout");
    timeoutRef.current = window.setTimeout(reFetch, 10000);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  const onScrollEnd = () => {
    if ((timeoutRef.current ?? 0) > -1 || !list.current) return;
    const isBottom =
      list.current.scrollTop + list.current.clientHeight ===
      list.current.scrollHeight;
    if (isBottom) {
      console.log("scroll end: set timeout");
      timeoutRef.current = window.setTimeout(reFetch, 1000);
    }
  };
  return (
    <pre
      className={
        "whitespace-pre-wrap break-words max-w-full overflow-x-auto flex-grow bg-base-300"
      }
      ref={list}
      onScroll={onScrollEnd}
    >
      <code className={"flex flex-col"}>
        {logs?.map((log) => {
          return (
            <LogLine
              key={log.id}
              content={log.message}
              isError={log.type === "err"}
            />
          );
        })}
      </code>
    </pre>
  );
};
const LogViewerBlock = block(LogViewer, { ssr: false });

const LogLine: FC<{ content: string; isError: boolean }> = ({
  content,
  isError,
}) => {
  const message = useMemo(() => {
    const line = content.replace(/^[\s\r\n]*[\r\n](.+?)$/, "$1");
    const parsed = parseAnsi(line);
    return (
      <>
        {parsed.map((part, index) => {
          return (
            <span
              key={index}
              className={`${part.foreground} ${part.background} ${
                part.bold && "font-bold"
              }`}
            >
              {part.text}
            </span>
          );
        })}
      </>
    );
  }, [content]);
  return (
    <span className={`${isError && "bg-error text-error-content"} px-4`}>
      {message}
    </span>
  );
};

export default TaskPage;
