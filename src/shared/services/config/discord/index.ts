import { Client, GatewayIntentBits } from "discord.js";
import { envHelper } from "../../../utils/envHelper";

const DISCORD_TOKEN = envHelper.discordToken;

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
  ],
});

const prefix = "code!";

client.login(DISCORD_TOKEN);

export { client as discordClient, prefix };
