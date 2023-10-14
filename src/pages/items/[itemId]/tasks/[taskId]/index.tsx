import { api } from "~/utils/api";
import { useRouter } from "next/router";

import z from "zod";
import { ItemSidebar } from "~/components/item-sidebar/item-sidebar";
import { TaskSidebar } from "~/components/task-sidebar";
import { TaskDetail } from "~/components/task-detail";

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

  const { data: task } = api.tasks.getTask.useQuery({ taskId: query.taskId });

  return (
    <div>
      <ItemSidebar />
      <TaskSidebar itemId={query.itemId} />
      <div className="ml-[30rem] h-screen flex flex-col">
        {task && <TaskDetail task={task} />}
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
                  {log.message}
                </p>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TaskPage;
