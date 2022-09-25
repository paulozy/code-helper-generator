import "dotenv/config";

const discordToken = process.env.DISCORD_TOKEN;
const openaiKey = process.env.OPENAI_TOKEN;
const port = process.env.PORT;

export const envHelper = {
  discordToken,
  openaiKey,
  port,
};
