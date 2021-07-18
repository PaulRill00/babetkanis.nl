import OverviewImage, { IOverviewImageProps } from "@Atoms/OverviewImage";
import PagePadding from "@Templates/PagePadding";
import React from "react";

const Page = () => {
  const overviewImages: IOverviewImageProps[] = [
    {
      src: "assets/images/FilmDraaien.png",
    },
    {
      src: "assets/images/werk2.jpg",
    },
  ];

  return (
    <PagePadding size="small">
      <div className="overview-grid">
        {overviewImages.map((image) => (
          <OverviewImage {...image} />
        ))}
      </div>
    </PagePadding>
  );
};

export default Page;
