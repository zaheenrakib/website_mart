import Layout from "../components/layout/Layout";
import PageBanner from "../components/PageBanner";
import ProductDetails from "../components/ProductDetails";

export default function detailsPage() {
  return (
    <Layout>
      <div className="rac_main_wrapper">
        <PageBanner
          pageTitle={`Details`}
          parents={{
            title: "Home",
            link: "/",
          }}
        />

        <ProductDetails />
      </div>
    </Layout>
  );
}
