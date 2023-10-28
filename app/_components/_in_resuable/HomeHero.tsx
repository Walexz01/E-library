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
            Become the <span className="green">software engineer</span> that
            companies <span className="pink">love to hire</span>
          </h2>
          <p>
            All the <strong> coding courses</strong> you need to excel
            <strong> in one place.</strong>
          </p>
        </div>
        <div className="right_hero">
          <img alt="eBookVerse-hero-img" src={"/images/hero.png"} />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
