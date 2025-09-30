import toast from "react-hot-toast";
import useClientApi from "@/Hooks/useClientApi";

// Add Product
export const useAddProduct = () => {
  return useClientApi({
    method: "post",
    key: ["add-product"],
    isPrivate: true,
    endpoint: `/products-store`,
    onSuccess: (data: any) => {
      if (data?.success) {
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};





// "use client";

// import { useForm } from "react-hook-form";
// import { useAddProduct } from "@/hooks/useAddProduct";

// type ProductFormValues = {
//   shop_info_id: number;
//   product_name: string;
//   product_price: string;
//   product_quantity: string;
//   weight: string;
//   cost: string;
//   unlimited_stock: boolean;
//   out_of_stock: boolean;
//   video?: string | null;
//   description: string;
//   category_id: string;
//   sub_category_id: string;
//   fulfillment: string;
//   selling_option: string;
//   is_featured: boolean;
//   status: string;
//   meta_tags: string; // 👈 will split into array
//   images: FileList; // 👈 file input
// };

// const AddProductPage = () => {
//   const { register, handleSubmit, reset } = useForm<ProductFormValues>();
//   const { mutate: addProduct, isLoading } = useAddProduct();

//   const onSubmit = (data: ProductFormValues) => {
//     // Prepare form data for API
//     const formData = new FormData();

//     formData.append("shop_info_id", String(data.shop_info_id));
//     formData.append("product_name", data.product_name);
//     formData.append("product_price", data.product_price);
//     formData.append("product_quantity", data.product_quantity);
//     formData.append("weight", data.weight);
//     formData.append("cost", data.cost);
//     formData.append("unlimited_stock", String(data.unlimited_stock));
//     formData.append("out_of_stock", String(data.out_of_stock));
//     formData.append("video", data.video || "");
//     formData.append("description", data.description);
//     formData.append("category_id", data.category_id);
//     formData.append("sub_category_id", data.sub_category_id);
//     formData.append("fulfillment", data.fulfillment);
//     formData.append("selling_option", data.selling_option);
//     formData.append("is_featured", String(data.is_featured));
//     formData.append("status", data.status);

//     // meta_tags (comma separated -> array)
//     const tags = data.meta_tags.split(",").map(tag => tag.trim());
//     tags.forEach((tag, index) => {
//       formData.append(`meta_tags[${index}]`, tag);
//     });

//     // images
//     if (data.images?.length > 0) {
//       Array.from(data.images).forEach(file => {
//         formData.append("images[]", file);
//       });
//     }

//     // Call API
//     addProduct(formData, {
//       onSuccess: () => reset(),
//     });
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Add Product</h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="grid grid-cols-2 gap-4"
//       >
//         <input
//           {...register("shop_info_id")}
//           placeholder="Shop ID"
//           className="border p-2 rounded"
//         />
//         <input
//           {...register("product_name")}
//           placeholder="Product Name"
//           className="border p-2 rounded"
//         />
//         <input
//           {...register("product_price")}
//           placeholder="Price"
//           className="border p-2 rounded"
//         />
//         <input
//           {...register("product_quantity")}
//           placeholder="Quantity"
//           className="border p-2 rounded"
//         />
//         <input
//           {...register("weight")}
//           placeholder="Weight"
//           className="border p-2 rounded"
//         />
//         <input
//           {...register("cost")}
//           placeholder="Cost"
//           className="border p-2 rounded"
//         />

//         <textarea
//           {...register("description")}
//           placeholder="Description"
//           className="border p-2 rounded col-span-2"
//         />

//         <input
//           {...register("category_id")}
//           placeholder="Category ID"
//           className="border p-2 rounded"
//         />
//         <input
//           {...register("sub_category_id")}
//           placeholder="Subcategory ID"
//           className="border p-2 rounded"
//         />

//         <input
//           {...register("fulfillment")}
//           placeholder="Fulfillment"
//           className="border p-2 rounded"
//         />
//         <input
//           {...register("selling_option")}
//           placeholder="Selling Option"
//           className="border p-2 rounded"
//         />

//         <label className="flex items-center space-x-2">
//           <input type="checkbox" {...register("unlimited_stock")} />
//           <span>Unlimited Stock</span>
//         </label>

//         <label className="flex items-center space-x-2">
//           <input type="checkbox" {...register("out_of_stock")} />
//           <span>Out of Stock</span>
//         </label>

//         <label className="flex items-center space-x-2">
//           <input type="checkbox" {...register("is_featured")} />
//           <span>Featured</span>
//         </label>

//         <input
//           {...register("status")}
//           placeholder="Status"
//           className="border p-2 rounded"
//         />

//         <input
//           {...register("video")}
//           placeholder="Video URL (optional)"
//           className="border p-2 rounded col-span-2"
//         />

//         <input
//           {...register("meta_tags")}
//           placeholder="Meta Tags (comma separated)"
//           className="border p-2 rounded col-span-2"
//         />

//         <input
//           type="file"
//           {...register("images")}
//           multiple
//           className="col-span-2"
//         />

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="bg-blue-500 text-white px-4 py-2 rounded col-span-2"
//         >
//           {isLoading ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProductPage;

