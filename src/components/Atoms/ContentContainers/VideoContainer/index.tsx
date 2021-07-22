import React from "react";
import { IContentContainer } from "@Molecules/ContentContainer";
import Video from "@Atoms/Video";

export interface IVideoContainerProps extends IContentContainer {
  type: "video";
  videoSrc: string;
  videoType: string;
  unmutable?: boolean;
}

const VideoContainer: React.FC<IVideoContainerProps> = ({
  videoSrc,
  unmutable,
}) => {
  return (
    <div className="container-content video-container">
      <Video src={videoSrc} autoPlay loop unmutable={unmutable} />
    </div>
  );
};

export default React.memo(VideoContainer);
