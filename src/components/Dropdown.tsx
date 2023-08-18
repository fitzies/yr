import Link from "next/link";

const Dropdown = () => {
  const items = ["Players", "Clubs", "Articles"];

  return (
    <div className="w-full absolute z-50 bg-black -left-2 top-full flex flex-col rounded-lg">
      {items.map((item, i) => {
        const link = "/browse/" + item.toLowerCase();
        return (
          <Link
            href={link}
            className="pl-1 my-1 mx-2 text-sm cursor-pointer text-gray-300 hover:bg-light py-2 rounded-xl"
            key={i}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Dropdown;
