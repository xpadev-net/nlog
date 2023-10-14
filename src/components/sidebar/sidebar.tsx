import type { ReactNode } from "react";

type props = {
  children: ReactNode;
  className: string;
};

const Sidebar = ({ children, className }: props) => {
  return <ul className={`menu w-60 h-screen ${className}`}>{children}</ul>;
};

export { Sidebar };
