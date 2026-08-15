export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  emoji: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 1999,
    category: "Laptops",
    emoji: "💻",
  },
  {
    id: 2,
    name: "iPhone 17",
    price: 999,
    category: "Phones",
    emoji: "📱",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    category: "Audio",
    emoji: "🎧",
  },
  {
    id: 4,
    name: "iPad Air",
    price: 599,
    category: "Tablets",
    emoji: "📱",
  },
];
