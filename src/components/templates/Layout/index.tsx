import React from "react";

interface IPageLayoutProps {
  children: any;
}

const PageLayout = ({ ...props }: IPageLayoutProps) => {
  return <>{props.children}</>;
};

export default React.memo(PageLayout);
