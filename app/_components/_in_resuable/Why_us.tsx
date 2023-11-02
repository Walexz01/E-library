import Image from "next/image";

interface Props {
  title: string;
  slang: string;
  desc: string;
  img: string;
  icon: string;
}
const Why_us = ({ desc, slang, title, icon, img }: Props) => {
  return (
    <div className="why_us">
      <div className="why_left">
        {/* svg or icon */}
        <Image
          className="why_icon"
          alt="icon"
          src={icon}
          width={512}
          height={512}
        />
        <span>{title}</span>
        <h3>{slang}</h3>
        <p className="desc">{desc}</p>
      </div>
      <div className="why_right">
        <img className="why_image" alt="icon" src={img} />
      </div>
    </div>
  );
};

export default Why_us;
