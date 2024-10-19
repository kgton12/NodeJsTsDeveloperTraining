import { PlayerModel, PlayerStatistics } from "../models/player-model";
import * as PlayersRepository from "../repositories/players-repository";
import { buildPlayersResponse } from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayersRepository.getAllPlayers();

    const response = await buildPlayersResponse(data);

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayersRepository.getPlayerById(id);

    const response = await buildPlayersResponse(data);

    return response;
};

export const postPlayerService = async (player: PlayerModel) => {
    //TODO: implementar a validação com o zod.
    const data = await PlayersRepository.postPlayer(player);

    const response = await buildPlayersResponse(data, true);

    return response;
};

export const deletePlayerService = async (id: number) => {
    const data = await PlayersRepository.deleteOnPlayer(id);

    const response = await buildPlayersResponse(data);

    return response;
};

export const patchPlayerService = async (id: number, newPlayerStats: PlayerStatistics) => {
    const data = await PlayersRepository.changePlayerStats(id, newPlayerStats);

    const response = await buildPlayersResponse(data);

    return response;
};
