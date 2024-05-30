import {
  pizzaImages,
  pizzaStaticImages,
  pizzaStaticPromoImages,
  pizzaStaticPromoImagesURL,
} from "../templates/pizza-links";
import {
  pizzaDescriptionsArray,
  pizzaNamesArray,
} from "../templates/pizza-names";
import uids from "../templates/uids";
import { colors } from "../colors/colors";

export const itemsTemplate = [
  {
    key: uids[0],
    title: pizzaNamesArray[0].pizzaName_eng,
    isPromo: "HOT",
    promoColor: colors["promotion-hot"],
    isFavorite: false,
    rating: Math.round(Math.random() * 5),
    image: pizzaStaticImages[1],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.1,
    description: pizzaDescriptionsArray[0].pizza_eng,
  },
  {
    key: uids[1],
    title: pizzaNamesArray[1].pizzaName_eng,
    isPromo: "NEW",
    promoColor: colors["promotion-new"],
    isFavorite: true,
    rating: Math.round(Math.random() * 5),
    image: pizzaStaticImages[2],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.2,
    description: pizzaDescriptionsArray[1].pizza_eng,
  },
  {
    key: uids[2],
    title: pizzaNamesArray[2].pizzaName_eng,
    isPromo: "SALE",
    promoColor: colors["promotion-sale"],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: pizzaStaticImages[3],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.25,
    description: pizzaDescriptionsArray[2].pizza_eng,
  },
  {
    key: uids[3],
    title: pizzaNamesArray[3].pizzaName_eng,
    isPromo: "50%",
    promoColor: colors["promotion-sale"],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: pizzaStaticImages[4],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.75,
    description: pizzaDescriptionsArray[3].pizza_eng,
  },
  {
    key: uids[4],
    title: pizzaNamesArray[4].pizzaName_eng,
    isPromo: null,
    promoColor: colors["promotion-sale"],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: pizzaStaticImages[5],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.75,
    description: pizzaDescriptionsArray[2].pizza_eng,
  },
  {
    key: uids[5],
    title: pizzaNamesArray[5].pizzaName_eng,
    isPromo: null,
    promoColor: colors["promotion-hot"],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: pizzaStaticImages[6],

    price: Math.round(Math.random() * 500),
    oldPrice: 1.75,
    description: pizzaDescriptionsArray[4].pizza_eng,
  },
  {
    key: uids[6],
    title: pizzaNamesArray[6].pizzaName_eng,
    isPromo: "NEW",
    promoColor: colors["promotion-new"],
    isFavorite: Math.round(Math.random()),
    rating: Math.round(Math.random() * 5),
    image: pizzaStaticImages[7],
    price: Math.round(Math.random() * 500),
    oldPrice: 1.15,
    description: pizzaDescriptionsArray[1].pizza_eng,
  },
];

export function generateItems(count = 10, startIndex = 0) {
  const PROMO_COLORS = ["#ee4200ff", "#478900", "#007cc3"];
  const PROMO_TITLE = [null, "NEW", "HOT", null, "SALE", "50%", "2=1", null];
  let items = [];
  let init = startIndex ? startIndex : 0;
  let max = startIndex ? startIndex + count : count;
  for (let i = init; i < max; i++) {
    const DESCRIPTION_INDEX = Math.floor(
      Math.random() * pizzaDescriptionsArray.length
    );
    const cardTemplate = {
      key: Math.random() + "_" + Math.random(),
      title: pizzaNamesArray[i].pizzaName_eng,
      isPromo: PROMO_TITLE[Math.floor(Math.random() * PROMO_TITLE.length)],
      promoColor: PROMO_COLORS[Math.floor(Math.random()) * PROMO_COLORS.length],
      isFavorite: Math.round(Math.random()),
      rating: Math.round(Math.random() * 5),
      image:
        pizzaStaticImages[Math.floor(Math.random() * pizzaStaticImages.length)],
      price: Math.round(Math.random() * 500) + 50,
      oldPrice: 1.1,
      description: pizzaDescriptionsArray[DESCRIPTION_INDEX].pizza_eng,
    };
    items.push(cardTemplate);
  }
  return items;
}

export function generatePromoItems(count = 11) {
  const PROMO_COLORS = ["#ee4200ff", "#478900", "#007cc3"];
  const PROMO_TITLE = [null, "NEW", "HOT", null, "SALE", "50%", "2=1", null];
  let items = [];
  for (let i = 0; i < count; i++) {
    const DESCRIPTION_INDEX = Math.round(
      Math.random() * (pizzaDescriptionsArray.length - 1)
    );
    const cardTemplate = {
      key: uids[i],
      title: pizzaNamesArray[i].pizzaName_eng,
      isPromo:
        PROMO_TITLE[Math.round(Math.random() * (PROMO_TITLE.length - 1))],
      promoColor:
        PROMO_COLORS[Math.round(Math.random()) * (PROMO_COLORS.length - 1)],
      isFavorite: Math.round(Math.random()),
      rating: Math.round(Math.random() * 5),
      image: pizzaStaticPromoImages[i],
      shareLink: pizzaStaticPromoImagesURL[i],
      price: Math.round(Math.random() * 500) + 50,
      oldPrice: 1.1,
      description: pizzaDescriptionsArray[DESCRIPTION_INDEX].pizza_eng,
    };

    items.push(cardTemplate);
  }
  return items;
}
