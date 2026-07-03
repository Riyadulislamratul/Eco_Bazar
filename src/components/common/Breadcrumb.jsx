import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({
  items = [],
}) => {
  return (
    <div className="flex items-center text-sm">

      {items.map((item, index) => (
        <React.Fragment key={index}>

          <span
            className={
              index === items.length - 1
                ? "text-green-500"
                : ""
            }
          >
            {item}
          </span>

          {index !== items.length - 1 && (
            <ChevronRight
              size={16}
              className="mx-2"
            />
          )}

        </React.Fragment>
      ))}

    </div>
  );
};

export default Breadcrumb;
