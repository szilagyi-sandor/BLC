import { EnumItem } from "../_Interfaces/EnumItem";
import { EnumObject } from "../_Interfaces/EnumObject";

export const getEnumObjectById = (
  enumObject: EnumObject,
  id: number
): EnumItem | undefined => {
  const keys = Object.keys(enumObject);

  for (let i = 0; i < keys.length; i++) {
    const item = enumObject[keys[i]];

    if (item && item.id === id) {
      return item;
    }
  }

  return undefined;
};
