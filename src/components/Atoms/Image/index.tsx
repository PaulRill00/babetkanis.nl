import Loader from "@Atoms/Loader";
import React from "react";

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<IImageProps> = ({ src, ...props }) => {
  const imageRef = React.createRef<HTMLImageElement>();

  React.useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.src = imageRef.current?.getAttribute("data-src") ?? "";
  }, []);

  return (
    <div className="img">
      {src != "" ? <Loader /> : null}
      <img data-src={src} {...props} ref={imageRef} />
    </div>
  );
};

export default React.memo(Image);
