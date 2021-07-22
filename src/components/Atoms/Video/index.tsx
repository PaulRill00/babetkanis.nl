import Loader from "@Atoms/Loader";
import Unmute from "@Atoms/Unmute";
import React from "react";

interface IVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  unmutable?: boolean;
}

const Video: React.FC<IVideoProps> = ({ unmutable, ...props }) => {
  const [muted, setMuted] = React.useState<boolean>(true);

  return (
    <div className="video">
      <Loader />
      {unmutable ? <Unmute muted={muted} setMuted={setMuted} /> : null}
      <video {...props} muted={muted} />
    </div>
  );
};

export default React.memo(Video);
