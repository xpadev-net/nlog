import { api } from "~/utils/api";
import { Sidebar } from "~/components/sidebar";
import { SidebarItem } from "~/components/sidebar/sidebar-item";

type props = {
  itemId: number;
};

const TaskSidebar = ({ itemId }: props) => {
  const { data: tasks } = api.tasks.getAll.useQuery({ itemId });
  return (
    <Sidebar className={"fixed left-60 top-0 bg-base-200"}>
      <li className="menu-title">Runs</li>
      {tasks?.map((item) => {
        return (
          <SidebarItem
            name={
              <>
                #{item.id} {item.command}
              </>
            }
            href={`/items/${item.itemId}/tasks/${item.id}`}
            key={item.id}
          />
        );
      })}
    </Sidebar>
  );
};

export { TaskSidebar };
