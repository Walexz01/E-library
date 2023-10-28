interface Props {
  heading: string;
  subheading: string;
}
const SectionHeader = ({ heading, subheading }: Props) => {
  return (
    <div className="section_header">
      <span>{heading}</span>
      <h3>{subheading}</h3>
    </div>
  );
};

export default SectionHeader;
