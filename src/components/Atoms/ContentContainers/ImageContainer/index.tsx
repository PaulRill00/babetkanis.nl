import React from "react";
import { IContentContainer } from "@Molecules/ContentContainer";
import Image from "@Atoms/Image";

export interface IImageContainerProps extends IContentContainer {
  type: "image";
  imageSrc: string;
}

const ImageContainer: React.FC<IImageContainerProps> = ({ imageSrc }) => {
  return (
    <div className="container-content image-container">
      <Image src={imageSrc} alt="" />
    </div>
  );
};

export default React.memo(ImageContainer);
