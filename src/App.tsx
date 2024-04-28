import CartBuyComponent from "./components/CartBuyComponent/CartBuyComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { ShowCartBuyProvider } from "./contexts/ShowCartBuyContext";
import Products from "./pages/Products/Products";

function App() {
  return (
    <ShowCartBuyProvider>
      <HeaderComponent />
      <Products />
      <CartBuyComponent />
      <FooterComponent />
    </ShowCartBuyProvider>
  );
}

export default App;
