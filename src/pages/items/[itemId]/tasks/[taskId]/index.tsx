import { api } from "~/utils/api";
import { useRouter } from "next/router";

import z from "zod";
import { ItemSidebar } from "~/components/item-sidebar/item-sidebar";
import { TaskSidebar } from "~/components/task-sidebar";
import { TaskDetail } from "~/components/task-detail";

import { block } from "million/react-server";

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
        {task && <LogViewerBlock task={task} />}
      </div>
    </div>
  );
};

const LogViewer = ({
  task,
}: {
  task: { logs: { id: number; type: string; message: string }[] };
}) => {
  return (
    <pre
      className={
        "whitespace-pre-wrap break-words max-w-full overflow-x-auto flex-grow bg-base-300"
      }
    >
      <code>
        {task?.logs.map((log) => {
          return (
            <p
              key={log.id}
              className={`${
                log.type === "err" && "bg-error text-error-content"
              } px-4`}
            >
              {log.message.replace(/^[\s\S]+\r.+$/, "")}
            </p>
          );
        })}
      </code>
    </pre>
  );
};
const LogViewerBlock = block(LogViewer);

export default TaskPage;
