"use client";
import React, { use, useEffect } from "react";
import { useEditShop } from "@/Hooks/api/auth_api";
import { getShopDetails } from "@/Hooks/api/cms_api";
import Container from "@/Components/Common/Container";
import { useForm, FormProvider } from "react-hook-form";
import EditFormTwo from "@/Components/PageComponents/EditForm/EditFormTwo";
import EditFormFour from "@/Components/PageComponents/EditForm/EditFormFour";
import EditFormThree from "@/Components/PageComponents/EditForm/EditFormThree";

type ProfileFormValues = {
  first_name: string;
  last_name: string;
  company_name?: string;
  phone?: string;

  shop_image?: File | null;
  shop_banner?: File | null;
  shop_name?: string;
  shop_city?: string;
  email?: string;

  tagline: string;
  statement: string;
  our_story: string;

  shipping_information: string;
  return_policy: string;
  payment_methods: any;

  website_url: string;
  facebook_url: string;
  instagram_url: string;
  pinterest_url: string;

  country?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  geoOption?: "exact" | "radius" | "zip";
  lat?: number;
  lng?: number;
};

interface Props {
  params: Promise<{ id: string }>;
}

const Page = ({ params }: Props) => {
  // Hook
  const { id } = use(params);
  const { data: shopDetailsData, isLoading } = getShopDetails(id);
  const methods = useForm<ProfileFormValues>();
  const { mutate: editShopMutation, isPending } = useEditShop();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },

  } = methods;

  useEffect(() => {
    if (shopDetailsData?.data) {
      const initialAddress =
        shopDetailsData?.data?.shop_info?.address?.address_line_1 ||
        "Private Location";
      reset({
        first_name: shopDetailsData.data.first_name || "",
        last_name: shopDetailsData.data.last_name || "",
        company_name: shopDetailsData.data.company_name || "",
        phone: shopDetailsData.data.phone || "",
        email: shopDetailsData.data.email || "",
        shop_name: shopDetailsData.data.shop_info?.shop_name || "",
        shop_city: shopDetailsData.data.shop_info?.shop_city || "",
        tagline: shopDetailsData?.data?.shop_info?.about?.tagline || "",
        statement: shopDetailsData?.data?.shop_info?.about?.statement || "",
        our_story: shopDetailsData?.data?.shop_info?.about?.our_story || "",
        shipping_information:
          shopDetailsData?.data?.shop_info?.policies?.shipping_information ||
          "",
        return_policy:
          shopDetailsData?.data?.shop_info?.policies?.return_policy || "",
        website_url:
          shopDetailsData?.data?.shop_info?.social_links?.website_url || "",
        facebook_url:
          shopDetailsData?.data?.shop_info?.social_links?.facebook_url || "",
        instagram_url:
          shopDetailsData?.data?.shop_info?.social_links?.instagram_url || "",
        pinterest_url:
          shopDetailsData?.data?.shop_info?.social_links?.pinterest_url || "",
        payment_methods:
          shopDetailsData?.data?.shop_info?.policies?.payment_methods || [],
        country: shopDetailsData?.data?.shop_info?.address?.country || "",
        address: initialAddress,
        city: shopDetailsData?.data?.shop_info?.address?.city || "",
        state: shopDetailsData?.data?.shop_info?.address?.state || "",
        zipcode: shopDetailsData?.data?.shop_info?.address?.postal_code || "",
        geoOption: initialAddress === "Private Location" ? "zip" : "exact",
      });
    }
  }, [shopDetailsData, reset]);

  const onSubmit = async (data: ProfileFormValues) => {

    if (!data.address || data.address.trim() === "") {
      data.address = "Private Location";
    }

    const payload = {
      ...data,
      address_line_1: data.address,
      postal_code: data.zipcode,
      city: data.city,
      state: data.state,
      country: data.country,
    };

    editShopMutation(payload);
  };

  return (
    <section className="pt-[34px] lg:pb-[96px] pb-[40px]">
      <Container>
        <div className="2xl:px-[220px]">
          <h2 className="lg:text-[40px] text-[30px] lg:text-start text-center font-bold text-[#000]">
            Comprehensive Edit
          </h2>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit as any)}>
              {/* Profile Info */}
              <div className="lg:mt-[45px] mt-[30px]">
                <h2 className="mt-5 text-[#274F45] text-[20px] font-semibold">
                  Profile Info
                </h2>
                <p className="text-[16px] text-[#4B4A47] font-normal font-lato">
                  <span className="text-[#8B200C]">*</span>Indicates a required
                  field
                </p>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-7 lg:gap-y-10 gap-y-5">
                  {/* First Name */}
                  <div>
                    <p className="form-label">First Name *</p>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="First Name"
                      {...register("first_name")}
                    />
                    {errors.first_name?.message && (
                      <p className="text-red-600">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <p className="form-label">Last Name *</p>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Last Name"
                      {...register("last_name")}
                    />
                    {errors.last_name?.message && (
                      <p className="text-red-600">{errors.last_name.message}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <p className="form-label">Company Name (optional)</p>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Company Name"
                      {...register("company_name")}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="form-label">Phone</p>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Phone Number"
                      {...register("phone")}
                    />
                  </div>
                </div>
              </div>

              {/* Child Forms */}
              <div className="my-12">
                <EditFormTwo data={shopDetailsData?.data} />
              </div>
              <div className="my-12">
                <EditFormThree data={shopDetailsData?.data} />
              </div>
              <div className="my-12">
                <EditFormFour data={shopDetailsData?.data} />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isPending}
                  className="auth-secondary-btn w-full md:w-fit"
                >
                  {isPending ? "Updating...." : " Update Profile"}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
    </section>
  );
};

export default Page;
