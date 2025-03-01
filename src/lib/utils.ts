import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, isValid, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateInviteeCode(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function snakeCaseToTitleCase(str: string) {
  return str
    .toLowerCase()
    .replace(/_/g, "")
    .replace(/\bw/g, (char) => char.toUpperCase());
}

export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return "No due date";
  
  try {
    const date = parseISO(dateString);
    if (!isValid(date)) return "Invalid date";
    
    // Format: "Wed, Feb 5, 2025 at 11:00 PM"
    return format(date, "EEE, MMM d, yyyy");
  } catch (error) {
    return "Invalid date format";
  }
};