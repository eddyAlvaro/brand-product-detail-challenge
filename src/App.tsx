import LandingLayout from "./components/layouts/landing-layout/landing-layout";
import ProductDetailPage from "./pages/product-detail/product-detail-page";

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
