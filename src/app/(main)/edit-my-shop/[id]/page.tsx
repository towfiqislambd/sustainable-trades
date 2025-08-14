"use client"
import Container from "@/Components/Common/Container";
import React, { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { PiEyeClosed } from "react-icons/pi";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  return (
    <section className="pt-[34px] pb-[96px]">
      <Container>
        <h2 className="text-[40px] font-bold text-[#000]">
          Comprehensive Edit
        </h2>
        <div className="mt-[45px]">
          <h2 className="mt-5 text-[#274F45] text-[20px] font-semibold">
            Profile Info
          </h2>
          <p className="text-[16px] text-[#4B4A47] font-normal font-lato">
            <span className="text-[#8B200C]">*</span>Indicates a required field
          </p>
          <div className="grid grid-cols-2 gap-x-7 gap-y-10">
            <div>
              <p className="form-label">First Name *</p>
              <input
                type="text"
                className="form-input"
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div>
              <p className="form-label">Last Name *</p>
              <input
                type="text"
                className="form-input"
                placeholder="Last Name"
              />
            </div>

            {/* Email */}
            <div>
              <p className="form-label">Email / Log In *</p>
              <input
                type="email"
                className="form-input"
                placeholder="fxhgdg@gmail.com"
              />
            </div>

            {/* Phone */}
            <div>
              <p className="form-label">Phone Number *</p>
              <input
                type="text"
                className="form-input"
                placeholder="Phone Number"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <p className="form-label">Password *</p>
              <input
                type={showPassword ? "text" : "password"}
                className="form-input pr-10"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[45px] cursor-pointer"
              >
                {showPassword ? (
                  <PiEyeClosed size={20} />
                ) : (
                  <BsEyeFill size={20} />
                )}
              </button>
            </div>

            {/* Re-enter Password */}
            <div className="relative">
              <p className="form-label">Re-enter Password *</p>
              <input
                type={showRePassword ? "text" : "password"}
                className="form-input pr-10"
                placeholder="Re-enter Password"
              />
              <button
                type="button"
                onClick={() => setShowRePassword(!showRePassword)}
                className="absolute right-3 top-[45px] cursor-pointer"
              >
                {showRePassword ? (
                  <PiEyeClosed size={20} />
                ) : (
                  <BsEyeFill size={20} />
                )}
              </button>
            </div>

            {/* Company Name */}
            <div>
              <p className="form-label">Company Name (optional)</p>
              <input type="text" className="form-input" placeholder="Name" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
