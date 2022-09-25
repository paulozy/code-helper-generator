import { getCode } from "../appServices/openai";

interface IExecute {
  message: any;
  args: any;
}

export async function execute({ args, message }: IExecute) {
  const prompt = args.join(" ");

  if (!prompt) return;
  const code = await getCode(prompt);

  message.reply(code);
}
