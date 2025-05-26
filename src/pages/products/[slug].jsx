import ProductDetails from "../../components/ProductDetails";

export default function detailsPage() {
  return (
      <div className="rac_main_wrapper">
        {/* <PageBanner
          pageTitle={`Details`}
          parents={{
            title: "Home",
            link: "/",
          }}
        /> */}
        <ProductDetails />
      </div>
  );
}
