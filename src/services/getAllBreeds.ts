const API_URL = "https://dog.ceo/api/breeds/list/all";

export function fetchBreeds(): Promise<Record<string, string[]>> {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.message);
}
