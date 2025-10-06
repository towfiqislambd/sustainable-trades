"use client";
import React from "react";
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
}

const ShopsMap: React.FC<ShopsMapProps> = ({ shops }) => {
  const [selected, setSelected] = React.useState<any>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) return <p>Loading map...</p>;

  // Convert backend shop data into lat/lng points
  const locations =
    shops
      ?.map((shop: any) => {
        const lat = parseFloat(shop?.shop_info?.address?.latitude ?? "0");
        const lng = parseFloat(shop?.shop_info?.address?.longitude ?? "0");
        const name = shop?.shop_info?.shop_name;
        return lat && lng ? { lat, lng, name } : null;
      })
      ?.filter(Boolean) || [];

  // Default center (Dhaka)
  const center = locations[0] || { lat: 23.78, lng: 90.39, name: "Default" };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
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
        >
          <div className="text-sm font-semibold">{selected.name}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default ShopsMap;
