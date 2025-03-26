// Generic reusable filter function named filterItems
export function filterItems<T>(
  items: T[],
  callback: (item: T) => boolean
): T[] {
  return items.filter(callback);
}
