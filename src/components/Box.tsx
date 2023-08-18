import Link from "next/link";
import { BsPersonFill, BsFillPeopleFill } from "react-icons/bs";

const Box = (props: {
  text: string;
  icon: "person" | "team";
  href: string;
}) => {
  const Icon = props.icon === "person" ? BsPersonFill : BsFillPeopleFill;

  return (
    <Link
      href={props.href}
      className="w-1/4 aspect-square border-2 border-light rounded-lg hover:-translate-y-1 duration-150 cursor-pointer flex flex-col justify-center items-center"
    >
      <Icon className="text-5xl my-3" />
      <p className="font-kamerik-bold text-2xl">{props.text}</p>
    </Link>
  );
};

export default Box;
