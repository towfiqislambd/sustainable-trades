export type StepProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: Partial<FormData>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<FormData>>>;
};
export type AddressFormData = {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipcode: string;
};
export type OrderStatus =
  | "Pending"
  | "Shipped"
  | "Delivered"
  | "Canceled"
  | "Local";
  
export type Order = {
  id: string;
  date: string;
  customer: string;
  email: string;
  optIn: string;
  items: number;
  amount: string;
  status: OrderStatus;
  fullfill: string;
};


export interface FormData {
  shop_info_id: string;
  product_name: string;
  product_price: string;
  product_quantity: string;
  category_id: string;
  sub_category_id: string;
  product_condition: string;
  description: string;
  video_url: string;
  cost?: string;
  weight?: string;
  images: File[];
}

