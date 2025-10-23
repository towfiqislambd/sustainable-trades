"use client";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
  Circle,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "550px",
  borderRadius: "12px",
  position: "relative" as const,
};

interface Address {
  id: number;
  shop_info_id: number;
  address_line_1: string;
  address_line_2?: string | null;
  city: string;
  state: string;
  postal_code: string;
  latitude: string;
  longitude: string;
  display_my_address: boolean;
  address_10_mile: boolean;
  do_not_display: boolean;
}

interface ShopInfo {
  id: number;
  user_id: number;
  shop_name: string;
  shop_image: string;
  shop_banner?: string;
  address: Address;
}

interface Shop {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  avatar?: string | null;
  shop_info: ShopInfo;
}

interface LocationData {
  id: number;
  name: string;
  image: string;
  lat: number;
  lng: number;
  visibility: {
    displayExact: boolean;
    withinTenMile: boolean;
    hideLocation: boolean;
  };
  address: Address;
}

interface SelectedShop {
  lat: number;
  lng: number;
  name: string;
  image?: string;
  address: Address;
}

interface ShopsMapProps {
  shops: Shop[];
  hoveredShop?: Shop | null;
  shopLoading?: boolean;
}

const ShopsMap: React.FC<ShopsMapProps> = ({
  shops,
  hoveredShop,
  shopLoading,
}) => {
  const [selected, setSelected] = useState<SelectedShop | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const locations: LocationData[] =
    shops
      ?.map(shop => {
        const info = shop.shop_info;
        const addr = info?.address;
        if (!addr) return null;

        const lat = parseFloat(addr.latitude ?? "0");
        const lng = parseFloat(addr.longitude ?? "0");
        if (!lat || !lng) return null;

        return {
          id: shop.id,
          name: info.shop_name,
          image: info.shop_image,
          lat,
          lng,
          visibility: {
            displayExact: addr.display_my_address,
            withinTenMile: addr.address_10_mile,
            hideLocation: addr.do_not_display,
          },
          address: addr,
        };
      })
      ?.filter((item): item is LocationData => item !== null) || [];

  const defaultCenter = locations[0]
    ? { lat: locations[0].lat, lng: locations[0].lng }
    : { lat: 23.78, lng: 90.39 };

  useEffect(() => {
    const addr = hoveredShop?.shop_info?.address;
    if (!addr) {
      setSelected(null);
      return;
    }

    const lat = parseFloat(addr.latitude);
    const lng = parseFloat(addr.longitude);

    if (
      addr.display_my_address ||
      addr.address_10_mile ||
      addr.do_not_display
    ) {
      setSelected({
        lat,
        lng,
        name: hoveredShop.shop_info.shop_name,
        image: hoveredShop.shop_info.shop_image,
        address: addr,
      });
    } else {
      setSelected(null);
    }
  }, [hoveredShop]);

  if (!isLoaded)
    return <p className="text-center text-gray-500">Loading map...</p>;

  return (
    <div className="relative w-full h-[550px]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={12}
      >
        {/* Render shop markers or radius */}
        {locations.map(loc => {
          const { displayExact, withinTenMile, hideLocation } = loc.visibility;

          // Show exact marker if display_my_address is true
          if (displayExact) {
            return (
              <Marker
                key={loc.id}
                position={{ lat: loc.lat, lng: loc.lng }}
                onClick={() => setSelected(loc)}
              />
            );
          }

          // Show 0.5-mile (~804m) radius + marker if withinTenMile OR hideLocation is true
          if (withinTenMile || hideLocation) {
            return (
              <React.Fragment key={loc.id}>
                <Circle
                  center={{ lat: loc.lat, lng: loc.lng }}
                  radius={804} // 0.5 mile in meters
                  options={{
                    strokeColor: "#4CAF50",
                    strokeOpacity: 0.7,
                    strokeWeight: 2,
                    fillColor: "#4CAF50",
                    fillOpacity: 0.25,
                  }}
                  onClick={() => setSelected(loc)}
                />
                <Marker
                  position={{ lat: loc.lat, lng: loc.lng }}
                  onClick={() => setSelected(loc)}
                />
              </React.Fragment>
            );
          }

          return null;
        })}

        {/* InfoWindow for selected shop */}
        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
            options={{
              pixelOffset: new google.maps.Size(0, -40),
            }}
          >
            <div className="flex items-center gap-2">
              {shopLoading ? (
                <div className="w-24 h-12 bg-gray-200 animate-pulse rounded-md" />
              ) : (
                <>
                  {selected.image && (
                    <img
                      src={`${process.env.NEXT_PUBLIC_SITE_URL}/${selected.image}`}
                      alt={selected.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  )}
                  <span className="text-sm font-semibold">{selected.name}</span>
                </>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default ShopsMap;
