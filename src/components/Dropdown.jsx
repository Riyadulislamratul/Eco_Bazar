import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Dropdown = ({
  title,
  items = [],
  width = "w-56",
  textColor = "text-gray-700",
  menuPosition = "left-0",
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => window.innerWidth >= 1024 && setOpen(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setOpen(false)}
    >
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={handleToggle}
        className={`flex items-center gap-1 cursor-pointer ${textColor}`}
      >
        {title}

        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute ${menuPosition} top-full z-50 mt-2 ${width}
        rounded-md bg-white py-2 shadow-xl transition-all duration-200
        ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {items.map((item, index) => {
          // Route item
          if (typeof item === "object") {
            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
              >
                {item.name}
              </Link>
            );
          }

          // Normal string item
          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                onSelect?.(item);
                setOpen(false);
              }}
              className="block w-full cursor-pointer px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;