"use client";
import React, { useState } from "react";

interface PauseMembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (duration: number) => void;
  membershipType: "Basic" | "Pro" | "Shopper";
}

const PauseMembershipModal: React.FC<PauseMembershipModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  membershipType,
}) => {
  const [duration, setDuration] = useState<number>(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Pause Membership?
        </h2>

        {/* Info message */}
        <div className="text-gray-600 text-sm space-y-3 mb-6">
          <p>
            (For <span className="font-semibold">Pro</span> and{" "}
            <span className="font-semibold">Basic</span> Members Only)
          </p>
          <p>
            Pausing your membership will temporarily deactivate your shop.
            During this time:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Your shop will not be visible to the public</li>
            <li>You won’t be able to access or manage your shop</li>
            <li>
              All your listings and profile information will be saved exactly as
              you left them
            </li>
          </ul>
          <p>
            You can choose to pause your membership for{" "}
            <strong>1, 2, or 3 months</strong>. When you're ready to return,
            simply reactivate to restore full access and visibility.
          </p>
        </div>

        {/* Select pause duration */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Pause Duration
          </label>
          <select
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value={1}>1 Month</option>
            <option value={2}>2 Months</option>
            <option value={3}>3 Months</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(duration)}
            className="px-5 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
          >
            Pause Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default PauseMembershipModal;
