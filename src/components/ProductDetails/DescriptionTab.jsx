import React from "react";
import { CheckCircle2 } from "lucide-react";

const DescriptionTab = ({ description, features = [] }) => {
  return (
    <div className="space-y-6">
      <p className="leading-8 text-gray-600">
        {description}
      </p>

      {features.length > 0 && (
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={18}
                className="mt-1 text-green-600"
              />

              <span className="text-gray-700">
                {feature}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DescriptionTab;