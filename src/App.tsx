import ProductDetailPage from "./features/product/pages/product-detail/product-detail-page";
import LandingLayout from "./layouts/landing-layout/landing-layout";

function App() {
  return (
    <>
      <LandingLayout>
        <ProductDetailPage />
      </LandingLayout>
    </>
  );
}

export default App;
