import { api } from "~/utils/api";
import { useRouter } from "next/router";

import z from "zod";
import { ItemSidebar } from "~/components/item-sidebar/item-sidebar";
import { TaskSidebar } from "~/components/task-sidebar";

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

  const { data: logs } = api.logs.getAll.useQuery({ taskId: query.taskId });

  return (
    <div>
      <ItemSidebar />
      <TaskSidebar itemId={query.itemId} />
      <div className="ml-[30rem]">
        <pre
          className={"whitespace-pre-wrap break-words flex-grow-0 max-w-full"}
        >
          <code>
            {logs?.map((log) => {
              return (
                <p
                  key={log.id}
                  className={`${
                    log.type === "out"
                      ? "bg-base-100"
                      : "bg-error text-error-content"
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
