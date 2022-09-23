import { botStarted, sendMessage } from "./appServices/discord";
import { discordClient } from "./services/config/discord";

discordClient.on("ready", botStarted);
discordClient.on("messageCreate", sendMessage);
