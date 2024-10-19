import { PlayerModel, PlayerStatistics } from "../models/player-model";
import readDataFromFile from "../utils/read-data-from-file";

let dataBase: PlayerModel[] = [];

export const getAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase;
};

export const getPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return dataBase.find((player) => player.id === id);
};

export const postPlayer = async (player: PlayerModel): Promise<PlayerModel> => {
    dataBase.push(player);
    return player;
};

export const deleteOnPlayer = async (id: number): Promise<PlayerModel | undefined> => {
    const playerIndex = dataBase.findIndex((player) => player.id === id);

    if (playerIndex === -1) {
        return undefined;
    }

    const player = dataBase[playerIndex];
    dataBase.splice(playerIndex, 1);

    return player;
};

export const changePlayerStats = async (id: number, newPlayerStats: PlayerStatistics): Promise<PlayerModel | undefined> => {
    const playerIndex = dataBase.findIndex((player) => player.id === id);

    if (playerIndex === -1) {
        return undefined;
    }

    dataBase[playerIndex].statistics = newPlayerStats;

    return dataBase[playerIndex];
};

(async () => {
    dataBase = await readDataFromFile("players");
})();
