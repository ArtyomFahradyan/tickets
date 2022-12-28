import { createSelector } from "reselect";
import { TicketsStore } from "./types";

type State = { tickets: TicketsStore };

const getMainState = (state: State) => state.tickets;
const getTickets = createSelector(
  getMainState,
  (workspace) => workspace.tickets
);
export default {
  getTickets,
};
