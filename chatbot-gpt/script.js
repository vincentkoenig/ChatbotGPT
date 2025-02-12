async function postChatMessage(){
    msgContainer.innerHTML += `<div class="msg-me">${chatField.value}</div>`;
    msgContainer.innerHTML += `<div class="msg">${await askChatGPT(chatField.value)}</div>`;
    chatField.value = '';
}


async function askChatGPT(question) {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: `Bitte antworte auf jede Frage so einfach wie möglich.`
                },
                {
                    role: 'user',
                    content: question
                }
            ],
            max_tokens: 150
        })
    });

    if (!response.ok) {
        throw new Error(`Fehler: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
}