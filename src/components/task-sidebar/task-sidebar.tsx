import { api } from "~/utils/api";
import { Sidebar } from "~/components/sidebar";
import { SidebarItem } from "~/components/sidebar/sidebar-item";

type props = {
  itemId: number;
};

const TaskSidebar = ({ itemId }: props) => {
  const { data: tasks } = api.tasks.getAll.useQuery({ itemId });
  return (
    <Sidebar className={"fixed left-80 top-0 bg-base-200 flex-nowrap"}>
      <li className="menu-title">Runs</li>
      <div className={"flex flex-col overflow-y-scroll max-h-full flex-grow-0"}>
        {tasks?.map((item) => {
          const isRunning =
            item.createdAt.getTime() === item.updatedAt.getTime();
          return (
            <SidebarItem
              name={
                <div className={"flex flex-col gap-2"}>
                  <span>
                    #{item.id} {item.command}
                  </span>
                  {isRunning && (
                    <div className="badge badge-secondary gap-2">
                      <div className={"flex flex-row items-center gap-1"}>
                        <span className="loading loading-ring loading-xs"></span>
                        Running
                      </div>
                    </div>
                  )}
                </div>
              }
              href={`/items/${item.itemId}/tasks/${item.id}`}
              key={item.id}
            />
          );
        })}
      </div>
    </Sidebar>
  );
};

export { TaskSidebar };
