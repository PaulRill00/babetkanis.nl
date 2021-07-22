import React from "react";
import { NextPage } from "next";
import items from "../data/data";

import PageScroller from "@Atoms/PageScroller";
import ContentContainer from "@Molecules/ContentContainer";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [desiredScrollPosition, setDesiredScrollPosition] = React.useState<
    undefined | number
  >(undefined);
  const [prevScrollPosition, setPrevScrollPosition] = React.useState(0);
  const [scrollDirection, setScrollDirection] = React.useState<"up" | "down">(
    "down"
  );
  const [windowHeight, setWindowHeight] = React.useState(0);
  const scrollRef = React.createRef<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [sectionRefs, setSectionRefs] = React.useState<
    React.RefObject<HTMLElement>[]
  >([]);

  const handleScroll = () => {
    const position = scrollRef.current?.scrollTop;
    if (position !== undefined) {
      setPrevScrollPosition(scrollPosition);
      setScrollPosition(position);
      setScrollDirection(prevScrollPosition > scrollPosition ? "up" : "down");
      setCurrentIndex(Math.round(scrollPosition / windowHeight));
    }
  };

  React.useEffect(() => {
    setWindowHeight(window !== undefined ? window.innerHeight : 0);
  }, []);

  React.useEffect(() => {
    setSectionRefs(items.map((_) => React.createRef()));
  }, [items.length]);

  const itemIsActive = (offset: number): boolean => {
    const scrollOffset = windowHeight / 5;

    let minScroll = 0;
    let maxScroll = 0;

    if (scrollDirection === "down") {
      minScroll = windowHeight * offset - scrollOffset;
      maxScroll = windowHeight * (offset + 1);
    }
    if (scrollDirection === "up") {
      minScroll = windowHeight * offset;
      maxScroll = windowHeight * (offset + 1) - scrollOffset;
    }

    return scrollPosition >= minScroll && scrollPosition < maxScroll;
  };

  React.useEffect(() => {
    if (sectionRefs && router.query && Object.keys(router.query).length > 0) {
      const { i } = router.query;
      setDesiredScrollPosition(parseInt(i.toString()));
    }
  }, [sectionRefs, router.query]);

  React.useEffect(() => {
    if (
      currentIndex === desiredScrollPosition &&
      setDesiredScrollPosition instanceof Function
    ) {
      setTimeout(() => {
        setDesiredScrollPosition(undefined);
        router.replace("/");
      }, 500);
    }
  }, [currentIndex, desiredScrollPosition]);

  return (
    <div className="home-page" onScroll={handleScroll} ref={scrollRef}>
      <PageScroller
        currentIndex={currentIndex}
        pageCount={items.length}
        refs={sectionRefs}
        desiredScrollPosition={desiredScrollPosition}
      />
      {items.map((item, index) => (
        <section
          key={index}
          className="content-container"
          ref={sectionRefs[index]}
        >
          <ContentContainer
            key={index}
            {...item}
            active={itemIsActive(index)}
          />
        </section>
      ))}
    </div>
  );
};

export default Page;
