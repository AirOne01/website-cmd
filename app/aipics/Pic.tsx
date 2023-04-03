import Image from "next/image";

interface Props {
  link: string;
}

const Pic = ({ link }: Props) => (
  <Image
    className="rounded-lg"
    alt="test"
    width={459}
    height={919}
    src={link}
  />
);

export default Pic;
