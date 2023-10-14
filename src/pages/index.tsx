import { api } from "~/utils/api";
import { ItemCard } from "~/components/item-card";

export default function Home() {
  const { data: items } = api.dashboard.getAll.useQuery();

  return (
    <div className={"flex justify-center"}>
      <div className={"w-10/12 min-w-max"}>
        {items?.map((item) => {
          return (
            <div key={item.id}>
              <ItemCard
                name={item.name}
                lastExecuted={item.tasks[0]?.createdAt}
                errorCount={item._count.tasks}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
