import fs from "fs";
import path from "path";

const commands = fs.readdirSync(path.resolve(__dirname, "../..", "commands"));

export let helpMessage = "";

const commandsWithoutHelp = commands.filter(
  (command) => !command.includes("help")
);

console.log(commands, commandsWithoutHelp);

commandsWithoutHelp.forEach((filename) => {
  const commandFile = require(`../../commands/${filename}`);
  const commandInfo = commandFile.commandInfo;
  helpMessage += `${commandInfo.name}: ${commandInfo.description}\n`;
});
