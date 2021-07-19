import React from "react";
import { IContentContainer } from "@Molecules/ContentContainer";
import PageScroller from "@Atoms/PageScroller";

export interface ICarouselContainerProps extends IContentContainer {
  type: "carousel";
  imageSrcs: string[];
}

const CarouselContainer: React.FC<ICarouselContainerProps> = ({
  imageSrcs,
}) => {
  const [elRefs, setElRefs] = React.useState<React.RefObject<HTMLElement>[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    setElRefs(imageSrcs.map((_) => React.createRef()));
  }, [imageSrcs]);

  React.useEffect(() => {
    elRefs[currentIndex]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [currentIndex]);

  return (
    <div className="container-content carousel-container">
      <div className="controls">
        <PageScroller
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          orientation="horizontal"
          pageCount={imageSrcs.length}
          controls
        />
      </div>
      <div
        className="carousel-items"
        style={{ "--columns": 2 } as React.CSSProperties}
      >
        {imageSrcs.map((x, index) => (
          <section key={index} id={index.toString()} ref={elRefs[index]}>
            <img src={x} alt="" />
          </section>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CarouselContainer);
