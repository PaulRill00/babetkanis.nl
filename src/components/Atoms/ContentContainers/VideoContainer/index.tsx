import React from "react";
import { IContentContainer } from "@Molecules/ContentContainer";
import Unmute from "@Atoms/Unmute";

export interface IVideoContainerProps extends IContentContainer {
  type: "video";
  videoSrc: string;
  videoType: string;
  unmutable?: boolean;
}

const VideoContainer: React.FC<IVideoContainerProps> = ({
  videoSrc,
  videoType,
  unmutable,
}) => {
  const [muted, setMuted] = React.useState<boolean>(true);

  return (
    <div className="container-content video-container">
      {unmutable && <Unmute muted={muted} setMuted={setMuted} />}
      <video autoPlay loop muted={muted}>
        <source src={videoSrc} type={videoType} />
      </video>
    </div>
  );
};

export default React.memo(VideoContainer);
