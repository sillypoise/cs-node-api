import express from "express";
import {
    httpCreateProduct,
    httpDeleteProductById,
    httpGetProduct,
    httpGetProductById,
    httpUpdateProductById,
} from "./product.controller";

let productRouter = express.Router();

productRouter.get("/product", httpGetProduct);
productRouter.get("/product/:id", httpGetProductById);
productRouter.post("/product", httpCreateProduct);
productRouter.put("/product/:id", httpUpdateProductById);
productRouter.delete("/product/:id", httpDeleteProductById);

export { productRouter };
