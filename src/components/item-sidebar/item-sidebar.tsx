import { api } from "~/utils/api";
import { Sidebar } from "~/components/sidebar";
import { SidebarItem } from "~/components/sidebar/sidebar-item";

const ItemSidebar = () => {
  const { data: items } = api.items.getAll.useQuery();
  const parts =
    items?.map((task) => {
      return {
        name: task.name,
        href: `/items/${task.id}`,
      };
    }) ?? [];
  return (
    <Sidebar className={"fixed left-0 top-0 bg-base-300"}>
      <li className="menu-title">Items</li>
      {parts.map((item) => {
        return (
          <SidebarItem name={item.name} href={item.href} key={item.href} />
        );
      })}
    </Sidebar>
  );
};

export { ItemSidebar };
