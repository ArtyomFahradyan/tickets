import { Payload } from "types";
import { cloneDeep } from "lodash";
import types, { TicketsStore } from "./types";

export const initialValues: TicketsStore = {
  tickets: [],
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

    case types.CLEAR_WORKSPACE:
      return cloneDeep(initialValues);
    default:
      return state;
  }
}
