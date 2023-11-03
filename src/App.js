import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/shop/Shop";
import Cart from "./Pages/cart/Cart";
import Car from "./Pages/car/Car";
import ShopContextProvider from "./Context/shopContext";
import ShopcarContextProvider from "./Context/carshopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <ShopcarContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/car" element={<Car />} />
            </Routes>
          </Router>
        </ShopcarContextProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
