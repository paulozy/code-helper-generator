import { Configuration, OpenAIApi } from "openai";
import { envHelper } from "../../../utils/envHelper";

const OPENAI_API_KEY = envHelper.openaiKey;

const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const searchParameters = {
  model: "text-davinci-002",
  temperature: 0.9,
  max_tokens: 200,
};

export { openai, searchParameters };
