const Groq = require('groq-sdk');

const groq = new Groq({
    apiKey: "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"
});
async function main() {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [],
    "model": "llama-3.1-70b-versatile",
    "temperature": 0.6,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  for await (const chunk of chatCompletion) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}

main();