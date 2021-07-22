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
        src: "assets/videos/20190610_124617 (2021_02_24 15_10_28 UTC).mp4",
        type: "video",
      },
      [
        {
          src: "assets/videos/20190610_124644 (2021_05_28 08_34_35 UTC).mp4",
          type: "video",
          unmutable: true,
        },
        {
          src: "assets/videos/20190610_125004 (2021_02_24 15_10_28 UTC).mp4",
          type: "video",
          unmutable: true,
        },
        {
          src: "assets/videos/20190610_124759 (2021_02_24 15_10_28 UTC).mp4",
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
        src: "assets/videos/00019 (2021_02_24 15_10_28 UTC).mp4",
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
      { src: "assets/videos/film_draaien_geluid.avi", type: "video" },
      { src: "assets/videos/film_draaien.avi", type: "video" },
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
