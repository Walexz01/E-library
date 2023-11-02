import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="hero_section">
      <div className="container hero_container">
        <Image
          className="bg_grid"
          alt="bg-grid"
          src={"/images/bg-grid-lighter.svg"}
          width={100}
          height={100}
        />
        <div className="left_hero">
          <h2>
            Elevate Your
            <span className="green"> Reading</span> Experience to
            <span className="pink"> Unprecedented Heights</span>
          </h2>
          <p>
            eBookVerse is your gateway to
            <strong> a world of digital books </strong>
            where each page is a portal to a<strong> new adventure.</strong>
          </p>
        </div>
        <div className="right_hero">
          <img alt="eBookVerse-hero-img" src={"/images/19197861.png"} />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
