"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import AddressForm from "@/Components/Modals/LocatorModal";
import toast from "react-hot-toast";

type StepFourProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
};

const StepFour = ({ onNext, onPrev }: StepFourProps) => {
  const { setValue, trigger, getValues } = useFormContext();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

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
        toast.error(
          "Address not found. Please enter a valid address or zip code."
        );
        return null;
      }
    } catch (error) {
      toast.error("Failed to fetch location. Please try again.");
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

    const fieldsToValidate =
      selectedOption === 1 || selectedOption === 2
        ? ["address1", "city", "state", "zipcode"]
        : ["zipcode"];

    const isValid = await trigger(fieldsToValidate);
    if (!isValid) {
      toast.error("Please fill all required address fields.");
      return;
    }

    let address = "";
    if (selectedOption === 1 || selectedOption === 2) {
      const { address1, address2, city, state, zipcode, country } = getValues();
      address = `${address1} ${address2 ?? ""}, ${city}, ${state} ${zipcode}, ${
        country ?? "USA"
      }`;
    } else if (selectedOption === 3) {
      const { zipcode, city, state, country } = getValues();
      address = `${zipcode}${city ? ", " + city : ""}${
        state ? ", " + state : ""
      }, ${country ?? "USA"}`;
    }

    const location = await fetchLatLngFromAddress(address);
    if (!location) return;

    setSelectedLocation(location);
    setValue("latitude", location.lat);
    setValue("longitude", location.lng);
    setIsModalOpen(false);
  };

  return (
    <section className="lg:px-12">
      <div className="lg:my-16 my-8 text-center lg:text-left">
        <h2 className="auth_title text-2xl sm:text-3xl lg:text-4xl">
          Geo-Locator
        </h2>
        <p className="auth_description mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg">
          Let’s decide how you want to show up on the map. Choose from the 3
          options below
        </p>
      </div>

      {/* Map */}
      <div className="relative w-full">
        <iframe
          src={
            selectedLocation
              ? `https://www.google.com/maps/embed/v1/place?key=AIzaSyBd0inSWCrbc_VfrUSb_kDr0VmbF2-dYdc&q=${selectedLocation.lat},${selectedLocation.lng}`
              : "https://www.google.com/maps/embed?pb=!1m18..."
          }
          className="w-full rounded-lg overflow-hidden filter brightness-75 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        />

        {/* Options Panel */}
        <div className="absolute top-[450px] sm:top-8 md:top-12 right-2 sm:right-4 md:right-12 z-10 py-6 max-w-full sm:max-w-[500px] md:max-w-[528px] overflow-y-auto">
          <div className="bg-[#FFFDF8]  p-4 sm:p-6 rounded-lg flex flex-col gap-y-6 sm:gap-y-8">
            {[1, 2, 3].map(opt => (
              <div key={opt} className="flex gap-x-4 sm:gap-x-6 items-start">
                <input
                  type="checkbox"
                  checked={selectedOption === opt}
                  onChange={() => handleCheckboxClick(opt)}
                  className="mt-2 size-5 shrink-0"
                />
                <div>
                  <h3 className="text-[#13141D] font-semibold text-[20px] sm:text-[20px] lg:text-[25px] leading-6 sm:leading-7 lg:leading-8">
                    {opt === 1 && "Display my business’ exact address."}
                    {opt === 2 &&
                      "Display my location within a 0.5-mile radius of my address."}
                    {opt === 3 && "Do not display my address."}
                  </h3>
                  <p className="text-[#13141D] text-[14px] sm:text-[14px] lg:text-[18px] mt-1">
                    {opt === 1 &&
                      "Anyone on Sustainable Trades can view your exact address."}
                    {opt === 2 && "Your exact location will remain private."}
                    {opt === 3 &&
                      "Only your city/state will be shown. You can share exact location when a trade or sale occurs."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center lg:mt-6 gap-4 sm:gap-0 mt-[500px] sm:mt-[550px]">
        <button onClick={onPrev} className="auth-primary-btn w-full sm:w-auto">
          Back
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            const lat = getValues("latitude");
            const lng = getValues("longitude");
            if (!lat || !lng) {
              toast("Please save your location before continuing.");
              return;
            }
            onNext();
          }}
          className="auth-secondary-btn w-full sm:w-auto"
        >
          Save and Continue
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-[#f7f7f7] rounded-lg p-6 max-w-lg w-full pt-[52px] px-6 sm:px-8 pb-8 relative">
            {selectedOption && (
              <>
                <p className="mb-4 text-sm sm:text-base">
                  {selectedOption === 1 &&
                    "If you wish to display the exact address of your business, please enter it here."}
                  {selectedOption === 2 &&
                    "If you wish to display your location within a 0.5 miles radius, please enter your address."}
                  {selectedOption === 3 &&
                    "You chose not to display your address. Only your city/state will be shown."}
                </p>
                <AddressForm type={selectedOption === 3 ? "zip" : "full"} />
              </>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-3xl text-gray-500 cursor-pointer"
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
