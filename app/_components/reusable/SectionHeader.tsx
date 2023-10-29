interface Props {
  heading: string;
  subheading: string;
  descClass?: string;
  desc?: string;
}
const SectionHeader = ({ heading, subheading, descClass, desc }: Props) => {
  return (
    <>
      <div className="section_header">
        <span>{heading}</span>
        <h3>{subheading}</h3>
      </div>
      <p className={`desc ${descClass}`}>{desc}</p>
    </>
  );
};

export default SectionHeader;
