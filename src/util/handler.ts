import { Club, Player } from "@prisma/client";

const abbreviatePosition = (position: Position) => {
  const positionAbbreviations = {
    POINTGUARD: "PG",
    SHOOTINGGUARD: "SG",
    SMALLFORWARD: "SF",
    POWERFORWARD: "PF",
    CENTER: "C",
  };
  return positionAbbreviations[position];
};

const playerToUnrankedTable = (players: Player[], clubs: Club[]) => {
  const transformedPlayers: string[][] = players.map((player) => {
    const matchingClub = clubs.find((club) => club.id === player.clubId);
    const clubName = matchingClub ? matchingClub.name : "Unknown Club";

    return [
      player.fullName,
      abbreviatePosition(player.primaryPosition),
      player.homeTown,
      `${player.heightInCm} cm`,
      `${player.weightInKg} kg`,
      clubName,
    ];
  });
  return transformedPlayers;
};

const clubToTable = (clubs: Club[]) => {
  const transformedPlayers: string[][] = clubs.map((club) => {
    return [club.name, club.abbreviation, club.currentLeague];
  });
  return transformedPlayers;
};

export { playerToUnrankedTable, clubToTable };
