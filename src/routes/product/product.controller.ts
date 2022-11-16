import type { Request, Response } from "express";

async function httpGetProduct(_req: Request, res: Response) {
    return res.status(200).json("hiya!");
}

async function httpGetProductById(_req: Request, res: Response) {}

async function httpCreateProduct(_req: Request, res: Response) {}

async function httpUpdateProductById(_req: Request, res: Response) {}

async function httpDeleteProductById(_req: Request, res: Response) {}

export {
    httpGetProduct,
    httpGetProductById,
    httpCreateProduct,
    httpUpdateProductById,
    httpDeleteProductById,
};
