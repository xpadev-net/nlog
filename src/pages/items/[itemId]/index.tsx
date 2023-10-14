import { TaskCard } from "~/components/task-card";
import { api } from "~/utils/api";
import z from "zod";
import { useRouter } from "next/router";
import { ItemSidebar } from "~/components/item-sidebar";

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
  const { data: tasks } = api.tasks.getAll.useQuery({ itemId: query.itemId });
  return (
    <div>
      <ItemSidebar />
      <ul className={"ml-[15rem] menu "}>
        <li className="menu-title">Tasks</li>
        <div className={"flex flex-col gap-2"}>
          {tasks?.map((task) => {
            return <TaskCard key={task.id} {...task} />;
          })}
        </div>
      </ul>
    </div>
  );
};

export default ItemPage;
