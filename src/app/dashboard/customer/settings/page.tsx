"use client"
import React, { useState } from "react";

const page = () => {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [cookies, setCookies] = useState(false);
  return (
    <>
      <h2 className="text-[40px] font-lato font-semibold text-[#000]">
        Account
      </h2>
      <div className="mt-6 flex gap-x-[145px]">
        <div className="w-full">
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
        <div className="flex justify-center shrink-0">
          <div className="w-full mt-20 flex flex-col gap-y-6">
            {/* Push Notifications */}
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-semibold">Push Notifications</h3>
              <div className="flex items-center gap-x-2">
                <span className="text-sm">OFF</span>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    notifications ? "bg-green-300" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      notifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-sm">ON</span>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-semibold">Language</h3>
              <div className="flex items-center gap-x-2">
                <span className="text-sm">English</span>
                <button
                  onClick={() =>
                    setLanguage(language === "English" ? "Spanish" : "English")
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    language === "Spanish" ? "bg-green-300" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      language === "Spanish" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-sm">Spanish</span>
              </div>
            </div>

            {/* Enable Cookies */}
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-semibold">Enable Cookies</h3>
              <div className="flex items-center gap-x-2">
                <span className="text-sm">OFF</span>
                <button
                  onClick={() => setCookies(!cookies)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    cookies ? "bg-green-300" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      cookies ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-sm">ON</span>
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

export default page;
