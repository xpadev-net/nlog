import type { ReactNode } from "react";

type props = {
  children: ReactNode;
  className: string;
};

const Sidebar = ({ children, className }: props) => {
  return <ul className={`menu w-80 h-screen ${className}`}>{children}</ul>;
};

export { Sidebar };
