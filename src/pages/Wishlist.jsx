import React from "react";

import { useWishlist } from "../context/WishlistContext";

import PageHeader from "../components/common/PageHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";

import WishlistTable from "../components/wishlist/WishlistTable";
import EmptyWishlist from "../components/wishlist/EmptyWishlist";

import Banner from "../assets/banner/product-banner.png";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <>
      <PageHeader
        title="My Wishlist"
        backgroundImage={Banner}
      >
        <Breadcrumb
          items={[
            "Home",
            "Wishlist",
          ]}
        />
      </PageHeader>

      <Container className="py-16">
        {wishlist.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <WishlistTable products={wishlist} />
        )}
      </Container>
    </>
  );
};

export default Wishlist;