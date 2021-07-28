import { ICarouselContainerProps } from "@Atoms/ContentContainers/CarouselContainer";
import { IImageContainerProps } from "@Atoms/ContentContainers/ImageContainer";
import { IVideoContainerProps } from "@Atoms/ContentContainers/VideoContainer";

const items: (
  | IVideoContainerProps
  | IImageContainerProps
  | ICarouselContainerProps
)[] = [
  {
    type: "video",
    videoSrc: "assets/videos/werk.mp4",
    videoType: "video/mp4",
    sort: "video installatie",
    year: 2021,
    unmutable: true,
  },
  {
    type: "carousel",
    srcs: [
      {
        src: "assets/videos/Watercyclus1.mp4",
        type: "video",
      },
      [
        {
          src: "assets/videos/Watercyclus2.mp4",
          type: "video",
          unmutable: true,
        },
        {
          src: "assets/videos/Watercyclus4.mp4",
          type: "video",
          unmutable: true,
        },
        {
          src: "assets/videos/Watercyclus3.mp4",
          type: "video",
          unmutable: true,
        },
      ],
      {
        src: "assets/images/IMG_9669 (2021_02_24 15_10_28 UTC).JPG",
        type: "img",
      },
      {
        src: "assets/images/IMG_9652 (2021_02_24 15_10_28 UTC).JPG",
        type: "img",
      },
      [
        {
          src: "assets/images/IMG_9653 (2021_02_24 15_10_28 UTC).JPG",
          type: "img",
        },
        {
          src: "assets/images/IMG_9683 (2021_02_24 15_10_28 UTC).JPG",
          type: "img",
        },
      ],
    ],
    sort: "installatie",
    material: "I.s.m. Elise Horning",
    year: 2019,
  },
  {
    type: "carousel",
    srcs: [
      {
        src: "assets/images/_DSC0215 (2021_02_24 20_48_11 UTC).JPG",
        type: "img",
      },
      { src: "assets/images/grote_tekening2.jpg", type: "img" },
      { src: "assets/images/grote_tekening.jpg", type: "img" },
    ],
    sort: "pasteltekening",
    year: "2020/2021",
  },
  {
    type: "video",
    videoSrc: "assets/videos/ervaring.mp4",
    videoType: "video/mp4",
    sort: "installatie",
    year: 2020,
  },
  {
    type: "carousel",
    srcs: [
      {
        src: "assets/videos/Speling.mp4",
        type: "video",
        unmutable: true,
      },
      {
        src: "assets/images/_DSC0211 (2) (2021_02_24 20_48_11 UTC).JPG",
        type: "img",
      },
      [
        {
          src: "assets/images/_DSC0208 (2021_02_24 20_48_11 UTC).JPG",
          type: "img",
        },
        {
          src: "assets/images/_DSC0210 (2021_02_24 20_48_11 UTC).JPG",
          type: "img",
        },
      ],
    ],
    sort: "video/installatie",
    year: 2020,
  },
  {
    type: "carousel",
    srcs: [
      [
        {
          src: "assets/images/2019-03-28-0010 (2021_02_24 15_10_28 UTC).jpg",
          type: "img",
        },
        {
          src: "assets/images/2019-03-28-0009 (2021_02_24 15_10_28 UTC).jpg",
          type: "img",
        },
      ],
      {
        src: "assets/images/20180328_131915 (2021_02_24 15_10_28 UTC).jpg",
        type: "img",
      },
      [
        {
          src: "assets/images/20180328_132000 (2021_02_24 15_10_28 UTC).jpg",
          type: "img",
        },
        {
          src: "assets/images/20180328_131939 (2021_02_24 15_10_28 UTC).jpg",
          type: "img",
        },
      ],
      [
        {
          src: "assets/images/20180328_132018 (2021_02_24 15_10_28 UTC).jpg",
          type: "img",
        },
        {
          src: "assets/images/20180328_132045 (2021_02_24 15_10_28 UTC).jpg",
          type: "img",
        },
      ],
    ],
    sort: "fotografie",
    year: 2018,
  },
  {
    type: "carousel",
    srcs: [
      { src: "assets/videos/film_draaien_geluid.mp4", type: "video" },
      { src: "assets/videos/film_draaien.mp4", type: "video" },
    ],
    sort: "video",
    year: 2018,
  },
  {
    type: "carousel",
    srcs: [
      { src: "assets/videos/digging.mp4", type: "video" },
      [
        { src: "assets/videos/digging2.mp4", type: "video" },
        { src: "assets/videos/digging3.mp4", type: "video" },
      ],
      [
        {
          src: "assets/images/_DSC0221 (2021_02_24 20_48_11 UTC).JPG",
          type: "img",
        },
        {
          src: "assets/images/_DSC0217 (2021_02_24 20_48_11 UTC).JPG",
          type: "img",
        },
      ],
    ],
    sort: "video",
    year: 2018,
  },
];
export default items;
