import { EnumObject } from "../_Interfaces/EnumObject";

export const createEnumObject = <T extends EnumObject>(enumObject: T): T =>
  enumObject;
