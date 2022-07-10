import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Navbar } from "./routes/Navbar";
import { SignInPage } from "./routes/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Route>
    </Routes>
  );
}

export default App;
