import * as fs from "fs";
import * as path from "path";

export default async function readDataFromFile(typeData: string): Promise<any> {
    let dataJson: string = "";

    if (typeData === "clubs") {
        dataJson = "data-clubs.json";
    } else if (typeData === "players") {
        dataJson = "data-players.json";
    }

    const dataFilePath = path.join(__dirname, "../data", dataJson);

    try {
        const data = await fs.promises.readFile(dataFilePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading data from file:", error);
        return {};
    }
}
