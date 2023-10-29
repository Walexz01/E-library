import { stats } from "@/data/stat";
import SectionHeader from "../reusable/SectionHeader";

const Intro = () => {
  return (
    <section className="intro_section">
      <div className="container intro_container">
        <SectionHeader
          heading="HELLO,"
          subheading="I'm Mosh Hamedani."
          desc=" Are you feeling stuck or overwhelmed in your coding journey?
          Don't worry, I've got your back! Together, we'll work
          to level up your skills, increase your earning potential, and build a
          brighter future."
          descClass="intro_desc"
        />
        {/* video */}
        <div className="intro_stat">
          {stats.map(({ count, name }, index) => (
            <div className="stat_card" key={index}>
              <p className="count">{count}</p>
              <p className="name">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
