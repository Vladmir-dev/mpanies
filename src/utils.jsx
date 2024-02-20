const localdomain = "http://localhost:8000";
const hdomain = "https://api.mpanies.com";

export const baseurl = `${hdomain}/api/v1`;

import { createSelector } from 'reselect';

const selectProducts = (state) => state.products.products;

export const selectNewArrivalProducts = createSelector(
  selectProducts,
  (products) => products.filter((product) => product.is_new_arival === true)
);

export const selectFeaturedProducts = createSelector(
  selectProducts,
  (products) => products.filter((product) => product.is_featured === true)
);


export const links = [
  // {
  //   name: "Home",
  //   link: "/",
  //   submenu: false,
  // },
  // {
  //   name: "Products",
  //   link: "/shop",
  //   submenu: false,
  //   subitems: [
  //     {
  //       name: "New In",
  //       headitems: [
  //         {
  //           name: "Acne Cream",
  //         },
  //         {
  //           name: "Ale Lotion",
  //         },
  //         {
  //           name: "Fairnes",
  //         },
  //         {
  //           name: "Whitening",
  //         },
  //       ],
  //     },
  //     {
  //       name: "Cosmetics",
  //       headitems: [
  //         {
  //           name: "Acne Cream",
  //         },
  //         {
  //           name: "Ale Lotion",
  //         },
  //         {
  //           name: "Fairnes",
  //         },
  //         {
  //           name: "Whitening",
  //         },
  //       ],
  //     },
  //     {
  //       name: "Skin",
  //       headitems: [
  //         {
  //           name: "Acne Cream",
  //         },
  //         {
  //           name: "Ale Lotion",
  //         },
  //         {
  //           name: "Fairnes",
  //         },
  //         {
  //           name: "Whitening",
  //         },
  //       ],
  //     },
  //     {
  //       name: "Make Up",
  //       headitems: [
  //         {
  //           name: "Acne Cream",
  //         },
  //         {
  //           name: "Ale Lotion",
  //         },
  //         {
  //           name: "Fairnes",
  //         },
  //         {
  //           name: "Whitening",
  //         },
  //       ],
  //     },
  //   ],
  // },

  {
    name: "Skin Care",
    link: "1",
    submenu: true,
    subitems: [
      {
        name: "Clensers",
      },
      {
        name: "Moisturizers",
      },
      {
        name: "Serums",
      },
      {
        name: "SunScreen",
      },
      {
        name: "Face Masks",
      },
      {
        name: "Eye Creams",
      },
    ],
  },
  {
    name: "Makeup",
    link: "2",
    submenu: true,
    subitems: [
      {
        name: "Foundation",
      },
      {
        name: "Lipstick",
      },
      {
        name: "EyeShadow",
      },
      {
        name: "Mascara",
      },
      {
        name: "Blush",
      },
      {
        name: "Concealers",
      },
    ],
  },
  {
    name: "Hair Care",
    link: "3",
    submenu: true,
    subitems: [
      {
        name: "Shampoo",
      },
      {
        name: "Conditioner",
      },
      {
        name: "Hair Styling Products",
      },
      {
        name: "Hair Color",
      },
      {
        name: "Hair Treatments",
      },
      {
        name: "Hair Accessories",
      },
    ],
  },
  {
    name: "Perfumes",
    link: "4",
    submenu: true,
    subitems: [
      {
        name: "Cologne",
      },
      {
        name: "Body Sprays",
      },
      {
        name: "Fragrance Sets",
      },
      {
        name: "Essential Oils",
      },
    ],
  },
  {
    name: "Nail Care",
    link: "5",
    submenu: true,
    subitems: [
      {
        name: "Nail Polish",
      },
      {
        name: "Nail Polish Removers",
      },
      {
        name: "Nail Care Kits",
      },
      {
        name: "Nail Accessories",
      },
    ],
  },
  {
    name: "Body & Bath",
    link: "6",
    submenu: true,
    subitems: [
      {
        name: "Body Wash",
      },
      {
        name: "Lotions",
      },
      {
        name: "Soaps",
      },
      {
        name: "Bath Bombs",
      },
      {
        name: "Deodrant",
      },
      {
        name: "Body Scrubs",
      },
    ],
  },
  {
    name: "Men's Grooming",
    link: "7",
    submenu: true,
    subitems: [
      {
        name: "Men's Skincare",
      },
      {
        name: "Shaving Products",
      },
      {
        name: "Beard Care",
      },
      {
        name: "Men's Fragrances",
      },
      {
        name: "Men's HairCare",
      },
    ],
  },
  {
    name: "Organic & Natural Products",
    link: "8",
    submenu: true,
    subitems: [
      {
        name: "Makeup brushes",
      },
      {
        name: "Hair Styling Tools",
      },
      {
        name: "Mirrors",
      },
      {
        name: "Applicators",
      },
      {
        name: "Sponges",
      },
    ],
  },
];
