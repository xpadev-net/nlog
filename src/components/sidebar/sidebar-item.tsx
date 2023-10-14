import { useRouter } from "next/router";
import Link from "next/link";
import type { ReactNode } from "react";

type props = {
  name: ReactNode;
  href: string;
};

const SidebarItem = ({ name, href }: props) => {
  const router = useRouter();
  const isActive =
    router.asPath === href || router.asPath.startsWith(href + "/");
  return (
    <li>
      <Link href={href} className={isActive ? "active" : ""}>
        {name}
      </Link>
    </li>
  );
};

export { SidebarItem };
