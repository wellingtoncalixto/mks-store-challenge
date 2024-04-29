import CartBuyComponent from "./components/CartBuyComponent/CartBuyComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { CartBuyProvider } from "./contexts/CartyBuyContext";
import { ShowCartBuyProvider } from "./contexts/ShowCartBuyContext";
import Products from "./pages/Products/Products";

function App() {
  return (
    <CartBuyProvider>
      <ShowCartBuyProvider>
        <HeaderComponent />
        <Products />
        <CartBuyComponent />
        <FooterComponent />
      </ShowCartBuyProvider>
    </CartBuyProvider>
  );
}

export default App;
