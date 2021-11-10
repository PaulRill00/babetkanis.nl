import React from "react";
import VideoContainer, {
  IVideoContainerProps,
} from "@Atoms/ContentContainers/VideoContainer";
import ImageContainer, {
  IImageContainerProps,
} from "@Atoms/ContentContainers/ImageContainer";
import CarouselContainer, {
  ICarouselContainerProps,
} from "@Atoms/ContentContainers/CarouselContainer";

export type IContentType = "video" | "image" | "carousel";

export interface IContentContainer {
  type: IContentType;
  sort: string;
  material?: string;
  year: number | string;
  active?: boolean;
  forceLoad?: boolean;
}

const ContentContainer: React.FC<
  IVideoContainerProps | IImageContainerProps | ICarouselContainerProps
> = (props) => {
  const renderContent = () => {
    switch (props.type) {
      case "video":
        return <VideoContainer {...props} />;
      case "image":
        return <ImageContainer {...props} />;
      case "carousel":
        return <CarouselContainer {...props} />;
    }
  };

  return (
    <>
      <div className={`info${props.active ? " active" : ""}`}>
        <p>{props.sort}</p>
        <p>{props.material}</p>
        <p>{props.year}</p>
      </div>
      {renderContent()}
    </>
  );
};

export default React.memo(ContentContainer);
