import Footer from "./_components/_in_resuable/Footer";
import HomeHero from "./_components/_in_resuable/HomeHero";
import Intro from "./_components/_in_resuable/Intro";
import Pricing from "./_components/_in_resuable/Pricing";
import Testimonials from "./_components/_in_resuable/Testimonials";
import TopBooks from "./_components/_in_resuable/TopBooks";
import WhyUs from "./_components/_in_resuable/WhyUs";
import Why_us from "./_components/_in_resuable/Why_us";
import LineGradientCon from "./_components/reusable/LineGradientCon";
import SectionHeader from "./_components/reusable/SectionHeader";

export default function Home() {
  return (
    <div id="home">
      <HomeHero />
      <Intro />
      <LineGradientCon>
        <WhyUs />
        <TopBooks />
        {/* <Testimonials /> */}
        <Pricing />
      </LineGradientCon>
      <Footer />
    </div>
  );
}
