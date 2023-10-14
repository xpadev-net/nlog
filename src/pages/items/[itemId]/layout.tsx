import { Sidebar } from "~/components/sidebar";
import type { ReactNode } from "react";

type props = {
  children: ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <>
      <Sidebar items={[{ name: "test", href: "/test" }]} />
      {children}
    </>
  );
};

export default Layout;
