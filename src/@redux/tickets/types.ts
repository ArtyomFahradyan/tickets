import { Ticket } from "types";

export default {
  SET_TICKETS: "SET_TICKETS",
  CLEAR_WORKSPACE: "CLEAR_WORKSPACE",
};

export type TicketsStore = {
  tickets: Ticket[];
};
