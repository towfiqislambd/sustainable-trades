"use client";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "550px",
  borderRadius: "12px",
};

interface ShopsMapProps {
  shops: any[];
  hoveredShop?: any;
  shopLoading?: boolean;
}

const ShopsMap: React.FC<ShopsMapProps> = ({
  shops,
  hoveredShop,
  shopLoading,
}) => {
  const [selected, setSelected] = useState<any>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const locations =
    shops
      ?.map((shop: any) => {
        const lat = parseFloat(shop?.shop_info?.address?.latitude ?? "0");
        const lng = parseFloat(shop?.shop_info?.address?.longitude ?? "0");
        const name = shop?.shop_info?.shop_name;
        const image = shop?.shop_info?.shop_image;
        return lat && lng ? { lat, lng, name, image } : null;
      })
      ?.filter(Boolean) || [];

  const defaultCenter = locations[0] || { lat: 23.78, lng: 90.39 };

  useEffect(() => {
    if (
      hoveredShop?.shop_info?.address?.latitude &&
      hoveredShop?.shop_info?.address?.longitude
    ) {
      const lat = parseFloat(hoveredShop.shop_info.address.latitude);
      const lng = parseFloat(hoveredShop.shop_info.address.longitude);
      setSelected({
        lat,
        lng,
        name: hoveredShop.shop_info.shop_name,
        image: hoveredShop.shop_info.shop_image,
      });
    } else {
      setSelected(null);
    }
  }, [hoveredShop]);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={12}
    >
      {locations.map((loc: any, index: number) => (
        <Marker
          key={index}
          position={{ lat: loc.lat, lng: loc.lng }}
          onClick={() => setSelected(loc)}
        />
      ))}

      {selected && (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => setSelected(null)}
          options={{
            pixelOffset: new google.maps.Size(0, -40), // move InfoWindow 40px above the marker
          }}
        >
          <div className="flex items-center gap-2">
            {shopLoading ? (
              <div className="w-24 h-12 bg-gray-200 animate-pulse rounded-md" /> // Skeleton
            ) : (
              selected.image && (
                <img
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${selected.image}`}
                  alt={selected.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
              )
            )}
            <span className="text-sm font-semibold">{selected.name}</span>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default ShopsMap;
