"use client";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  Circle,
  useJsApiLoader,
} from "@react-google-maps/api";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

const containerStyle = {
  width: "100%",
  height: "550px",
  borderRadius: "12px",
  position: "relative" as const,
};

interface ProductImage {
  id: number;
  product_id: number;
  image: string;
}

interface Address {
  id: number;
  shop_info_id: number;
  address_line_1: string;
  address_line_2?: string | null;
  city: string | null;
  state: string | null;
  postal_code: string;
  latitude: string | null;
  longitude: string | null;
  display_my_address: boolean;
  address_10_mile: boolean;
  do_not_display: boolean;
}

interface Shop {
  id: number;
  user_id: number;
  shop_name: string;
  address: Address;
}

interface Product {
  id: number;
  shop_info_id: number;
  product_name: string;
  product_price: number;
  reviews_avg_rating: number | null;
  images: ProductImage[];
  shop: Shop;
}

interface ProductMapProps {
  products: Product[];
  hoveredProduct?: Product | null;
  productLoading?: boolean;
}

const ProductMap: React.FC<ProductMapProps> = ({
  products,
  hoveredProduct,
  productLoading,
}) => {
  const [selected, setSelected] = useState<Product | null>(null);
  const router = useRouter();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const locations = products
    .map(product => {
      const addr = product.shop?.address;
      if (!addr) return null;

      const lat = parseFloat(addr.latitude ?? "0");
      const lng = parseFloat(addr.longitude ?? "0");

      if (!lat || !lng) return null;

      return {
        id: product.id,
        lat,
        lng,
        product,
      };
    })
    .filter(
      (
        item
      ): item is { id: number; lat: number; lng: number; product: Product } =>
        item !== null
    );

  const defaultCenter = locations[0]
    ? { lat: locations[0].lat, lng: locations[0].lng }
    : { lat: 23.78, lng: 90.39 };

  useEffect(() => {
    if (!hoveredProduct?.shop?.address) {
      setSelected(null);
      return;
    }

    const addr = hoveredProduct.shop.address;
    const lat = parseFloat(addr.latitude ?? "0");
    const lng = parseFloat(addr.longitude ?? "0");

    if (lat && lng) {
      setSelected(hoveredProduct);
    } else {
      setSelected(null);
    }
  }, [hoveredProduct]);

  if (!isLoaded) {
    return <p className="text-center text-gray-500">Loading map...</p>;
  }

  return (
    <div className="relative w-full h-[550px]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={11}
      >
        {locations.map(loc => {
          const addr = loc.product.shop.address;
          const { display_my_address, address_10_mile, do_not_display } = addr;

          if (!display_my_address && !address_10_mile && !do_not_display)
            return null;

          return (
            <React.Fragment key={loc.id}>
              {(address_10_mile || do_not_display) && (
                <Circle
                  center={{ lat: loc.lat, lng: loc.lng }}
                  radius={804}
                  options={{
                    strokeColor: "#4CAF50",
                    strokeOpacity: 0.7,
                    strokeWeight: 2,
                    fillColor: "#4CAF50",
                    fillOpacity: 0.25,
                  }}
                  onClick={() => setSelected(loc.product)}
                />
              )}
              <Marker
                position={{ lat: loc.lat, lng: loc.lng }}
                onClick={() => setSelected(loc.product)}
              />
            </React.Fragment>
          );
        })}

        {/* InfoWindow */}
        {selected && (
          <InfoWindow
            position={{
              lat: parseFloat(selected.shop.address.latitude ?? "0"),
              lng: parseFloat(selected.shop.address.longitude ?? "0"),
            }}
            onCloseClick={() => setSelected(null)}
            options={{
              pixelOffset: new google.maps.Size(0, -35),
            }}
          >
            <div
              onClick={() => router.push(`/product-details/${selected.id}`)}
              className="w-[220px] cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group flex gap-3"
            >
              {productLoading ? (
                <div className="w-full h-24 bg-gray-200 animate-pulse" />
              ) : (
                <>
                  {/* Product Image */}
                  <figure className="size-[70px] overflow-hidden shrink-0 rounded-lg">
                    <img
                      src={`${process.env.NEXT_PUBLIC_SITE_URL}/${selected.images?.[0]?.image}`}
                      alt={selected.product_name}
                      className="size-full object-cover rounded-lg"
                    />
                  </figure>

                  <div>
                    {/* Product Name */}
                    <h3 className="text-sm font-semibold text-primary-green truncate group-hover:underline">
                      {selected.product_name}
                    </h3>

                    {/* Reviews */}
                    <div className="flex gap-0.5 items-center py-1">
                      {Array.from({
                        length: +(selected.reviews_avg_rating || 0),
                      }).map((_, idx) => (
                        <FaStar
                          key={idx}
                          className="text-primary-green text-xs"
                        />
                      ))}
                      {Array.from({
                        length: 5 - +(selected.reviews_avg_rating || 0),
                      }).map((_, idx) => (
                        <FaRegStar
                          key={idx}
                          className="text-primary-green text-xs"
                        />
                      ))}
                    </div>

                    {/* Location */}
                    <p className="text-secondary-gray font-semibold text-xs">
                      {selected.shop.address.display_my_address
                        ? selected.shop.address.address_line_1
                        : `${selected.shop.address.city || "N/A"}, ${
                            selected.shop.address.state || "N/A"
                          }`}
                    </p>
                  </div>
                </>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default ProductMap;
