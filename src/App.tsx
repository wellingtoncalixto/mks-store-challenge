import CartBuyComponent from "./components/CartBuyComponent/CartBuyComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
      <HeaderComponent />
      <Products />
      {/* <CartBuyComponent /> */}
      <FooterComponent />
    </>
  );
}

export default App;
