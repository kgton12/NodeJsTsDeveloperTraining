import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (filter?: string): Promise<PodcastModel[]> => {
    const language = "utf-8";
    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if (filter) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === filter);
    }

    return jsonFile;
};
