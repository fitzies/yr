import { prisma } from "@/util/prisma";

const NotFoundMessage = () => (
  <div className="w-screen h-[20vh] flex justify-center items-center text-2xl">
    Player not found
  </div>
);

const Page = async ({ params }: { params: { slug: string } }) => {
  if (isNaN(parseInt(params.slug))) {
    return <NotFoundMessage />;
  }

  const player = await prisma.player.findUnique({
    where: { id: parseInt(params.slug) },
  });

  if (!player) {
    return <NotFoundMessage />;
  }

  return <>{player?.fullName}</>;
};

export default Page;
