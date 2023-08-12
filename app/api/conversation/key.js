import openai from 'openai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    openai.api_key = apiKey;

    const response = await openai.Completion.create({
      engine: 'davinci',
      prompt,
      max_tokens: 100
    });

    const generatedText = response['choices'][0]['text'];
    return res.status(200).json({ generatedText });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred' });
  }
}
