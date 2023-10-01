import React from "react";

import Hero from "../../components/hero-section/hero-section.component";
import Description from "../../components/description/description.component";
import HeroShop from "../../components/hero-shop/hero-shop.component";

const Home = () => {
  return (
    <div>
      <Hero />
      <Description />
      <HeroShop />
    </div>
  );
};

export default Home;
