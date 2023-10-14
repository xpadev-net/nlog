import { useRouter } from "next/router";
import Link from "next/link";

type props = {
  name: string;
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
