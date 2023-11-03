import logo from "@/public/images/logo.png";
import Image from "next/image";

const Links = [
  {
    title: "Company",
    links: ["About Us", "Contact Us", "FAQ"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Conditions", "Copyright"],
  },
  {
    title: "More",
    links: ["Get Started", "Terms of use", "Blog"],
  },
];

const Footer = () => {
  return (
    <section className="footer_section">
      <div className="container footer_container">
        <div className="top">
          <div className="logo_tagline">
            <Image alt="" src={logo} />
            <p>
              Your gateway to a world of digital books where each page is a
              portal to a new adventure.
            </p>
          </div>
          {Links.map(({ links, title }, index) => (
            <div className={title} key={index}>
              <h2 className="link_head">{title}</h2>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bottom">
          <p className="desc">
            © Code with ❤️ by <strong> Walexz</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
