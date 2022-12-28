import fetchWithRetry from "helpers/fetchWithRetry";

export async function getTickets() {
  const res = await fetchWithRetry("http://127.0.0.1:3001/feed");

  return res.json();
}
