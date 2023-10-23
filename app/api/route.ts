import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
    temperature: 0.7, // Set your desired temperature value here
    max_tokens: 150, // Set your desired token limit here
  });

  const save= OpenAIStream(response, {});
  const stream = save;

  return new StreamingTextResponse(stream);
  
}
