"use client";
import React from "react";

interface OrderNoteProps {
  isOpen?: boolean;
  onClose: () => void;
  note?: string;
}

const OrderNote: React.FC<OrderNoteProps> = ({ isOpen, onClose, note }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50">
      <div className="bg-white rounded-lg w-[90%] max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold cursor-pointer"
        >
          ✕
        </button>
        <h5 className="text-[24px] font-semibold text-[#000]">Order Note</h5>
        <textarea
          placeholder="Type note here..."
          className="p-3 rounded-[8px] border border-[#8E2F2F]  text-[16px] font-normal text-[#000] cursor-pointer hover:border-green-500 duration-300 ease-in-out w-full mt-5 h-[280px]"
        />
        <div className="mt-5">
          <button className="auth-secondary-btn w-full" onClick={onClose}>
            Save Note
          </button>
        </div>
      </div>

      <div className="text-gray-700 text-sm">
        {note ? <p>{note}</p> : <p>No order note available.</p>}
      </div>
    </div>
  );
};

export default OrderNote;
