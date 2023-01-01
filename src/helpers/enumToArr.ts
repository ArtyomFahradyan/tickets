type Enum<E> = Record<keyof E, string | number> & {
  [k: string]: string | number;
};
export default function enumToArray<E extends Enum<E>>(enumObject: E) {
  const enumArray = [];

  for (const key in enumObject) {
    enumArray.push(enumObject[key]);
  }

  return enumArray;
}
