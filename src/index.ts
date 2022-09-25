import express, { Response } from "express";
import { botStarted, sendMessage } from "./appServices/discord";
import { discordClient } from "./shared/services/config/discord";
import { envHelper } from "./shared/utils/envHelper";

const PORT = envHelper.port;

const app = express();

discordClient.on("ready", botStarted);
discordClient.on("messageCreate", sendMessage);

app.use("/", (_, res: Response) => {
  res.json({
    message: "bot is running",
    date: new Date().toISOString(),
  });
});

app.listen(PORT || 3001);
