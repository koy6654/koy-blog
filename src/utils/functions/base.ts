import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function tailwindMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uppercaseFirstLetter(word: string) {
  if (word == null) {
    return null;
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}
