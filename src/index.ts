import express from "express";
import { botStarted, sendMessage } from "./appServices/discord";
import { router } from "./shared/routes";
import { discordClient } from "./shared/services/config/discord";
import { envHelper } from "./shared/utils/envHelper";

const PORT = envHelper.port;

const app = express();

app.use(router);

discordClient.on("ready", botStarted);
discordClient.on("messageCreate", sendMessage);

app.listen(PORT || 3001);
