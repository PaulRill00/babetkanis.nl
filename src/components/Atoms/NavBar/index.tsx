import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface INavBarProps {
  links: ILinkItem[];
}

interface ILinkItem {
  label: string;
  href: string;
}

const NavBar: React.FC<INavBarProps> = ({ links }) => {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <nav>
      <ul>
        {links.map((link, i) => (
          <li key={i} className={currentPage === link.href ? "active" : ""}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(NavBar);
