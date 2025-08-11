import React from "react";

type StepFourProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  totalSteps: number;
};

const StepFour = ({ step, setStep, totalSteps }: StepFourProps) => {
  return (
    <section className="">
      <div className="my-16">
        <h2 className="auth_title">Geo-Locator</h2>
        <p className="auth_description">
          Let’s decide how you want to show up on the map. Choose from the 3
          options below
        </p>
      </div>
      {/* Google Map iframe as background */}
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0865705997565!2d-122.42177818468198!3d37.77492977975809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808eebea3e4d%3A0xb8f7a624f9d3eae3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1691745228171!5m2!1sen!2sus"
          className=" top-0 left-0 filter brightness-75 relative w-full h-[1000px] rounded-lg overflow-hidden"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
        <div className="absolute top-[56px]  right-[112px] z-10 px-6 py-12 max-w-[528px] w-full text-white">
          <div className="bg-[#FFFDF8] bg-opacity-40 p-6 rounded-[8px] shadow-accent-white]">
            <div className="flex flex-col gap-y-10">
              <div className="flex gap-x-6 items-start">
                <input type="checkbox" className="border-2 mt-2" />
                <div className="mt-0">
                  <h3 className="text-[#13141D] font-semibold text-[30px] leading-8 mt-0">
                    Display my business’ exact address.
                  </h3>
                  <p className="text-[#13141D] font-normal text-[18px] mt-1">
                    Anyone on Sustainable Trades can view your exact address.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6 items-start">
                <input type="checkbox" className="border-2 mt-2" />
                <div className="mt-0">
                  <h3 className="text-[#13141D] font-semibold text-[30px] leading-8 mt-0">
                    Display my location within a 10- mile radius of my address
                  </h3>
                  <p className="text-[#13141D] font-normal text-[18px] mt-1">
                    Your exact location will remain private.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6 items-start">
                <input type="checkbox" className="border-2 mt-2" />
                <div className="mt-0">
                  <h3 className="text-[#13141D] font-semibold text-[30px] leading-8 mt-0">
                    Do not display my address.
                  </h3>
                  <p className="text-[#13141D] font-normal text-[18px] mt-1">
                    Defaults to City/State. No one will be able to see where you
                    are located. You can still choose to share your location
                    when a trade or sale occurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content overlay */}

      <div className="flex justify-between items-center mt-10">
        <button onClick={() => setStep(step - 1)} className="auth-primary-btn">
          Back
        </button>
        <button
          onClick={() => setStep(step + 1)}
          className="auth-secondary-btn"
        >
          Save and Continue
        </button>
      </div>
    </section>
  );
};

export default StepFour;
