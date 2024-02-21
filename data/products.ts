import { IProduct } from "@/interfaces/product";

export const dummyProductsData: IProduct[] = [
  {
    category: "Mobile",
    description:
      "Over the years, SUNMI mobile devices, being applicable to the retail, restaurant, logistics and manufacturing businesses, have helped business owners to  accelerate their digital transformation in store operations.",
    hero_images: {
      mobile: "/images/products/mobile_hero_.jpg",
      desktop: "/images/products/desk_hero_.jpg",
    },
    series: [
      {
        id: 1,
        name: "V Series",
        description:
          "V Series products integrate the functions of printing, barcode scanning, voice  broadcast as well as touch screens, thus meeting merchants’ needs in checkout, ordering, order receiving and management.",
        seriesId: 2,
        products: [
          {
            feturesImage: "/images/products/p1.png",
            name: "V3 MIX",
            title: "Smart Mobile Terminal",
            price: 100,
            slug: "v3-mix",
            id: 1,
          },
          {
            feturesImage: "/images/products/p2.png",
            name: "V2 PRO",
            title: "Smart Mobile Terminal",
            price: 200,
            slug: "v2-pro-mobile",
            id: 2,
          },
          {
            feturesImage: "/images/products/p3.png",
            name: "V2s PLUS",
            title: "Smart Mobile Terminal",
            price: 100,
            slug: "v2s-plus",
            id: 3,
          },
        ],
      },
    ],
  },
  {
    category: "Dekstop",
    description:
      "The online and offline integration drives store owners to improve their operational  efficiency and customer experience with solutions integrating various devices and smart systems.",
    hero_images: {
      mobile: "/images/products/dektop_m.jpg",
      desktop: "/images/products/dektop_d.jpg",
    },
    series: [
      {
        id: 4,
        name: "V Series",
        description:
          "V Series products integrate the functions of printing, barcode scanning, voice  broadcast as well as touch screens, thus meeting merchants’ needs in checkout, ordering, order receiving and management.",
        seriesId: 2,
        products: [
          {
            feturesImage: "/images/products/deks/1.png",
            name: "T3 PRO SERIES",
            title: "Smart Desktop Terminal",
            price: 100,
            slug: "t3-pro-series",
            id: 4,
          },
          {
            feturesImage: "/images/products/deks/2.png",
            name: "T2s",
            title: "Smart Desktop Terminal",
            price: 200,
            slug: "t2s",
            id: 5,
          },
          {
            feturesImage: "/images/products/deks/3.png",
            name: "T2s LITE",
            title: "Smart Desktop Terminal",
            price: 100,
            slug: "t2s-lite",
            id: 6,
          },
        ],
      },
    ],
  },
];
