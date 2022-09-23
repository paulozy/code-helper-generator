import { openai, searchParameters } from "../services/config/openai";

export async function getCode(prompt: string): Promise<string | undefined> {
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
