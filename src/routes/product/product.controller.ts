import type { Request, Response } from "express";
import { prisma } from "~/service/db";

async function httpGetProduct(req: Request, res: Response) {
    console.log(req.headers.authorization);
    let user = await prisma.user.findUnique({
        where: {
            id: "1234",
        },
    });
    return res.status(200).json(user);
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
