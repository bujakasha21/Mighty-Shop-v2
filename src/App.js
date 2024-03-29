import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import DetailsProduct from "./routes/details/details.component";
import Sidebar from "./components/navigation/sidebar.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Checkout from "./routes/checkout/checkout.component";
import { MigtyMarquee } from "./components/marquee/mighty-marquee.components";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<DetailsProduct />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Sidebar />
        <MigtyMarquee />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
