import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dropdown({
  title,
  items = [],
  width = "w-56",
  textColor = "text-gray-700",
  menuPosition = "left-0",
  onSelect,
}) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) {
          setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) {
          setOpen(false);
        }
      }}
    >
      {/* Button */}

      <button
        type="button"
        onClick={handleToggle}
        className={`flex items-center gap-1 transition ${textColor}`}
      >
        <span>{title}</span>

        <ChevronDown
          size={15}
          className={`transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      <div
        className={`
          absolute
          ${menuPosition}
          top-full
          z-50
          mt-3
          ${width}
          origin-top
          rounded-lg
          bg-white
          py-2
          shadow-2xl
          ring-1
          ring-gray-100
          transition-all
          duration-300
          ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-3 scale-95 opacity-0"
          }
        `}
      >
        {items.map((item, index) => {
          // React Router Link

          if (typeof item === "object") {
            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-green-50 hover:pl-7 hover:text-green-600"
              >
                {item.name}
              </Link>
            );
          }

          // Language/Currency

          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                onSelect?.(item);
                setOpen(false);
              }}
              className="block w-full px-5 py-3 text-left text-sm text-gray-700 transition-all duration-200 hover:bg-green-50 hover:pl-7 hover:text-green-600"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}