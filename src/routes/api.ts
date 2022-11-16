import express from "express";
import { healthRouter } from "./health/health.router";

let api = express.Router();

api.use("/health", healthRouter);

export { api };
