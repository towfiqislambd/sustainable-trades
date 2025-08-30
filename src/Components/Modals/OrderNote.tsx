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
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
        >
          ✕
        </button>

        <h3 className="text-lg font-semibold mb-4">Order Note</h3>

        <div className="text-gray-700 text-sm">
          {note ? <p>{note}</p> : <p>No order note available.</p>}
        </div>
      </div>
    </div>
  );
};

export default OrderNote;
