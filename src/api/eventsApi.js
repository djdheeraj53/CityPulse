import { EVENT_DETAILS, EVENT_LIST } from '../mockData';

export function searchEvents({ keyword = "", city = "" }) {
  const k = keyword.trim().toLowerCase();
  const c = city.trim().toLowerCase();

  return EVENT_LIST.filter(event => {
    const matchesKeyword =
      !k ||
      event.name.toLowerCase().includes(k) ||
      event.category.toLowerCase().includes(k);

    const matchesCity = !c || event.city.toLowerCase() === c;

    return matchesKeyword && matchesCity;
  });
}


export async function getEventById(id) {
  return EVENT_DETAILS[id];
}
