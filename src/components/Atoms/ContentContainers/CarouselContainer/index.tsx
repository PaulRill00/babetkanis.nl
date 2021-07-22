import React from "react";
import { IContentContainer } from "@Molecules/ContentContainer";
import PageScroller from "@Atoms/PageScroller";
import Video from "@Atoms/Video";
import Image from "@Atoms/Image";

export interface ICarouselContainerProps extends IContentContainer {
  type: "carousel";
  srcs: {
    type: "img" | "video";
    src: string;
    span?: number;
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
  };

  return (
    <div className="container-content carousel-container">
      <div className="controls">
        <PageScroller
          currentIndex={currentIndex}
          orientation="horizontal"
          pageCount={srcs.length / screenCols}
          scrollSteps={srcs.map((x) => {
            const itemSpan = srcs.length / (srcs.length / screenCols);
            return x.span ? x.span - itemSpan + 1 : itemSpan;
          })}
          refs={elRefs}
          controls
          onScrollTo={setCurrentIndex}
        />
      </div>
      <div
        className="carousel-items"
        style={
          {
            "--columns": srcs.reduce((a, b) => a + (b.span ?? 1), 0).toString(),
            "--col-width": 1 / screenCols,
          } as React.CSSProperties
        }
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {srcs.map((x, index) => (
          <section
            key={index}
            ref={elRefs[index]}
            id={index.toString()}
            style={x.span ? { gridColumn: `span ${x.span ?? 1}` } : {}}
          >
            {x.src != "" ? (
              x.type === "img" ? (
                <Image src={x.src} alt="" />
              ) : (
                <Video src={x.src} autoPlay muted loop />
              )
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CarouselContainer);
