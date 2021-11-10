import Loader from "../../Atoms/Loader";
import Unmute from "../../Atoms/Unmute";
import React from "react";

interface IVideoProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  unmutable?: boolean;
  videoRef?: React.RefObject<HTMLVideoElement>;
  forceLoad?: boolean;
}

const Video: React.FC<IVideoProps> = ({
  unmutable,
  muted,
  videoRef,
  forceLoad = false,
  ...props
}) => {
  const [isMuted, setIsMuted] = React.useState<boolean>(
    muted === undefined ? true : muted
  );

  return (
    <div className="video">
      <Loader />
      {unmutable ? <Unmute muted={isMuted} setMuted={setIsMuted} /> : null}
      <video
        muted={isMuted}
        preload={!forceLoad ? "auto" : "none"}
        ref={videoRef}
        loop
        {...props}
      />
    </div>
  );
};

export default React.memo(Video);
