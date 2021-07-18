import ContentContainer from "@Molecules/ContentContainers";
import { IVideoContainerProps } from "@Atoms/VideoContainer";
import React from "react";
import PageScroller from "@Atoms/PageScroller";

const Page = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = React.useState(0);
  const [scrollDirection, setScrollDirection] = React.useState<"up" | "down">(
    "down"
  );
  const [windowHeight, setWindowHeight] = React.useState(0);
  const scrollRef = React.createRef<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

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

  const items: IVideoContainerProps[] = [
    {
      type: "video",
      videoSrc: "assets/videos/werk.mp4",
      videoType: "video/mp4",
      sort: "video installatie",
      year: 2021,
      id: "1",
    },
    {
      type: "video",
      videoSrc: "assets/videos/werk.mp4",
      videoType: "video/mp4",
      sort: "videoinstallatie 2",
      year: 2022,
      id: "2",
    },
  ];

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

  return (
    <div className="home-page" onScroll={handleScroll} ref={scrollRef}>
      <PageScroller
        currentIndex={currentIndex}
        pageCount={items.length}
        hrefs={items.map((x) => x.id?.toString())}
        setCurrentIndex={setCurrentIndex}
      />
      {items.map((item, index) => (
        <ContentContainer key={index} {...item} active={itemIsActive(index)} />
      ))}
    </div>
  );
};

export default Page;
