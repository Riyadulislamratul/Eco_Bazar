import React from "react";

const Row = ({ label, value }) => (
  <div className="flex border-b py-4">
    <div className="w-44 font-semibold text-gray-700">
      {label}
    </div>

    <div className="text-gray-600">
      {value}
    </div>
  </div>
);

const AdditionalInfoTab = ({ product }) => {
  return (
    <div className="rounded-xl border bg-white p-6">

      <Row
        label="Weight"
        value={product.weight}
      />

      <Row
        label="Color"
        value={product.color}
      />

      <Row
        label="Type"
        value={product.type}
      />

      <Row
        label="Category"
        value={product.category}
      />

      <Row
        label="Stock"
        value={`${product.stock} Items`}
      />

      <Row
        label="Brand"
        value={product.brand}
      />

      <Row
        label="SKU"
        value={product.sku}
      />

    </div>
  );
};

export default AdditionalInfoTab;