import { stats } from "@/data/stat";
import SectionHeader from "../reusable/SectionHeader";

const Intro = () => {
  return (
    <section className="intro_section">
      <div className="container intro_container">
        <SectionHeader
          heading="HELLO,"
          subheading="Welcome to eBookVerse."
          desc="Ready to venture into the future of reading? eBookVerse invites you into a realm of digital books, where each page ignites fresh adventures. Immerse yourself in a world of boundless knowledge and thrilling journeys."
          descClass="intro_desc"
        />
        <div className="video_con">
          <video src="" poster="/images/hero.png" controls></video>
        </div>
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
