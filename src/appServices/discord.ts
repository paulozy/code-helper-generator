import { getCode } from "./openai";

export function botStarted() {
  console.log("Discord bot is ready");
}

export async function sendMessage(message: any) {
  if (!message.content.startsWith("/code") || message.author.bot) {
    return;
  }

  const [, prompt] = message.content.split("/code ");

  if (!prompt) return;

  try {
    const code = await getCode(prompt);
    message.reply(code);
  } catch (error) {
    return message.reply("Error on generate code");
  }
}
