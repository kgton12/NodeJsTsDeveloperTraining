import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastDTO } from "../models/PodcastDTO-model";

const DEFAULT_CONTENT_TYPE = { "Content-Type": ContentType.JSON };

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFAULT_CONTENT_TYPE);
    res.write(JSON.stringify(content.body));
    res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodcastDTO = await serviceFilterEpisodes(req);

    res.writeHead(content.statusCode, DEFAULT_CONTENT_TYPE);
    res.write(JSON.stringify(content.body));
    res.end();
};
