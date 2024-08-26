import { Request, Response } from "express";

export async function getThreads(req: Request, res: Response) {
  return res.json({ threads: ["Thread 1", "Thread 2", "Thread 3"] });
}
