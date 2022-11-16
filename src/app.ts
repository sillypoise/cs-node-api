import express, { Request, Response } from "express";
import { api } from "~/routes/api";

let app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json("Online");
});

app.use("/v1", api);

export { app };
