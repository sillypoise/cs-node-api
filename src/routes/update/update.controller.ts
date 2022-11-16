import type { Request, Response } from "express";

async function httpGetUpdate(_req: Request, res: Response) {}

async function httpGetUpdateById(_req: Request, res: Response) {}

async function httpCreateUpdate(_req: Request, res: Response) {}

async function httpUpdateUpdateById(_req: Request, res: Response) {}

async function httpDeleteUpdateById(_req: Request, res: Response) {}

export {
    httpGetUpdate,
    httpGetUpdateById,
    httpCreateUpdate,
    httpUpdateUpdateById,
    httpDeleteUpdateById,
};
