import express from "express";
import { httpGetHealth } from "~/routes/health/health.controller";

let healthRouter = express.Router();

healthRouter.get("/", httpGetHealth);

export { healthRouter };
