import React from "react";

import { useCart } from "../context/CartContext";

import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import Breadcrumb from "../components/common/Breadcrumb";

import BillingForm from "../components/checkout/BillingForm";
import AdditionalInfo from "../components/checkout/AdditionalInfo";
import OrderSummary from "../components/checkout/OrderSummary";

import Banner from "../assets/banner/product-banner.png";

const Checkout = () => {
  const { cart } = useCart();

  return (
    <>
      {/* Page Header */}

      <PageHeader
        title="Checkout"
        backgroundImage={Banner}
      >
        <Breadcrumb
          items={[
            "Shopping Cart",
            "Checkout",
          ]}
        />
      </PageHeader>

      {/* Checkout */}

      <Container className="py-16">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* Left Side */}

          <div className="lg:col-span-8 space-y-10">

            <BillingForm />

            <AdditionalInfo />

          </div>

          {/* Right Side */}

          <div className="lg:col-span-4">

            <OrderSummary cart={cart} />

          </div>

        </div>

      </Container>
    </>
  );
};

export default Checkout;