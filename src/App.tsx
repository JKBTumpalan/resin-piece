import { Routes, Route } from "react-router-dom";
import Checkout from "./routes/Checkout";
import { Home } from "./routes/Home";
import { Navbar } from "./routes/Navbar";
import { Shop } from "./routes/Shop";
import { SignInPage } from "./routes/SignInPage";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user-action";

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
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
