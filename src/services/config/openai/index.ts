import { Configuration, OpenAIApi } from "openai";
import { envHelper } from "../../../utils/envHelper";

const OPENAI_API_KEY = envHelper.openaiKey;

const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});

export const openai = new OpenAIApi(config);
