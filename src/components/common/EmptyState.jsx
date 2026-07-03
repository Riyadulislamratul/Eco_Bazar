import React from "react";

const EmptyState = ({
  title,
  description,
}) => {
  return (
    <div className="py-20 text-center">

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-500">
        {description}
      </p>

    </div>
  );
};

export default EmptyState;