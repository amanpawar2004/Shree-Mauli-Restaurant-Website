import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import FeaturedDishes from "../components/FeaturedDishes";
import SpecialSection from "../components/SpecialSection";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Stats />
      <FeaturedDishes />
      <SpecialSection />
      <Reviews />
    </>
  );
}

export default Home;