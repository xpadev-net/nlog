import { useRouter } from "next/router";
import Link from "next/link";

type props = {
  name: string;
  href: string;
};

const SidebarItem = ({ name, href }: props) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <li>
      <Link href={href} className={router.asPath === href ? "active" : ""}>
        {name}
      </Link>
    </li>
  );
};

export { SidebarItem };