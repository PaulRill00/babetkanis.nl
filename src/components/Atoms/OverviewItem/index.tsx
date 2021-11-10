import Image from "@Atoms/Image";
import Video from "@Atoms/Video";
import { useRouter } from "next/router";
import React from "react";

export interface IOverviewItemProps {
  redirectId: number;
  imageSrc?: string;
  videoSrc?: string;
}

const OverviewItem: React.FC<IOverviewItemProps> = ({
  redirectId,
  imageSrc,
  videoSrc,
}) => {
  const videoRef = React.createRef<HTMLVideoElement>();
  const router = useRouter();

  const onVideoEnter = () => {
    if (!videoRef) return;
    videoRef.current?.play();
  };

  const onVideoLeave = () => {
    if (!videoRef) return;
    videoRef.current?.pause();
  };

  React.useEffect(() => {
    if (videoRef.current) {
      onVideoLeave();
    }
  }, [videoRef]);

  const onClick = () => {
    router.push(`/?i=${redirectId}#${redirectId}`);
  };

  return (
    <div className="overview-item" onClick={onClick}>
      {imageSrc && <Image src={imageSrc} />}
      {videoSrc && (
        <Video
          src={videoSrc}
          onMouseEnter={onVideoEnter}
          onMouseLeave={onVideoLeave}
          videoRef={videoRef}
          muted
          loop
        />
      )}
    </div>
  );
};

export default React.memo(OverviewItem);
