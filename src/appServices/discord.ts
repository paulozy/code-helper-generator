import { prefix } from "../shared/services/config/discord";

export function botStarted() {
  console.log("Discord bot is ready");
}

export async function sendMessage(message: any) {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.trim().slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`../commands/${command}.ts`);
    commandFile.execute({ args, message });
  } catch (error) {
    return message.reply("I don't understand this command");
  }
}
