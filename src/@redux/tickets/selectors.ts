import { createSelector } from "reselect";
import { TicketsStore } from "./types";

type State = { tickets: TicketsStore };

const getMainState = (state: State) => state.tickets;
const getTickets = createSelector(
  getMainState,
  (workspace) => workspace.tickets
);
const getRate = createSelector(getMainState, (workspace) => workspace.rate);
const getFilters = createSelector(
  getMainState,
  (workspace) => workspace.filters
);
const getCurrency = createSelector(
  getMainState,
  (workspace) => workspace.currency
);
export default {
  getTickets,
  getRate,
  getCurrency,
  getFilters,
};
