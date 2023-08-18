import Table from "@/components/Table";
import { playerToUnrankedTable } from "@/util/player-search";
import { prisma } from "@/util/prisma";

const Page = async ({ params }: { params: { slug: string } }) => {
  const fields = ["Player", "Position", "Hometown", "Height", "Weight", "Club"];

  const players = await prisma.player.findMany({ take: 100 });
  const clubs = await prisma.club.findMany({ take: 100 });
  const data = playerToUnrankedTable(players, clubs);

  return (
    <div className="flex justify-center w-5/6 mx-auto">
      <Table data={data} fields={fields} />
    </div>
  );
};

export default Page;
