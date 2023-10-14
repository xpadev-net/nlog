import { TaskCard } from "~/components/task-card";
import { api } from "~/utils/api";
import { Sidebar } from "~/components/sidebar";
import z from "zod";
import { useRouter } from "next/router";

const querySchema = z.object({
  itemId: z.preprocess((v) => Number(v), z.number()),
});

const ItemPage = () => {
  const router = useRouter();

  const parsedQuery = querySchema.safeParse(router.query);
  if (!parsedQuery.success) {
    return <div>Invalid query</div>;
  }
  const query = parsedQuery.data;
  const { data: items } = api.items.getAll.useQuery();
  const { data: tasks } = api.tasks.getAll.useQuery({ itemId: query.itemId });
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
      <div className={"ml-[15rem]"}>
        {tasks?.map((task) => {
          return <TaskCard key={task.id} {...task} />;
        })}
      </div>
    </div>
  );
};

export default ItemPage;
