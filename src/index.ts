import { botStarted, sendMessage } from "./appServices/discord";
import { discordClient } from "./shared/services/config/discord";

discordClient.on("ready", botStarted);
discordClient.on("messageCreate", sendMessage);
