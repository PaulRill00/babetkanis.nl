import React from "react";

type IPaddingSize = "small" | "narrow";

interface IPagePaddingProps {
  size: IPaddingSize;
  children: React.ReactNode;
}

const PagePadding: React.FC<IPagePaddingProps> = ({ size, children }) => {
  return (
    <div className={`page-padding page-padding-${size.toString()}`}>
      {children}
    </div>
  );
};

export default React.memo(PagePadding);
