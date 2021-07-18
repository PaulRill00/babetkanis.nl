import React from "react";
import VideoContainer, { IVideoContainerProps } from "@Atoms/VideoContainer";

export type IContentType = "video" | "image" | "carousel";

export interface IContentContainer {
  type: IContentType;
  sort: string;
  material?: string;
  year: number;
  active?: boolean;
  id: string;
}

const ContentContainer: React.FC<IVideoContainerProps> = (props) => {
  const renderContent = () => {
    switch (props.type) {
      case "video":
        return <VideoContainer {...props} />;
    }
  };

  return (
    <section className="content-container" id={props.id}>
      <div className={`info${props.active ? " active" : ""}`}>
        <p>{props.sort}</p>
        <p>{props.material}</p>
        <p>{props.year}</p>
      </div>
      {renderContent()}
    </section>
  );
};

export default React.memo(ContentContainer);
