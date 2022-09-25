import { getCode } from "../appServices/openai";

interface IExecute {
  message: any;
  args: any;
}

async function execute({ args, message }: IExecute) {
  const prompt = args.join(" ");

  if (!prompt) return;
  const code = await getCode(prompt);

  message.reply(code);
}

const commandInfo = {
  name: "Generate",
  description: "This command generate a code with base in the phrase received",
};

export { execute, commandInfo };
