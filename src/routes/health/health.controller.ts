import type { Request, Response } from "express";

async function httpGetHealth(_req: Request, res: Response) {
    return res.status(200).json("Server is healthy!");
}

export { httpGetHealth };
