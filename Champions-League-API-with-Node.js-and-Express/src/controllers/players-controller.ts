import { Request, Response } from "express";
import * as Service from "../services/players-service";
import { PlayerStatistics } from "../models/player-model";

export const getPlayer = async (req: Request, res: Response) => {
    const response = await Service.getPlayerService();

    res.status(response.statusCode).json(response.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const response = await Service.getPlayerByIdService(id);

    res.status(response.statusCode).json(response.body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const body = req.body;
    const response = await Service.postPlayerService(body);

    res.status(response.statusCode).json(response.body);
};

export const deleteByIdPlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const response = await Service.deletePlayerService(id);

    res.status(response.statusCode).json(response.body);
};

export const patchPlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const body: PlayerStatistics = req.body;
    const response = await Service.patchPlayerService(id, body);

    res.status(response.statusCode).json(response.body);
};
