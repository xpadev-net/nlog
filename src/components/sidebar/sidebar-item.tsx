import { useRouter } from "next/router";
import Link from "next/link";
import { type ReactNode, useEffect, useRef } from "react";

type props = {
  name: ReactNode;
  href: string;
};

const SidebarItem = ({ name, href }: props) => {
  const router = useRouter();
  const isActive =
    router.asPath === href || router.asPath.startsWith(href + "/");
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (!isActive) return;
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [href]);
  return (
    <li ref={ref}>
      <Link href={href} className={isActive ? "active" : ""}>
        {name}
      </Link>
    </li>
  );
};

export { SidebarItem };
