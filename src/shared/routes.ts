import { Response, Router } from "express";

export const router = Router();

router.get("/", (_, res: Response) => {
  res.json({
    message: "bot is running",
    date: new Date().toISOString(),
  });
});
