import React from "react";

import Hero from "../../components/hero-section/hero-section.component";
import Description from "../../components/description/description.component";
import HeroShop from "../../components/hero-shop/hero-shop.component";
import BackToTopButton from "../../components/back-to-top-button/backToTopButton.components";
import { MigtyMarqueeUp } from "../../components/marquee/mighty-marquee-up.component";

const Home = () => {
  return (
    <div>
      <Hero />
      <MigtyMarqueeUp />
      <Description />
      <HeroShop />
      <BackToTopButton />
    </div>
  );
};

export default Home;
