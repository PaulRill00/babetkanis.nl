import React from "react";
import { IContentContainer } from "@Molecules/ContentContainers";
import Unmute from "@Atoms/Unmute";

export interface IVideoContainerProps extends IContentContainer {
  type: "video";
  videoSrc: string;
  videoType: string;
}

const VideoContainer: React.FC<IVideoContainerProps> = ({
  videoSrc,
  videoType,
}) => {
  const [muted, setMuted] = React.useState<boolean>(true);

  return (
    <div className="video-container">
      <Unmute muted={muted} setMuted={setMuted} />
      <video autoPlay loop muted={muted}>
        <source src={videoSrc} type={videoType} />
      </video>
    </div>
  );
};

export default React.memo(VideoContainer);
