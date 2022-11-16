import express from "express";
import {
    httpCreateUpdatePoint,
    httpDeleteUpdatePointById,
    httpGetUpdatePoint,
    httpGetUpdatePointById,
    httpUpdateUpdatePointById,
} from "./updatePoint.controller";

let updatePointRouter = express.Router();

updatePointRouter.get("/updatepoint", httpGetUpdatePoint);
updatePointRouter.get("/updatepoint/:id", httpGetUpdatePointById);
updatePointRouter.post("/updatepoint", httpCreateUpdatePoint);
updatePointRouter.put("/updatepoint/:id", httpUpdateUpdatePointById);
updatePointRouter.delete("/updatepoint/:id", httpDeleteUpdatePointById);

export { updatePointRouter };
