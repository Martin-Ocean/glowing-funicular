import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function price_formatter(currency: string, price: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency, 
  });
  return formatter.format(price);
  
}