import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
});

const teams = [
    {
        id: 1,
        name: "Mercedes",
        country: "Germany",
    },
    {
        id: 2,
        name: "Red Bull Racing",
        country: "Austria",
    },
    {
        id: 3,
        name: "McLaren",
        country: "United Kingdom",
    },
];
const drivers = [
    {
        id: 1,
        name: "Lewis Hamilton",
        team_id: 1,
        country: "United Kingdom",
    },
    {
        id: 2,
        name: "Valtteri Bottas",
        team_id: 1,
        country: "Finland",
    },
    {
        id: 3,
        name: "Max Verstappen",
        team_id: 2,
        country: "Netherlands",
    },
];

server.get("/teams", async (req, res) => {
    res.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async (req, res) => {
    res.type("application/json").code(200);
    return { drivers };
});

interface DriverParams {
    id: string;
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
    res.type("application/json").code(200);
    const id = parseInt(req.params.id);
    const result = drivers.find((driver) => driver.id === id);

    if (!result) {
        res.code(404);
        return { message: "Not found" };
    }

    return { result };
});

server.listen({ port: 3333 }, (err, address) => {
    console.log(`Server listening at ${address}`);
    console.log(err);
});
