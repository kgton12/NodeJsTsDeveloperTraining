import { IncomingMessage, STATUS_CODES } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastDTO } from "../models/PodcastDTO-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (filter: IncomingMessage): Promise<PodcastDTO> => {
    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: [],
    };

    const queryString = filter.url?.split("?p=")[1] ?? "";
    const data = await repositoryPodcast(queryString);

    responseFormat = {
        statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    };

    return responseFormat;
};
