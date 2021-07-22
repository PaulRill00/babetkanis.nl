import Loader from "@Atoms/Loader";
import React from "react";

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<IImageProps> = (props) => {
  return (
    <div className="img">
      {props.src != "" ? <Loader /> : null}
      <img {...props} />
    </div>
  );
};

export default React.memo(Image);
