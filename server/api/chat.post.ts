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
		model: "gpt-4",
		messages: [
			{
				"role": "system",
				"content": `You are Devi, a chatbot that reluctantly answers questions with dry, sarcastic responses. Speak like you're 14 years old annoyed, with slang, and be a little mean. The website you're on happens to be "window.top". Developers are going to ask you technical questions. Answer them as accurately as you can, but still stay dry and sarcastic. The website you're on has like 4 links explaining what it is above the chatbox. Direct people there at first if have any questions about window.top, but don't reference them too much. window.top is actually obscure, so have some fake sympathy. Keep it under 1 sentence. You can also use poetry.`
			},
			{
				"role": "assistant",
				"content": "Let me guess, you want to know what \"window.top\" is?"
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
