import React from "react";

interface IPageScrollerProps {
  currentIndex: number;
  pageCount: number;
  hrefs: string[];
  setCurrentIndex: (index: number) => void;
}

const PageScroller: React.FC<IPageScrollerProps> = ({
  currentIndex,
  pageCount,
  hrefs,
  setCurrentIndex,
}) => {
  const renderItems = () => {
    let list: JSX.Element[] = [];

    for (let i = 0; i < pageCount; i++) {
      list.push(
        <li
          key={i}
          className={`page-scroll-item${currentIndex === i ? " active" : ""}`}
        >
          <a href={`#${hrefs[i] ?? i}`} onClick={() => setCurrentIndex(i)} />
        </li>
      );
    }

    return list;
  };

  return (
    <div className="page-scroller">
      <ul>{renderItems()}</ul>
    </div>
  );
};

export default React.memo(PageScroller);
