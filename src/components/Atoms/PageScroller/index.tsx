import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface IPageScrollerProps {
  currentIndex: number;
  pageCount: number;
  scrollSteps?: number | number[];
  refs?: React.RefObject<HTMLElement>[];
  orientation?: "horizontal" | "vertical";
  controls?: boolean;
  onScrollTo?: (index: number) => void;
}

const PageScroller: React.FC<IPageScrollerProps> = ({
  currentIndex,
  pageCount,
  scrollSteps = 1,
  refs = [],
  orientation = "vertical",
  controls = false,
  onScrollTo,
}) => {

  const getCurrentOffset = (currentIndex: number) => {
    return Array.isArray(scrollSteps) ? (scrollSteps[currentIndex]) : scrollSteps;
  }

  const previous = (targetIndex?: number) => {
    const target = targetIndex === undefined ? (currentIndex - getCurrentOffset(currentIndex) >= 0 ? targetIndex ?? currentIndex - getCurrentOffset(currentIndex) : 0) : targetIndex;
    scrollTo(target, false);
  };

  const next = (targetIndex?: number) => {
    const target = targetIndex === undefined ? (currentIndex < pageCount - 1 ? currentIndex + getCurrentOffset(currentIndex) : pageCount - 1) : targetIndex;
    scrollTo(target, true);
  };

  const scrollTo = (index: number, forward: boolean) => {
    refs[index]?.current?.scrollIntoView({
      block: !forward ? "end" : "start",
      inline: !forward ? "end" : "start",
      behavior: "smooth"
    });

    if (onScrollTo != undefined) {
      onScrollTo(index);
    }
  }

  const renderItems = (): JSX.Element[] => {
    return Array.from(Array(Math.ceil(pageCount) ?? 0).keys()).map((_, i) => {
      const scrollSteps = getCurrentOffset(currentIndex);
      return (
        <li
          key={i}
          data-scrollid={(i * (scrollSteps))}
          className={`page-scroll-item${currentIndex === (i * (scrollSteps)) ? " active" : ""}`}
        >
          <a onClick={(e) => {
            e.preventDefault();
            if (i * scrollSteps > currentIndex) {
              next(i * scrollSteps);
            } else {
              previous(i * scrollSteps);
            }
          }} />
        </li>
      )
    });
  };

  return (
    <div className={`page-scroller ${orientation}`}>
      {controls && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => previous()}
        />
      )}

      <ul>{renderItems()}</ul>

      {controls && (
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => next()}
        />
      )}
    </div>
  );
};

export default React.memo(PageScroller);
