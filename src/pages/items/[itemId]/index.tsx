import { TaskCard } from "~/components/task-card";
import { api } from "~/utils/api";
import z from "zod";
import { useRouter } from "next/router";
import { ItemSidebar } from "~/components/item-sidebar";
import { useEffect, useRef } from "react";

const querySchema = z.object({
  itemId: z.preprocess((v) => Number(v), z.number()),
});

const ItemPage = () => {
  const router = useRouter();
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    list.current?.scrollTo(0, list.current.scrollHeight);
  }, []);

  const parsedQuery = querySchema.safeParse(router.query);
  if (!parsedQuery.success) {
    return <div>Invalid query</div>;
  }
  const query = parsedQuery.data;

  return (
    <div>
      <ItemSidebar />
      <ul className={"ml-[20rem] menu flex-nowrap h-screen"}>
        <li className="menu-title">Runs</li>
        <TaskCardViewer itemId={query.itemId} />
      </ul>
    </div>
  );
};

const TaskCardViewer = ({ itemId }: { itemId: number }) => {
  const list = useRef<HTMLDivElement>(null);

  const { data: tasks } = api.tasks.getAll.useQuery({ itemId });
  useEffect(() => {
    list.current?.scrollTo(0, list.current.scrollHeight);
  }, [tasks]);
  return (
    <div
      className={"flex flex-col gap-2 overflow-y-scroll max-h-full flex-grow-0"}
      ref={list}
    >
      {tasks?.map((task) => {
        return <TaskCard key={task.id} {...task} />;
      })}
    </div>
  );
};

export default ItemPage;
