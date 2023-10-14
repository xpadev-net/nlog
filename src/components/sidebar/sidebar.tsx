import { SidebarItem } from "~/components/sidebar/sidebar-item";

type props = {
  items: {
    name: string;
    href: string;
  }[];
};

const Sidebar = ({ items }: props) => {
  return (
    <ul className="menu p-4 w-60 bg-base-200 h-screen">
      {items.map((item) => {
        return (
          <SidebarItem name={item.name} href={item.href} key={item.href} />
        );
      })}
    </ul>
  );
};

export { Sidebar };
