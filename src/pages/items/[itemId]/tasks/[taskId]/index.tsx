import { api } from "~/utils/api";
import { Sidebar } from "~/components/sidebar";
import { useRouter } from "next/router";

import z from "zod";

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

  const { data: items } = api.items.getAll.useQuery();
  const { data: tasks } = api.tasks.getAll.useQuery({ itemId: query.itemId });
  const { data: logs } = api.logs.getAll.useQuery({ taskId: query.taskId });

  return (
    <div>
      <Sidebar
        items={
          items?.map((task) => {
            return {
              name: task.name,
              href: `/items/${task.id}`,
            };
          }) ?? []
        }
        className={"fixed left-0 top-0"}
      />
      <Sidebar
        items={
          tasks?.map((task) => {
            return {
              name: task.command,
              href: `/items/${task.itemId}/tasks/${task.id}`,
            };
          }) ?? []
        }
        className={"fixed left-60 top-0"}
      />
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
