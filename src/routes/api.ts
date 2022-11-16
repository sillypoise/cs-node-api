import express from "express";
import { healthRouter } from "./health/health.router";
import { productRouter } from "./product/product.router";
import { updateRouter } from "./update/update.router";
import { updatePointRouter } from "./updatePoint/updatePoint.router";

let api = express.Router();

api.use("/", productRouter);
api.use("/", updateRouter);
api.use("/", updatePointRouter);

api.use("/health", healthRouter);

export { api };
