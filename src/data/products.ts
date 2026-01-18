import { Product, Category } from "@/types/store";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "tech",
    price: 89.99,
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    color: "Black",
    specs: ["Bluetooth 5.0", "24h Battery", "IPX8 Waterproof"],
    badge: "IPX8"
  },
  {
    id: 2,
    name: "AirPods Max",
    category: "tech",
    price: 549.0,
    originalPrice: 649.0,
    image: "https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    color: "Pink",
    specs: ["Noise Cancelling", "20h Battery", "Spatial Audio"],
    badge: "55% OFF"
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    category: "tech",
    price: 199.99,
    image: "https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    color: "Black",
    specs: ["Premium Sound", "Sweat Resistant", "15h Battery"]
  },
  {
    id: 4,
    name: "VIVEFOX Headphones",
    category: "tech",
    price: 129.99,
    image: "https://images.pexels.com/photos/3394660/pexels-photo-3394660.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    color: "Blue",
    specs: ["Gaming", "Built-in Mic", "RGB Lights"],
    badge: "NEW"
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "tech",
    price: 399.99,
    image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    color: "Silver",
    specs: ["30h Battery", "LDAC", "Auto NC"],
    badge: "BEST SELLER"
  },
  {
    id: 6,
    name: "MacBook Pro 16",
    category: "tech",
    price: 2499.99,
    image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    color: "Silver",
    specs: ["M3 Pro", "18h Battery", "Retina Display"],
    badge: "PRO"
  },
  {
    id: 7,
    name: "The Art of Innovation",
    category: "books",
    price: 24.99,
    image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    color: "Hardcover",
    specs: ["Business", "Best Seller", "320 Pages"]
  },
  {
    id: 8,
    name: "Atomic Habits",
    category: "books",
    price: 18.99,
    originalPrice: 27.99,
    image: "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    color: "Paperback",
    specs: ["Self-Help", "Best Seller", "320 Pages"],
    badge: "TRENDING"
  },
  {
    id: 9,
    name: "Design Thinking",
    category: "books",
    price: 32.99,
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    color: "Hardcover",
    specs: ["Design", "Illustrated", "280 Pages"]
  },
  {
    id: 10,
    name: "JavaScript Mastery",
    category: "books",
    price: 45.99,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    color: "Paperback",
    specs: ["Programming", "Advanced", "520 Pages"],
    badge: "NEW"
  },
  {
    id: 11,
    name: "Leather Tote Bag",
    category: "bags",
    price: 189.99,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    color: "Brown",
    specs: ["Genuine Leather", "Spacious", "Handcrafted"],
    badge: "LUXURY"
  },
  {
    id: 12,
    name: "Designer Crossbody",
    category: "bags",
    price: 129.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/1204464/pexels-photo-1204464.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    color: "Black",
    specs: ["Premium", "Adjustable Strap", "Compact"],
    badge: "35% OFF"
  },
  {
    id: 13,
    name: "Canvas Backpack",
    category: "bags",
    price: 79.99,
    image: "https://images.pexels.com/photos/1545998/pexels-photo-1545998.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    color: "Gray",
    specs: ["Laptop Pocket", "Water Resistant", "Durable"]
  },
  {
    id: 14,
    name: "Evening Clutch",
    category: "bags",
    price: 89.99,
    image: "https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    color: "Gold",
    specs: ["Elegant", "Chain Strap", "Compact"],
    badge: "TRENDING"
  },
  {
    id: 15,
    name: "Modern Armchair",
    category: "furniture",
    price: 459.99,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    color: "Gray",
    specs: ["Velvet", "Ergonomic", "Wood Legs"],
    badge: "POPULAR"
  },
  {
    id: 16,
    name: "Minimalist Desk",
    category: "furniture",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    color: "White",
    specs: ["Oak Wood", "Spacious", "Modern"],
    badge: "25% OFF"
  },
  {
    id: 17,
    name: "Bookshelf Unit",
    category: "furniture",
    price: 199.99,
    image: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    color: "Brown",
    specs: ["5 Shelves", "Solid Wood", "Easy Assembly"]
  },
  {
    id: 18,
    name: "Coffee Table",
    category: "furniture",
    price: 179.99,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    color: "Walnut",
    specs: ["Round", "Storage", "Mid-Century"]
  },
  {
    id: 19,
    name: "Air Max 90",
    category: "sneakers",
    price: 149.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    color: "White",
    specs: ["Nike", "Air Cushion", "Classic"],
    badge: "ICONIC"
  },
  {
    id: 20,
    name: "Running Pro",
    category: "sneakers",
    price: 129.99,
    originalPrice: 169.99,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    color: "Black",
    specs: ["Breathable", "Lightweight", "Shock Absorb"],
    badge: "SALE"
  },
  {
    id: 21,
    name: "Casual Canvas",
    category: "sneakers",
    price: 59.99,
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    color: "Navy",
    specs: ["Comfortable", "Everyday", "Durable"]
  },
  {
    id: 22,
    name: "Basketball High-Top",
    category: "sneakers",
    price: 189.99,
    image: "https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    color: "Red",
    specs: ["Ankle Support", "Grip Sole", "Performance"],
    badge: "PRO"
  },
  {
    id: 23,
    name: "Carry-On Luggage",
    category: "travel",
    price: 199.99,
    image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    color: "Black",
    specs: ["TSA Lock", "Spinner Wheels", "Expandable"],
    badge: "TRAVEL ESSENTIAL"
  },
  {
    id: 24,
    name: "Travel Backpack",
    category: "travel",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    color: "Gray",
    specs: ["40L", "Anti-Theft", "USB Port"],
    badge: "30% OFF"
  },
  {
    id: 25,
    name: "Toiletry Kit",
    category: "travel",
    price: 34.99,
    image: "https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    color: "Brown",
    specs: ["Waterproof", "Compact", "Multiple Pockets"]
  },
  {
    id: 26,
    name: "Neck Pillow Set",
    category: "travel",
    price: 29.99,
    image: "https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    color: "Blue",
    specs: ["Memory Foam", "Eye Mask", "Ear Plugs"],
    badge: "COMFORT"
  }
];

export const categories: Category[] = [
  {
    id: "furniture",
    name: "Furniture",
    description: "Modern & Classic",
    icon: "Armchair"
  },
  {
    id: "bags",
    name: "Hand Bag",
    description: "Luxury Brands",
    icon: "ShoppingBag"
  },
  {
    id: "books",
    name: "Books",
    description: "Best Sellers",
    icon: "BookOpen"
  },
  {
    id: "tech",
    name: "Tech",
    description: "Latest Gadgets",
    icon: "Laptop"
  },
  {
    id: "sneakers",
    name: "Sneakers",
    description: "Sport & Casual",
    icon: "Footprints"
  },
  {
    id: "travel",
    name: "Travel",
    description: "Accessories",
    icon: "Luggage"
  }
];
