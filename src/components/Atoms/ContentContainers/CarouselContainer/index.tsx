import React from "react";
import { IContentContainer } from "@Molecules/ContentContainer";
import PageScroller from "@Atoms/PageScroller";

export interface ICarouselContainerProps extends IContentContainer {
  type: "carousel";
  srcs: {
    type: "img"|"video",
    src: string;
  }[];
  screenCols?: number;
}

const CarouselContainer: React.FC<ICarouselContainerProps> = ({
  srcs,
  screenCols = 1,
}) => {

  const [windowWidth, setWindowWidth] = React.useState(0);
  const scrollRef = React.createRef<HTMLDivElement>();
  const [elRefs, setElRefs] = React.useState<React.RefObject<HTMLElement>[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    setWindowWidth(window !== undefined ? window.innerWidth : 0);
  }, []);

  React.useEffect(() => {
    setElRefs(srcs.map((_) => React.createRef()));
  }, [srcs]);

  const handleScroll = () => {
    const position = scrollRef.current?.scrollLeft;
    if (position !== undefined) {
      setCurrentIndex(Math.round(position / windowWidth));
    }
  }

  return (
    <div className="container-content carousel-container">
      <div className="controls">
        <PageScroller
          currentIndex={currentIndex}
          orientation="horizontal"
          pageCount={srcs.length / screenCols}
          scrollSteps={srcs.length / (srcs.length / screenCols)}
          refs={elRefs}
          controls
          onScrollTo={setCurrentIndex}
        />
      </div>
      <div
        className="carousel-items"
        style={{ "--columns": srcs.length, "--col-width": (1/screenCols) } as React.CSSProperties}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {srcs.map((x, index) => (
          <section key={index} ref={elRefs[index]} id={index.toString()}>
            {x.type === 'img' ? <img src={x.src} alt="" /> : <video src={x.src}/>}
          </section>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CarouselContainer);
