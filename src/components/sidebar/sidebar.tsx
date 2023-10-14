import { SidebarItem } from "~/components/sidebar/sidebar-item";

type props = {
  items: {
    name: string;
    href: string;
  }[];
  className: string;
};

const Sidebar = ({ items, className }: props) => {
  return (
    <ul className={`menu w-60 bg-base-200 h-screen ${className}`}>
      {items.map((item) => {
        return (
          <SidebarItem name={item.name} href={item.href} key={item.href} />
        );
      })}
    </ul>
  );
};

export { Sidebar };
