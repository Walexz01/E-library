import Footer from "./_components/_in_resuable/Footer";
import HomeHero from "./_components/_in_resuable/HomeHero";
import Intro from "./_components/_in_resuable/Intro";
import Pricing from "./_components/_in_resuable/Pricing";
import TopBooks from "./_components/_in_resuable/TopBooks";
import WhyUs from "./_components/_in_resuable/WhyUs";
import LineGradientCon from "./_components/reusable/LineGradientCon";

export default function Home() {
  return (
    <div id="home" className="landing_page">
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
