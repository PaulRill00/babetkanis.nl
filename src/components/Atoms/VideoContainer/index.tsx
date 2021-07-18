import React from "react";
import { IContentContainer } from "@Molecules/ContentContainers";

export interface IVideoContainerProps extends IContentContainer {
  type: "video";
  videoSrc: string;
  videoType: string;
}

const VideoContainer: React.FC<IVideoContainerProps> = ({
  videoSrc,
  videoType,
}) => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={videoSrc} type={videoType} />
      </video>
    </div>
  );
};

export default React.memo(VideoContainer);
