import * as ClubsRepository from "../repositories/clubs-repository";
import { buildPlayersResponse } from "../utils/http-helper";

export const getClubsService = async () => {
    const data = await ClubsRepository.getAllClubs();

    const response = await buildPlayersResponse(data);

    return response;
};
