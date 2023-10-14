import { useRouter } from "next/router";
import Link from "next/link";
import type { ReactNode } from "react";

type props = {
  name: ReactNode;
  href: string;
};

const SidebarItem = ({ name, href }: props) => {
  const router = useRouter();
  return (
    <li>
      <Link
        href={href}
        className={router.asPath.startsWith(href) ? "active" : ""}
      >
        {name}
      </Link>
    </li>
  );
};

export { SidebarItem };
