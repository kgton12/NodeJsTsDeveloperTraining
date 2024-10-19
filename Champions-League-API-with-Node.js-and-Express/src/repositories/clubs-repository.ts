import { ClubModel } from "../models/club-model";
import readDataFromFile from "../utils/read-data-from-file";

let dataBase: ClubModel[] = [];

export const getAllClubs = async (): Promise<ClubModel[]> => {
    return dataBase;
};

(async () => {
    dataBase = await readDataFromFile("clubs");
})();
