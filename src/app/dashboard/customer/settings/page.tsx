"use client";
import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState(false);
  const [cookies, setCookies] = useState(false);
  return (
    <>
      <h2 className="text-[40px] font-lato font-semibold text-[#000]">
        Account
      </h2>
      <div className="mt-6 flex gap-x-[145px]">
        <div className="w-1/2">
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
          <div className="w-full mt-20 flex flex-col gap-y-10">
            {/* Push Notifications */}
            <div className="flex items-center gap-x-16">
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
            <div className="flex items-center gap-x-[108px]">
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
            <div className="flex items-center gap-x-22">
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
      <div className="flex gap-x-10 mt-10">
        <button className="auth-secondary-btn w-[150px]">Logout</button>
        <button className="auth-secondary-btn">Delete Account</button>
      </div>
    </>
  );
};

export default Settings;
