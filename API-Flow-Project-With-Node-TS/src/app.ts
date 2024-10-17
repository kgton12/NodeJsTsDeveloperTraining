import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethodes } from "./utils/http-methodes";
import * as http from "http";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const baseURL = req.url?.split("?")[0] ?? "";

    if (req.method === HttpMethodes.GET && baseURL === Routes.LIST) {
        await getListEpisodes(req, res);
    } else if (req.method === HttpMethodes.GET && baseURL === Routes.EPISODE) {
        await getFilterEpisodes(req, res);
    }
};
