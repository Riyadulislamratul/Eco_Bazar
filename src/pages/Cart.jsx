import React from "react";

import { useCart } from "../context/CartContext";

import Container from "../components/Common/Container";
import PageHeader from "../components/Common/PageHeader";
import Breadcrumb from "../components/Common/Breadcrumb";

import CartTable from "../components/cart/CartTable";
import CartSummary from "../components/cart/CartSummary";
import CouponForm from "../components/cart/CouponForm";
import EmptyCart from "../components/cart/EmptyCart";

import Banner from "../assets/banner/product-banner.png";

const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      {/* Page Header */}

      <PageHeader
        title="My Shopping Cart"
        backgroundImage={Banner}
      >
        <Breadcrumb
          items={[
            "Home",
            "Shopping Cart",
          ]}
        />
      </PageHeader>

      {/* Cart Content */}

      <Container className="py-16">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

              {/* Left */}

              <div className="lg:col-span-8">

                <CartTable />

                <CouponForm />

              </div>

              {/* Right */}

              <div className="lg:col-span-4">

                <CartSummary />

              </div>

            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;