"use client";

import { useState } from "react";

export default function TaxRatePage() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [localTaxRate, setLocalTaxRate] = useState("0");
  const [chargeOnServices, setChargeOnServices] = useState(true);
  const [chargeOnShipping, setChargeOnShipping] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);

  const countries = [
    "United States", // US at top for easy access
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const handleSave = () => {
    console.log("Saving tax rate:", {
      country,
      state,
      localTaxRate,
      chargeOnServices,
      chargeOnShipping,
    });
  };

  return (
    <main className="h-fit mx-auto flex justify-center">
      <div className="w-full w-ful md:max-w-md mx-auto mt-20 bg-[#FFFCF9] shadow-2xl rounded-[20px] p-4 md:p-8">
        {/* Header */}
        <div className="">
          <h2 className="text-[20px] md:text-[24px] font-bold text-[#000000]">
            Add Tax Rate
          </h2>
          <p className="text-[12px] md:text-[14px] text-[#67645F] mt-2 leading-relaxed">
            The sales tax rate manually entered here will only apply at checkout
            when both 'Arrange Local Pickup' and 'Pay with Cash' are selected by
            the buyer.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-3 md:space-y-6 mt-3 md:mt-6">
          {/* Country Field */}
          <div className="space-y-2">
            <label className="text-[16px] md:text-[20px] font-semibold text-[#13141D]">
              Country *
            </label>
            <div className="relative mt-2">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className="w-full px-4 py-1.5 md:py-3  text-left bg-white border-2 border-[#67645F] 
                cursor-pointer rounded-[8px] focus:outline-none focus:border-[#67645F] text-[16px] text-[#67645F]"
              >
                <span className={country ? "text-[#13141D]" : "text-[#9CA3AF]"}>
                  {country || "Country"}
                </span>
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9CA3AF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {countryOpen && (
                <div
                  className="absolute z-50 w-full mt-1 bg-white border-2 border-[#67645F] rounded-[8px] shadow-2xl"
                  style={{ maxHeight: "400px" }}
                >
                  <div
                    className="overflow-y-auto"
                    style={{ maxHeight: "400px" }}
                  >
                    {countries.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          if (option === "United States") {
                            setCountry(option);
                            setCountryOpen(false);
                          }
                        }}
                        className={`w-full px-4 py-1.5 md:py-3 text-left text-[16px] border-b border-gray-100 last:border-b-0 ${
                          option === "United States"
                            ? "text-[#13141D] hover:bg-[#F3F4F6] cursor-pointer font-medium"
                            : "text-[#9CA3AF] cursor-not-allowed bg-gray-50"
                        }`}
                        disabled={option !== "United States"}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* State Field */}
          <div className="space-y-2">
            <label className="text-[16px] md:text-[20px] font-semibold text-[#13141D]">
              State *
            </label>
            <div className="relative mt-2">
              <button
                onClick={() => setStateOpen(!stateOpen)}
                className="w-full px-4 py-1.5 md:py-3 text-left  bg-white border-2 border-[#67645F] cursor-pointer rounded-[8px] focus:outline-none focus:border-[#67645F] text-[16px]"
              >
                <span className={state ? "text-[#13141D]" : "text-[#9CA3AF]"}>
                  {state || "State"}
                </span>
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9CA3AF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {stateOpen && (
                <div
                  className="absolute z-50 w-full mt-1 bg-white border-2 border-[#67645F] rounded-[8px] shadow-2xl"
                  style={{ maxHeight: "400px" }}
                >
                  <div
                    className="overflow-y-auto"
                    style={{ maxHeight: "400px" }}
                  >
                    {usStates.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setState(option);
                          setStateOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left text-[#13141D] hover:bg-[#F3F4F6] border-b border-gray-100 last:border-b-0 text-[16px] font-medium"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[16px] md:text-[20px] font-semibold text-[#13141D]">
              Local Sales Tax Rate
            </label>
            <div className="flex items-center border-b-2 pb-3 border-[#A7A39C]">
              <input
                type="text"
                value={localTaxRate}
                onChange={(e) => setLocalTaxRate(e.target.value)}
                className="flex-1 text-[16px] font-semibold text-[#13141D] bg-transparent border-none outline-none"
                placeholder="0"
              />
              <span className="text-[16px] font-semibold text-[#13141D]">
                %
              </span>
            </div>
          </div>

          {/* Toggle Switches */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b mb-[0px]  md:pb-5 border-[#A7A39C]">
              <div className="flex-1 pr-4">
                <label className="text-[16px] md:text-[20px] font-semibold text-[#000]">
                  Charge taxes on services and <br /> digital products
                </label>
              </div>
              <button
                onClick={() => setChargeOnServices(!chargeOnServices)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                  chargeOnServices ? "bg-[#45A57A]" : "bg-[#D1D5DB]"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    chargeOnServices ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between border-b pt-2 pb-2 md:pb-5 border-[#A7A39C]">
              <div className="flex-1 pr-4">
                <label className="text-[16px] md:text-[20px] font-semibold text-[#000]">
                  Charge taxes on shipping
                </label>
              </div>
              <button
                onClick={() => setChargeOnShipping(!chargeOnShipping)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                  chargeOnShipping ? "bg-[#45A57A]" : "bg-[#D1D5DB]"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    chargeOnShipping ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              onClick={handleSave}
              className="w-full bg-[#274F45] hover:bg-[#047857] cursor-pointer text-[#FEFEFE] 
              font-semibold py-2 md:py-4 rounded-[8px] duration-500 ease-in-out text-[16px] md:text-[20px]"
            >
              Save Tax Rate
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
