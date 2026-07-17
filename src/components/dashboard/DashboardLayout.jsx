import Container from "../common/Container";
import PageHeader from "../common/PageHeader";
import Breadcrumb from "../common/Breadcrumb";

import ShopBanner from "../../assets/banner/shop-banner.png";

import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({
  children,
}) => {
  return (
    <>
      <PageHeader
        title="Dashboard"
        backgroundImage={ShopBanner}
      >
        <Breadcrumb
          items={[
            "Home",
            "Account",
            "Dashboard",
          ]}
        />
      </PageHeader>

      <Container className="py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}

          <div className="lg:col-span-3">
            <DashboardSidebar />
          </div>

          {/* Content */}

          <div className="lg:col-span-9">
            {children}
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardLayout;