import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

interface IPageScrollerProps {
  currentIndex: number;
  pageCount: number;
  setCurrentIndex: (index: number) => void;
  hrefs?: string[];
  orientation?: "horizontal" | "vertical";
  controls?: boolean;
}

const PageScroller: React.FC<IPageScrollerProps> = ({
  currentIndex,
  pageCount,
  setCurrentIndex,
  hrefs = [],
  orientation = "vertical",
  controls = false,
}) => {
  const moveLeft = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);
  };

  const moveRight = () => {
    setCurrentIndex(
      currentIndex < pageCount - 1 ? currentIndex + 1 : currentIndex
    );
  };

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
    <div className={`page-scroller ${orientation}`}>
      {controls && (
        <FontAwesomeIcon icon={faArrowCircleLeft} onClick={() => moveLeft()} />
      )}
      <ul>{renderItems()}</ul>

      {controls && (
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          onClick={() => moveRight()}
        />
      )}
    </div>
  );
};

export default React.memo(PageScroller);
