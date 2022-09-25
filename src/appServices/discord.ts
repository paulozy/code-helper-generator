import { prefix } from "../shared/services/config/discord";
import { envHelper } from "../shared/utils/envHelper";

const ENV = envHelper.env;

export function botStarted() {
  console.log("Discord bot is ready");
}

export async function sendMessage(message: any) {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.trim().slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  const extension = ENV === "prod" ? ".js" : ".ts";

  try {
    const commandFile = require(`../commands/${command}${extension}`);
    commandFile.execute({ args, message });
  } catch (error) {
    console.log(error);
    return message.reply("I don't understand this command");
  }
}
