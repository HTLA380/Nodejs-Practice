import { format, getTime, formatDistanceToNow } from "date-fns";

export function fDate(date: string, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date: Date, newFormat: string) {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date: Date) {
  return date ? getTime(new Date(date)) : "";
}

export function fToNow(date: Date, isOneWord = false) {
  if (!date) return "";

  const distance = formatDistanceToNow(new Date(date), {
    includeSeconds: true,
    addSuffix: true,
  });

  if (isOneWord) {
    // Extracting only the numerical part and the unit
    const [, number, unit] = distance.match(/(\d+)\s(\w+)/) || [];

    return `${number}${unit[0]}`; // Return only the number and the first character of the unit (e.g., 3d)
  }

  return distance;
}
