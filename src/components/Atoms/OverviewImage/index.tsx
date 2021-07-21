import { useRouter } from "next/router";
import React from "react";

export interface IOverviewImageProps {
  redirectId: number;
  imageSrc?: string;
  videoSrc?: string;
}

const OverviewImage: React.FC<IOverviewImageProps> = ({ redirectId, imageSrc, videoSrc }) => {
  const videoRef = React.createRef<HTMLVideoElement>();
  const [loading, setLoading] = React.useState(videoSrc !== undefined ? true : false);
  const router = useRouter();

  const onVideoEnter = () => {
    if (!videoRef) return;
    videoRef.current?.play();
  }

  const onVideoLeave = () => {
    if (!videoRef) return;
    videoRef.current?.pause();
  }

  React.useEffect(() => {
    if (videoRef.current) {
      onVideoLeave();
    }
  }, [videoRef]);

  const onClick = () => {
    router.push(`/?i=${redirectId}`)
  }

  const unLoad = () => {
    setLoading(false);
    console.log('unloading...')
  }

  return (
    <div className="overview-image" onClick={onClick}>
      {loading && <div className="loading" style={{ color: 'white' }}><div className="loader"></div></div>}
      {imageSrc && <img src={imageSrc} />}
      {videoSrc && <video src={videoSrc} onMouseEnter={onVideoEnter} onMouseLeave={onVideoLeave} ref={videoRef} muted autoPlay onLoad={unLoad} onLoadedData={unLoad} />}
    </div>
  );
};

export default React.memo(OverviewImage);
