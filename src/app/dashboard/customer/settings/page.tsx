import React from "react";

const page = () => {
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
        <div className=""></div>
      </div>
      <div className="flex gap-x-10 mt-10">
        <button className="auth-secondary-btn w-[150px]">Logout</button>
        <button className="auth-secondary-btn">Delete Account</button>
      </div>
    </>
  );
};

export default page;
