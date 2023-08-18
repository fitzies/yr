import Image from "next/image";
import basketball from "../assets/images/basketball.jpg";
import ArticleLink from "@/components/ArticleLink";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex w-screen justify-center items-center my-12">
      <div className="w-1/4 gap-2">
        <h1 className="font-kamerik-bold text-2xl">
          The all-encompassing youth basketball hub, complete with rankings and
          news, inviting all of Singapore to revel in
        </h1>
        <p className="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ea?
        </p>
      </div>
      <div className="w-[28.5%] mx-4">
        <Image src={basketball} className="rounded-md" alt="" loading="lazy" />
      </div>
      <div className="w-1/4 flex flex-col px-4">
        <p className="italic ">Recent Articles</p>
        <ArticleLink
          title="Let the season begin"
          text="Lorem ipsum dolor sit amet consectetur."
        />
        <ArticleLink
          title="Who will be the MVP of this year?"
          text="Lorem ipsum dolor sit amet consectetur."
        />
        <ArticleLink
          title="Who has the best team this year round?"
          text="Lorem ipsum dolor sit amet consectetur."
        />
      </div>
    </div>
  );
};

export default Page;
