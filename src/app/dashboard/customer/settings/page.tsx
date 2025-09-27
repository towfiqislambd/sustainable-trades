"use client";
import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState(false);
  const [cookies, setCookies] = useState(false);
  return (
    <>
      <h2 className="text-[30px] md:text-[40px] font-lato font-semibold text-[#000]">
        Settings
      </h2>
      <div className="lg:mt-6 flex flex-col-reverse  lg:flex-row gap-x-[72.5px] xl:gap-x-[145px]">
        <div className="mt-5 lg:mt-0 lg:w-1/2">
          <form action="" className="flex flex-col gap-3 ">
            <div className="w-full">
              <p className="form-label font-bold">Name</p>
              <input
                type="text"
                className="form-input w-full"
                placeholder="Name"
              />
            </div>
            <div className="w-full">
              <p className="form-label font-bold">Username</p>
              <input
                type="text"
                className="form-input w-full"
                placeholder="Name1234"
              />
            </div>
            <div className="w-full">
              <p className="form-label font-bold">Email</p>
              <input
                type="text"
                className="form-input w-full"
                placeholder="name@email.com"
              />
            </div>
            <div className="w-full">
              <p className="form-label font-bold">Street Name</p>
              <input
                type="text"
                className="form-input w-full"
                placeholder="name@email.com"
              />
            </div>
            <div className="w-full">
              <p className="form-label font-bold">Apt/Unit #</p>
              <input
                type="text"
                className="form-input w-full"
                placeholder="1234"
              />
            </div>
            <div className="w-full">
              <p className="form-label font-bold">City/State</p>
              <input
                type="text"
                className="form-input w-full"
                placeholder="City/State"
              />
            </div>
            <div className="w-full">
              <p className="form-label font-bold">Zip Code</p>
              <input
                type="text"
                className="form-input w-full"
                placeholder="123456"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-end shrink-0">
          <div className="w-full mt-5  lg:mt-20 flex flex-col gap-y-5 lg:gap-y-10">
            {/* Push Notifications */}
            <div className="flex items-center gap-x-8 md:gap-x-16">
              <h3 className="text-[16px] font-semibold">Push Notifications</h3>
              <div className="flex items-center gap-x-5">
                <span className="text-[16px] font-bold">OFF</span>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition cursor-pointer ${
                    notifications ? "bg-[#D4E2CB]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      notifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-[16px] font-bold">ON</span>
              </div>
            </div>
            <div className="flex items-center gap-x-[55px] md:gap-x-[108px]">
              <h3 className="text-[16px] font-semibold">Language</h3>
              <div className="flex items-center gap-x-5">
                <span className="text-[16px] font-bold">English</span>
                <button
                  onClick={() => setLanguage(!language)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition cursor-pointer ${
                    language ? "bg-[#D4E2CB]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      language ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-[16px] font-bold">Spanish</span>
              </div>
            </div>
            <div className="flex items-center gap-x-10 md:gap-x-22">
              <h3 className="text-[16px] font-semibold">Enable Cookies</h3>
              <div className="flex items-center gap-x-5">
                <span className="text-[16px] font-bold">OFF</span>
                <button
                  onClick={() => setCookies(!cookies)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition cursor-pointer ${
                    cookies ? "bg-[#D4E2CB]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      cookies ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-[16px] font-bold">ON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-x-10 mt-10">
        <button className="auth-secondary-btn sm:w-[150px]">Logout</button>
        <button className="auth-secondary-btn">Delete Account</button>
      </div>
    </>
  );
};

export default Settings;
