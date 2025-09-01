"use client";
import React from "react";

interface OrderNoteProps {
  isOpen?: boolean;
  onClose: () => void;
  note?: string;
}

const EditOrderModal: React.FC<OrderNoteProps> = ({
  isOpen,
  onClose,
  note,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50">
      <div className="bg-white rounded-lg w-[90%] max-w-md p-6 relative">
        {/* Close Button */}
        <div className="flex justify-between py-3 border-b border-gray-300">
          <h3 className="text-[24px] font-normal text-[#000]">
            Shipping Details
          </h3>
          <button
            onClick={onClose}
            className=" text-gray-500 hover:text-gray-800 font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form className="space-y-5 mt-5">
          {/* Full Name */}
          <div>
            <p className="form-label font-bold">
              Full Name <span className="text-[#8B200C]">*</span>
            </p>
            <input type="text" className="form-input" placeholder="Amy Woods" />
          </div>
        </form>
        <div className="mt-5">
          <button className="auth-secondary-btn w-full" onClick={onClose}>
            Save and Continue
          </button>
        </div>
      </div>

      <div className="text-gray-700 text-sm">
        {note ? <p>{note}</p> : <p>No order note available.</p>}
      </div>
    </div>
  );
};

export default EditOrderModal;
