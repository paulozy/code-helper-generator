import { helpMessage } from "../shared/utils/helpMessage";

interface IExecute {
  message: any;
}

export async function execute({ message }: IExecute) {
  message.reply(helpMessage);
}
