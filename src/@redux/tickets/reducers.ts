import { Currencies, Payload } from "types";
import { cloneDeep } from "lodash";
import types, { TicketsStore } from "./types";

export const initialValues: TicketsStore = {
  tickets: [],
  filters: [],
  rate: 1,
  currency: Currencies.RUB,
};

export default function (
  state: TicketsStore = initialValues,
  { type, payload }: Payload
) {
  switch (type) {
    case types.SET_TICKETS:
      return {
        ...state,
        tickets: payload,
      };
    case types.SET_RATE:
      return {
        ...state,
        rate: payload,
      };
    case types.SET_CURRENCY:
      return {
        ...state,
        currency: payload,
      };
    case types.SET_FILTERS:
      return {
        ...state,
        filters: payload,
      };

    case types.CLEAR_WORKSPACE:
      return cloneDeep(initialValues);
    default:
      return state;
  }
}
