import { Request, Response } from "express";

export async function getAllReplies(req: Request, res: Response) {
  const replies = res.json({ replies: ["Reply 1", "Reply 2", "Reply 3"] });
  return replies;
}
