import React, { useState } from "react";

const BillingForm = () => {
  const [billingData, setBillingData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
    shipDifferent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setBillingData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>

      {/* Heading */}

      <h2 className="mb-6 text-3xl font-semibold text-gray-900">
        Billing Information
      </h2>

      <form className="space-y-6">

        {/* First Name & Last Name */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={billingData.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={billingData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

        </div>

        {/* Company */}

        <div>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Company Name
            <span className="ml-1 text-gray-400">
              (Optional)
            </span>
          </label>

          <input
            type="text"
            name="company"
            value={billingData.company}
            onChange={handleChange}
            placeholder="Company name"
            className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
          />

        </div>

        {/* Address */}

        <div>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Street Address
          </label>

          <input
            type="text"
            name="address"
            value={billingData.address}
            onChange={handleChange}
            placeholder="Street address"
            className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
          />

        </div>

        {/* Country - State - Zip */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Country / Region
            </label>

            <select
              name="country"
              value={billingData.country}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            >
              <option value="">
                Select Country
              </option>

              <option value="Bangladesh">
                Bangladesh
              </option>

              <option value="India">
                India
              </option>

              <option value="Pakistan">
                Pakistan
              </option>

            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              State
            </label>

            <input
              type="text"
              name="state"
              value={billingData.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Zip Code
            </label>

            <input
              type="text"
              name="zipCode"
              value={billingData.zipCode}
              onChange={handleChange}
              placeholder="Zip Code"
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

        </div>

        {/* Email & Phone */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={billingData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              value={billingData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

        </div>

        {/* Checkbox */}

        <div className="border-t pt-5">

          <label className="flex cursor-pointer items-center gap-3">

            <input
              type="checkbox"
              name="shipDifferent"
              checked={billingData.shipDifferent}
              onChange={handleChange}
              className="h-4 w-4 accent-green-600"
            />

            <span className="text-gray-700">
              Ship to a different address
            </span>

          </label>

        </div>

      </form>

    </div>
  );
};

export default BillingForm;