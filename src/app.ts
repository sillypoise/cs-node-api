import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { api } from "~/routes/api";

let app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json("Online");
});

app.use("/v1", api);

export { app };
