import NavBar from "@Atoms/NavBar";
import React from "react";

interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ ...props }: IPageLayoutProps) => {
  return (
    <>
      <NavBar
        links={[
          {
            label: "Overview",
            href: "/overview",
          },
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Contact me",
            href: "/contact",
          },
        ]}
      />
      <div className="body">{props.children}</div>
    </>
  );
};

export default React.memo(PageLayout);
