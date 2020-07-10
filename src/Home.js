import withRoot from "./modules/withRoot";
import React from "react";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import ProductCategories from "./modules/views/ProductCategories";
import ProductCTA from "./modules/views/ProductCTA";
import HeroSection from "./modules/views/HeroSection";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import ProductValues from "./modules/views/ProductValues";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <HeroSection />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
