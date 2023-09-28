import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import DetailsProduct from "./routes/details/details.component";

import Sidebar from "./components/navigation/sidebar.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<DetailsProduct />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
