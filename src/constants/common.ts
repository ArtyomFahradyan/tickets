import { Currencies } from "types";

export const DATE_FORMAT = "DD MMM YYYY, ddd";
export const PAGE_SIZE = 5;

export const currencySymbol: Record<Currencies, string> = {
  [Currencies.RUB]: "&#8381;",
  [Currencies.USD]: "&dollar;",
  [Currencies.EUR]: "&#x20AC;",
};
