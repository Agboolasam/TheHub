import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Productpage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Products />} />{" "}
          <Route path="/cart" element={<Cart />} />{" "}
          <Route path="/checkout" element={<Checkout />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
