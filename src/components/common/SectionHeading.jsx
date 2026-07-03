import React from "react";

const SectionHeading = ({
  title,
  subtitle,
  action,
}) => {
  return (
    <div className="flex items-end justify-between mb-10">

      <div>

        {subtitle && (
          <p className="text-green-600 font-medium">
            {subtitle}
          </p>
        )}

        <h2 className="text-4xl font-bold mt-2">
          {title}
        </h2>

      </div>

      {action}

    </div>
  );
};

export default SectionHeading;