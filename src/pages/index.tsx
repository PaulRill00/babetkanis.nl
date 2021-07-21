import ContentContainer from "@Molecules/ContentContainer";
import { IVideoContainerProps } from "@Atoms/ContentContainers/VideoContainer";
import React from "react";
import PageScroller from "@Atoms/PageScroller";
import { ICarouselContainerProps } from "@Atoms/ContentContainers/CarouselContainer";
import { IImageContainerProps } from "@Atoms/ContentContainers/ImageContainer";

const Page = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
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

  const items: (
    | IVideoContainerProps
    | IImageContainerProps
    | ICarouselContainerProps
  )[] = [
    {
      type: "video",
      videoSrc: "assets/videos/werk.mp4",
      videoType: "video/mp4",
      sort: "video installatie",
      year: 2021,
      id: "1",
    },
    {
      type: "image",
      imageSrc: "assets/images/werk2.jpg",
      sort: "videoinstallatie 2",
      year: 2022,
      id: "2",
    },
    {
      type: "carousel",
      srcs: [
        { src: "assets/images/FilmDraaien.png", type: "img" },
        { src: "assets/images/werk2.jpg", type: "img" },
        { src: "assets/images/grote_tekening.jpg", type: "img" },
        { src: "assets/images/grote_tekening2.jpg", type: "img" },
      ],
      screenCols: 1,
      sort: "carousel",
      year: 2022,
      id: "3",
    },
  ];

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
