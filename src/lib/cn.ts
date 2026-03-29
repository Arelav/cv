import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merges class names; tailwind-merge resolves conflicting utilities last-wins. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
