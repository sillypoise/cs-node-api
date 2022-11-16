import type { Request, Response } from "express";

async function httpGetUpdatePoint(_req: Request, res: Response) {}

async function httpGetUpdatePointById(_req: Request, res: Response) {}

async function httpCreateUpdatePoint(_req: Request, res: Response) {}

async function httpUpdateUpdatePointById(_req: Request, res: Response) {}

async function httpDeleteUpdatePointById(_req: Request, res: Response) {}

export {
    httpGetUpdatePoint,
    httpGetUpdatePointById,
    httpCreateUpdatePoint,
    httpUpdateUpdatePointById,
    httpDeleteUpdatePointById,
};
