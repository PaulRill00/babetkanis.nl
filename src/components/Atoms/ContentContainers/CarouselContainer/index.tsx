import React from "react";
import { IContentContainer } from "@Molecules/ContentContainer";
import PageScroller from "@Atoms/PageScroller";
import Video from "@Atoms/Video";
import Image from "@Atoms/Image";

interface ICarouselItem {
  type: "img" | "video";
  src: string;
}

interface IImgCarouselItem extends ICarouselItem {
  type: "img";
}

interface IVideoCarouselItem extends ICarouselItem {
  type: "video";
  unmutable?: boolean;
  muted?: boolean;
}

export interface ICarouselContainerProps extends IContentContainer {
  type: "carousel";
  srcs: {
    [index: number]:
      | IImgCarouselItem
      | IImgCarouselItem[]
      | IVideoCarouselItem
      | IVideoCarouselItem[];
  };
}

const CarouselContainer: React.FC<ICarouselContainerProps> = ({ srcs }) => {
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
    setElRefs(Object.keys(srcs).map((_) => React.createRef()));
  }, [srcs]);

  const handleScroll = () => {
    const position = scrollRef.current?.scrollLeft;
    if (position !== undefined) {
      setCurrentIndex(Math.round(position / windowWidth));
    }
  };

  const srcsLength = () => Object.keys(srcs).length;

  return (
    <div className="container-content carousel-container">
      <div className="controls">
        <PageScroller
          currentIndex={currentIndex}
          orientation="horizontal"
          pageCount={srcsLength()}
          scrollSteps={1}
          refs={elRefs}
          controls
          onScrollTo={setCurrentIndex}
        />
      </div>
      <div
        className="carousel-items"
        style={
          {
            "--columns": srcsLength(),
          } as React.CSSProperties
        }
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {Object.values(srcs).map((x, index) => {
          const isSingle = !Array.isArray(x);
          const single = x as IImgCarouselItem | IVideoCarouselItem;
          const multiple = x as (IImgCarouselItem | IVideoCarouselItem)[];

          const content = ({
            src,
            type,
            ...props
          }: IImgCarouselItem | IVideoCarouselItem) => {
            return src != "" ? (
              type === "img" ? (
                <Image src={src} alt="" />
              ) : (
                <Video
                  src={src}
                  autoPlay
                  muted={
                    (props as IVideoCarouselItem).muted !== undefined
                      ? (props as IVideoCarouselItem).muted
                      : true
                  }
                  loop
                  unmutable={(props as IVideoCarouselItem).unmutable ?? false}
                />
              )
            ) : null;
          };

          const sectionProps = {
            key: index,
            ref: elRefs[index],
          };

          return isSingle ? (
            <section {...sectionProps}>{content(single)}</section>
          ) : (
            <section
              {...sectionProps}
              style={{ "--columns": multiple.length } as React.CSSProperties}
              className="multiple"
            >
              {multiple.map((y, index) => {
                return <section key={index}>{content(y)}</section>;
              })}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(CarouselContainer);
