import React from "react";

export interface IOverviewImageProps {
  src: string;
  alt?: string;
}

const OverviewImage: React.FC<IOverviewImageProps> = (props) => {
  return (
    <div className="overview-image">
      <img {...props} />
    </div>
  );
};

export default React.memo(OverviewImage);
