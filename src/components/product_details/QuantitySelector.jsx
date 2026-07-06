import React from "react";
import { Minus, Plus } from "lucide-react";

const QuantitySelector = ({
  quantity = 1,
  min = 1,
  max = 99,
  onIncrease,
  onDecrease,
  onChange,
}) => {
  const handleDecrease = () => {
    if (quantity <= min) return;

    if (onDecrease) {
      onDecrease();
    } else if (onChange) {
      onChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity >= max) return;

    if (onIncrease) {
      onIncrease();
    } else if (onChange) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center justify-between rounded-full border border-gray-300 px-2 py-2 w-fit bg-white">

      {/* Minus */}

      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Minus size={18} />
      </button>

      {/* Quantity */}

      <span className="min-w-[40px] text-center text-lg font-semibold">
        {quantity}
      </span>

      {/* Plus */}

      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Plus size={18} />
      </button>

    </div>
  );
};

export default QuantitySelector;