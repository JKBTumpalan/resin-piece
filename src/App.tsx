import { Routes, Route } from "react-router-dom";
import Checkout from "./routes/Checkout";
import { Home } from "./routes/Home";
import { Navbar } from "./routes/Navbar";
import { Shop } from "./routes/Shop";
import { SignInPage } from "./routes/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
