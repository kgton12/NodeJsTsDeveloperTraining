import express, { json } from "express";
import routes from "./routes/routes";
import cors from "cors";

function createApp() {
    const app = express();

    app.use(json());

    app.use("/api", routes);

    app.use(cors());

    return app;
}

export default createApp;
