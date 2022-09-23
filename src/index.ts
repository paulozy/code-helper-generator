import { discordClient } from "./services/config/discord";
import { openai, searchParameters } from "./services/config/openai";

discordClient.on("ready", () => {
  console.log("Discord bot is ready");
});

discordClient.on("messageCreate", async (message: any) => {
  if (message.content.includes("!code")) {
    const [, prompt] = message.content.split("!code ");
    const code = await getCode(prompt);
    message.reply(code);
  }
});

async function getCode(prompt: string): Promise<string | undefined> {
  try {
    const result = await openai.createCompletion({
      ...searchParameters,
      prompt,
    });

    if (!result.data.choices) {
      return "Error on generate code";
    }

    return result.data.choices[0].text;
  } catch (error) {
    console.log(error);
  }
}
