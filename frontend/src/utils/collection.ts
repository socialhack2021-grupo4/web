export const groupBy = <Item>(
  collection: Array<Item>,
  getKey: (item: Item) => string,
): Record<string, Array<Item>> =>
  collection.reduce(
    (otherItems, item) => ({
      ...otherItems,
      [getKey(item)]: [...(otherItems[getKey(item)] ?? []), item],
    }),
    {},
  );
