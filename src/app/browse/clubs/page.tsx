import Table from "@/components/Table";
import { clubToTable } from "@/util/handler";
import { prisma } from "@/util/prisma";

const Page = async ({ params }: { params: { slug: string } }) => {
  const fields = ["Name", "Abbreviation", "League"];

  const clubs = await prisma.club.findMany({ take: 100 });
  const data = clubToTable(clubs);

  return (
    <div className="flex justify-center w-5/6 mx-auto">
      <Table fields={fields} data={data} link={false} />
    </div>
  );
};

export default Page;
