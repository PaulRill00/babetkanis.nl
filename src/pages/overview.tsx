import OverviewImage, { IOverviewImageProps } from "@Atoms/OverviewImage";
import PagePadding from "@Templates/PagePadding";
import React from "react";
import items from "../data/data";

const Page = () => {

  return (
    <PagePadding size="small">
      <div className="overview-grid">
        {items.map((item, index) => {
          const props: IOverviewImageProps = {
            redirectId: index
          };

          switch (item.type) {
            case "image":
              props.imageSrc = item.imageSrc;
              break;
            case "video":
              props.videoSrc = item.videoSrc;
              break;
            case "carousel": {
              const first = item.srcs[0];
              if (first.type === "img") {
                props.imageSrc = first.src;
              } else {
                props.videoSrc = first.src;
              }
            }
          }

          return (
            <OverviewImage key={index} {...props} />
          )
        })}
      </div>
    </PagePadding>
  );
};

export default Page;
