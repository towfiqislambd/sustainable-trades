import OrderImage from "../../Assets/orderimage.png";
import p1 from "@/Assets/p1.jpg";

// All Fake Data
export const data = [
  {
    id: 1,
    title: "notebook",
    description: "desc....",
  },
  {
    id: 2,
    title: "notebook",
    description: "desc....",
  },
  {
    id: 3,
    title: "notebook",
    description: "desc....",
  },
];

export const orders = [
  {
    id: "114-4026893",
    placedDate: "July 5, 2024",
    total: "$46.97",
    arrivingText: "Delivered",
    packageNote: "Your package was left near the front door or porch.",
    productName: "Organic Soap",
    productImage: OrderImage,
    status: "Buy Again",
  },
  {
    id: "114-4026894",
    placedDate: "July 3, 2024",
    total: "$29.99",
    arrivingText: "Local Pickup Completed",
    packageNote: "Your package was left at the reception.",
    productName: "Handmade Lotion",
    productImage: OrderImage,
    status: "Cancelled Orders",
  },
  {
    id: "114-4026895",
    placedDate: "July 1, 2024",
    total: "$59.50",
    arrivingText: "Arriving Tomorrow",
    packageNote: "Delivered to your mailbox.",
    productName: "Shampoo Set",
    productImage: OrderImage,
    status: "Not Shipped",
  },
];

export const data2 = [
  {
    id: 1,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: true,
  },
  {
    id: 2,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: true,
  },
  {
    id: 3,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: true,
  },
  {
    id: 4,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: true,
  },
];

export const shopdata = [
  {
    id: 1,
    shop_image: p1,
    shop_name:
      "Silk Skin CA Tower, new delhi, India CA Tower, new delhi, India CA Tower, new delhi, India",
    shop_location: "CA Tower, new delhi, India",
  },
  {
    id: 2,
    shop_image: p1,
    shop_name: "Silk Skin",
    shop_location: "CA Tower, new delhi, India",
  },
  {
    id: 3,
    shop_image: p1,
    shop_name: "Silk Skin",
    shop_location: "CA Tower, new delhi, India",
  },
  {
    id: 4,
    shop_image: p1,
    shop_name: "Silk Skin",
    shop_location: "CA Tower, new delhi, India",
  },
];

export const testimonial = [
  {
    id: 1,
    type: "product",
    productId: 101,
    productName: "Wireless Headphones",
    rating: 2,
    avatar: p1,
    review:
      "I really enjoyed the sound quality and the comfort of these headphones.",
    date: "2025-08-20",
  },
  {
    id: 2,
    type: "shop",
    shopId: 501,
    shopName: "TechWave Store",
    rating: 4,
    review: "Great store with helpful staff. Delivery was quick too!",
    date: "2025-08-22",
    avatar: p1,
  },
  {
    id: 3,
    type: "product",
    productId: 102,
    productName: "Smart Watch",
    avatar: p1,
    rating: 3,
    review: "Decent watch with nice features, but battery drains too fast.",
    date: "2025-08-24",
  },
];

interface Order {
  id: string;
  date: string;
  customer: string;
  email: string;
  optIn: string;
  items: number;
  amount: string;
  status: "Pending" | "Shipped" | "Delivered" | "Canceled";
}
export const ordersData: Order[] = [
  {
    id: "#155496",
    date: "Jun 25, 2024",
    customer: "Amy Woods",
    email: "email@gmail.com",
    optIn: "Yes",
    items: 3,
    amount: "$16.78",
    status: "Pending",
  },
  {
    id: "#147605",
    date: "Jun 23, 2024",
    customer: "Erick Jones",
    email: "email@gmail.com",
    optIn: "No",
    items: 2,
    amount: "$10.56",
    status: "Pending",
  },
  {
    id: "#147586",
    date: "Jun 22, 2024",
    customer: "Rebecca Garcia",
    email: "email@gmail.com",
    optIn: "Yes",
    items: 6,
    amount: "$26.76",
    status: "Pending",
  },
  {
    id: "#142501",
    date: "Jun 19, 2024",
    customer: "Ariana Ortiz",
    email: "email@gmail.com",
    optIn: "Yes",
    items: 4,
    amount: "$19.27",
    status: "Shipped",
  },
  {
    id: "#141989",
    date: "Jun 19, 2024",
    customer: "Jody Mason",
    email: "email@gmail.com",
    optIn: "Yes",
    items: 9,
    amount: "$42.77",
    status: "Shipped",
  },
  {
    id: "#140989",
    date: "Jun 19, 2024",
    customer: "Dilon Hester",
    email: "email@gmail.com",
    optIn: "Yes",
    items: 9,
    amount: "$42.77",
    status: "Shipped",
  },
  {
    id: "#135496",
    date: "Jun 10, 2024",
    customer: "Nia Howard",
    email: "email@gmail.com",
    optIn: "Yes",
    items: 7,
    amount: "$39.78",
    status: "Delivered",
  },
  {
    id: "#134877",
    date: "Jun 7, 2024",
    customer: "Vincent Ramos",
    email: "email@gmail.com",
    optIn: "No",
    items: 6,
    amount: "$39.32",
    status: "Canceled",
  },
  {
    id: "#133476",
    date: "Jun 7, 2024",
    customer: "Becca Hart",
    email: "email@gmail.com",
    optIn: "No",
    items: 6,
    amount: "$39.32",
    status: "Canceled",
  },
  {
    id: "#129116",
    date: "Jun 2, 2024",
    customer: "Peyton McClaire",
    email: "email@gmail.com",
    optIn: "Yes",
    items: 10,
    amount: "$77.09",
    status: "Delivered",
  },
];
