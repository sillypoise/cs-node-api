import express from "express";
import {
    httpCreateUpdate,
    httpDeleteUpdateById,
    httpGetUpdate,
    httpGetUpdateById,
    httpUpdateUpdateById,
} from "./update.controller";

let updateRouter = express.Router();

updateRouter.get("/update", httpGetUpdate);
updateRouter.get("/update/:id", httpGetUpdateById);
updateRouter.post("/update", httpCreateUpdate);
updateRouter.put("/update/:id", httpUpdateUpdateById);
updateRouter.delete("/update/:id", httpDeleteUpdateById);

export { updateRouter };
