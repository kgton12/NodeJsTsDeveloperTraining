import { Router } from "express";
import * as PlayerController from "../controllers/players-controller";
import * as ClubController from "../controllers/clubs-controller";

const routes = Router();

routes.get("/players", PlayerController.getPlayer);
routes.get("/players/:id", PlayerController.getPlayerById);
routes.post("/players/", PlayerController.postPlayer);
routes.delete("/players/:id", PlayerController.deleteByIdPlayer);
routes.patch("/players/:id", PlayerController.patchPlayer);

routes.get("/clubs", ClubController.getClubs);

export default routes;
