import React from "react";
import { NextPage } from "next";
import items from "../data/data";

import PageScroller from "../components/Atoms/PageScroller";
import ContentContainer from "../components/Molecules/ContentContainer";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const scrollRef = React.createRef<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [sectionRefs, setSectionRefs] = React.useState<
    React.RefObject<HTMLElement>[]
  >([]);
  const [activeItem, setActiveItem] = React.useState(0);

  const handleScroll = () => {
    const position = scrollRef.current?.scrollTop;
    if (position !== undefined) {
      setScrollPosition(position);
      setCurrentIndex(Math.round(scrollPosition / windowHeight));
    }
  };

  React.useEffect(() => {
    setWindowHeight(window !== undefined ? window.innerHeight : 0);
  }, []);

  React.useEffect(() => {
    setSectionRefs(items.map((_) => React.createRef()));
  }, []);

  React.useEffect(() => {
    const activePos = activeItem * windowHeight;
    const margin = 50;
    const scrollRound = Math.ceil(scrollPosition);

    if (
      scrollRound >= activePos - margin &&
      scrollRound <= activePos + margin
    ) {
      return;
    }

    const pos = scrollRound / windowHeight;
    setActiveItem(Math.round(pos));
  }, [scrollPosition, windowHeight]);

  React.useEffect(() => {
    if (router.query && Object.keys(router.query).length > 0) {
      const { i } = router.query;
      const index = parseInt(i.toString());
      setCurrentIndex(index);
      router.replace("/");
    }
  }, [router.query]);

  return (
    <div className="home-page" onScroll={handleScroll} ref={scrollRef}>
      <PageScroller
        currentIndex={currentIndex}
        pageCount={items.length}
        refs={sectionRefs}
      />
      {items.map((item, index) => (
        <section
          key={index}
          id={index.toString()}
          className="content-container"
          ref={sectionRefs[index]}
        >
          <ContentContainer
            key={index}
            {...item}
            active={activeItem === index}
            forceLoad={index === 0}
          />
        </section>
      ))}
    </div>
  );
};

export default Page;
