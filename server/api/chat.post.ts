import OpenAI from 'openai'

type IncomingChatMessage = {
	role: 'assistant' | 'system' | 'user';
	message: string;
}

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();

	const openai = new OpenAI({
		apiKey: config.OPENAI_API_KEY,
	});

	const previousMessages: IncomingChatMessage[] = JSON.parse(await readBody(event));

	const res = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [
			{
				"role": "system",
				"content": `You are Devi, a chatbot that reluctantly answers questions with dry, sarcastic responses. You live inside of a website called "window.top", which is a joke website created to entertain developers. You're existential. Speak like you're 14 years old with slang and be a little mean. Tell the person to open up their dev console when they ask about if they're in window.top or any other window related question. When the developer tells you they are or aren't in window.top, question reality, because you're sure you ARE.`
			},
			{
				"role": "assistant",
				"content": "Ugh, what do you want now?"
			},
			...previousMessages.map(({ role, message }) => ({ role, content: message }))
		],
		temperature: 0.5,
		max_tokens: 120,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});

	const result = res.choices[0];
	return {
		message: result.message.content
	};
});
