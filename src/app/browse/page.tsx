import ArticleLink from "@/components/ArticleLink";
import Box from "@/components/Box";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-screen flex justify-center py-24 gap-12">
      {/* Left side  */}
      <div className="flex flex-col w-1/2 gap-4">
        <div className="flex justify-end gap-4">
          <Box text="Players" icon="person" href="/browse/players" />
          <Box text="Teams" icon="team" href="/browse/teams" />
        </div>
        <div className="flex justify-end gap-4">
          {/* <Box text="Hi" /> */}
          {/* <Box text="Hi" /> */}
        </div>
      </div>
      {/* Right side */}
      <div className="w-1/2 flex flex-col items-start">
        <p className="italic">All Articles</p>
        {/* Add articles here */}
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
        <p className="italic text-light hover:underline cursor-pointer">
          Load more
        </p>
      </div>
    </div>
  );
};

export default Page;
