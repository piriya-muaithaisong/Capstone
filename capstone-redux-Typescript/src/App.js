//import Home from "./routes/home/home.component";
// import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
// import Authentication from "./routes/authentication/authentication.component";
// import Shop from "./routes/shop/shop.component";
// import CheckOut from "./routes/checkout/checkout.component";
import { useDispatch } from "react-redux";

import { useEffect, lazy, Suspense } from "react";
import Spinner from "./components/spinner/spinner.component";

import { checkUserSession } from "./store/user/user.action";
import GlobalStyle from "./global.style";

const Home = lazy(() => import("./routes/home/home.component"));
const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const CheckOut = lazy(() => import("./routes/checkout/checkout.component"));
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
        </Routes>

    </Suspense>
  );
};

export default App;
