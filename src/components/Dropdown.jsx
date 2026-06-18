import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({
  title,
  items,
  width = "w-56",
  textColor = "text-gray-700",
  menuPosition = "left-0",
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 cursor-pointer ${textColor}`}
      >
        {title}

        <ChevronDown
          size={14}
          className={`transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute ${menuPosition} top-full z-50 mt-2 ${width}
          rounded-md bg-white py-2 shadow-xl
          transition-all duration-200
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
      >
        {items.map((item) => (
          <button
            key={item}
            onClick={() => {
              onSelect?.(item);
              setOpen(false);
            }}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;