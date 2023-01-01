import { Currencies, Ticket } from "types";

export default {
  SET_TICKETS: "SET_TICKETS",
  SET_RATE: "SET_RATE",
  SET_CURRENCY: "SET_CURRENCY",
  SET_FILTERS: "SET_FILTERS",
  CLEAR_WORKSPACE: "CLEAR_WORKSPACE",
};

export type TicketsStore = {
  tickets: Ticket[];
  rate: number;
  filters: number[];
  currency: Currencies;
};
