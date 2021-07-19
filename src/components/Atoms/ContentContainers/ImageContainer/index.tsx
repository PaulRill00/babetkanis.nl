import React from "react";
import { IContentContainer } from "@Molecules/ContentContainer";

export interface IImageContainerProps extends IContentContainer {
  type: "image";
  imageSrc: string;
}

const ImageContainer: React.FC<IImageContainerProps> = ({ imageSrc }) => {
  return (
    <div className="container-content image-container">
      <img src={imageSrc} alt="" />
    </div>
  );
};

export default React.memo(ImageContainer);
