import { Request, Response } from "express";
import * as Service from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
    const response = await Service.getClubsService();

    res.status(response.statusCode).json(response.body);
};
