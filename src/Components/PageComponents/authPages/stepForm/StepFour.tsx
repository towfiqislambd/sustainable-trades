"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import AddressForm from "@/Components/Modals/LocatorModal";

type StepFourProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
};

const StepFour = ({ step, setStep, onNext, onPrev }: StepFourProps) => {
  const { setValue, trigger, getValues } = useFormContext();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Google Geocoding API
  const fetchLatLngFromAddress = async (address: string) => {
    const API_KEY = "AIzaSyBd0inSWCrbc_VfrUSb_kDr0VmbF2-dYdc"; 
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        return data.results[0].geometry.location;
      } else {
        alert("Address not found. Please enter a valid address or zip code.");
        return null;
      }
    } catch (error) {
      alert("Failed to fetch location. Please try again.");
      return null;
    }
  };

  const handleCheckboxClick = (option: number) => {
    setSelectedOption(option);
    setValue("geoLocatorOption", option);
    setIsModalOpen(true);
  };

  const handleSave = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!selectedOption) return;

    // Fields to validate based on option
    const fieldsToValidate =
      selectedOption === 1 || selectedOption === 2
        ? ["address1", "city", "state", "zipcode"]
        : ["zipcode"];

    const isValid = await trigger(fieldsToValidate);
    if (!isValid) {
      alert("Please fill all required address fields.");
      return;
    }

    // Construct full address
    let address = "";
    if (selectedOption === 1 || selectedOption === 2) {
      const { address1, address2, city, state, zipcode, country } = getValues();
      address = `${address1} ${address2 ?? ""}, ${city}, ${state} ${zipcode}, ${
        country ?? "USA"
      }`;
    } else if (selectedOption === 3) {
      // Zip code only
      const { zipcode, city, state, country } = getValues();
      address = `${zipcode}${city ? ", " + city : ""}${
        state ? ", " + state : ""
      }, ${country ?? "USA"}`;
    }

    // Fetch lat/lng
    const location = await fetchLatLngFromAddress(address);
    if (!location) return;

    // Save location in form state
    setSelectedLocation(location);
    setValue("latitude", location.lat);
    setValue("longitude", location.lng);

    // Close modal
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="my-16">
        <h2 className="auth_title">Geo-Locator</h2>
        <p className="auth_description">
          Let’s decide how you want to show up on the map. Choose from the 3
          options below
        </p>
      </div>

      {/* Map */}
      <div className="relative">
        <iframe
          src={
            selectedLocation
              ? `https://www.google.com/maps/embed/v1/place?key=AIzaSyBd0inSWCrbc_VfrUSb_kDr0VmbF2-dYdc&q=${selectedLocation.lat},${selectedLocation.lng}`
              : "https://www.google.com/maps/embed?pb=!1m18..."
          }
          className="top-0 left-0 filter brightness-75 relative w-full h-[600px] rounded-lg overflow-hidden"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        />
        {/* Options */}
        <div className="absolute top-[56px] right-[112px] z-10 px-6 py-12 max-w-[528px] w-full text-white">
          <div className="bg-[#FFFDF8] bg-opacity-40 p-6 rounded-[8px]">
            <div className="flex flex-col gap-y-10">
              {[1, 2, 3].map(opt => (
                <div key={opt} className="flex gap-x-6 items-start">
                  <input
                    type="checkbox"
                    checked={selectedOption === opt}
                    onChange={() => handleCheckboxClick(opt)}
                    className="border-2 mt-2 cursor-pointer"
                  />
                  <div>
                    <h3 className="text-[#13141D] font-semibold text-[25px] leading-8">
                      {opt === 1 && "Display my business’ exact address."}
                      {opt === 2 &&
                        "Display my location within a 0.5-mile radius of my address."}
                      {opt === 3 && "Do not display my address."}
                    </h3>
                    <p className="text-[#13141D] font-normal text-[18px] mt-1">
                      {opt === 1 &&
                        "Anyone on Sustainable Trades can view your exact address."}
                      {opt === 2 && "Your exact location will remain private."}
                      {opt === 3 &&
                        "Do not display my address your shop pin will appear within your zip code area for privacy.You can still choose to share to exact location when a trade or scale occurs"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-10">
        <button onClick={onPrev} className="auth-primary-btn">
          Back
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            const lat = getValues("latitude");
            const lng = getValues("longitude");
            if (!lat || !lng) {
              alert("Please save your location before continuing.");
              return;
            }
            onNext();
          }}
          className="auth-secondary-btn"
        >
          Save and Continue
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">
          <div className="bg-[#FEFEFE] rounded-lg p-6 max-w-lg w-full pt-[52px] px-8 pb-8 relative">
            {selectedOption === 1 && (
              <>
                <p className="mb-4">
                  If you wish to display the exact address of your business,
                  please enter it here.
                </p>
                <AddressForm type="full" />
              </>
            )}
            {selectedOption === 2 && (
              <>
                <p className="mb-4">
                  If you wish to display your location within a 0.5 miles radius,
                  please enter your address.
                </p>
                <AddressForm type="full" />
              </>
            )}
            {selectedOption === 3 && (
              <>
                <p className="mb-4">
                  You chose not to display your address. Only your city/state
                  will be shown.
                </p>
                <AddressForm type="zip" />
              </>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-0 right-0 px-4 py-2 text-3xl text-gray-500 cursor-pointer"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleSave}
                className="auth-secondary-btn max-w-[150px] w-full cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StepFour;
