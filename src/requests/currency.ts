import fetchWithRetry from "../helpers/fetchWithRetry";

export async function getCurrency({ to }: { to: string }) {
  const requestOptions = {
    method: "GET",
    headers: {
      apikey: "iqbyN2Z8bbmbvVgCVpCh2gbh4Qt2ZdOX",
    },
  };

  const res = await fetchWithRetry(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=RUB&amount=1`,
    { fetchOptions: requestOptions }
  );

  return res.json();
}
