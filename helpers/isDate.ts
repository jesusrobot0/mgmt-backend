import { isValid } from "date-fns";

export function isDate(value: string) {
  if (!value) return false;

  const fecha = isValid(value);

  if (fecha) {
    return true;
  } else {
    return false;
  }
}
