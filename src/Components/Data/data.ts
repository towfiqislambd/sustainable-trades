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
    }
  ];
