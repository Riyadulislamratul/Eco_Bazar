import React, { useState } from "react";

const AdditionalInfo = () => {
  const [notes, setNotes] = useState("");

  return (
    <div>

      {/* Heading */}

      <h2 className="mb-6 text-3xl font-semibold text-gray-900">
        Additional Information
      </h2>

      {/* Notes */}

      <div>

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Order Notes <span className="text-gray-400">(Optional)</span>
        </label>

        <textarea
          rows={6}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes about your order, e.g. special notes for delivery"
          className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
        />

      </div>

    </div>
  );
};

export default AdditionalInfo;