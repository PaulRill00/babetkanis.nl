import OverviewItem, {
  IOverviewItemProps,
} from "../components/Atoms/OverviewItem";
import PagePadding from "../components/Templates/PagePadding";
import React from "react";
import items from "../data/data";

const Page = () => {
  return (
    <PagePadding size="small">
      <div className="overview-grid">
        {items.map((item, index) => {
          const props: IOverviewItemProps = {
            redirectId: index,
          };

          switch (item.type) {
            case "image":
              props.imageSrc = item.imageSrc;
              break;
            case "video":
              props.videoSrc = item.videoSrc;
              break;
            case "carousel": {
              const first = Array.isArray(item.srcs[0])
                ? item.srcs[0][0]
                : item.srcs[0];

              if (first.type === "img") {
                props.imageSrc = first.src;
              } else {
                props.videoSrc = first.src;
              }
            }
          }

          return <OverviewItem key={index} {...props} />;
        })}
      </div>
    </PagePadding>
  );
};

export default Page;
