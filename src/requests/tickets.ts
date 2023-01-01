import fetchWithRetry from "helpers/fetchWithRetry";
import { Ticket } from "types";

export async function getTickets(): Promise<{ tickets: Ticket[] }> {
  const res = await fetchWithRetry("tickets/tickets.json");

  return res.json();
}
