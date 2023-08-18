import { prisma } from "@/util/prisma";
import { NextResponse } from "next/server";

type PlayerHandler = {
  email: string;
  fullName: string;
  birth: any;
  ageGroup: number;
  graduatingClass: number;
  heightInCm: number;
  weightInKg: number;
  primaryPosition: Position;
  secondaryPosition: Position;
  clubId: number;
};

export async function POST(req: Request) {
  const { clubId, ...player }: PlayerHandler = await req.json();

  const newPlayer = await prisma.player.create({
    data: {
      ...player,
      club: { connect: { id: clubId } },
    },
  });

  return NextResponse.json({ newPlayer });
}
