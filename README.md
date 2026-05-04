# ChatbotGPT 💬

A browser-based chatbot interface that communicates with OpenAI's GPT-4 model. Built with vanilla HTML and JavaScript — no frameworks, no build tools, runs directly in the browser.

## Features

- 💬 **Real-time chat interface** — send messages and receive GPT-4 responses instantly
- 🎨 **Clean frontend** — built with plain HTML & CSS, no dependencies
- ⚙️ **Customizable system prompt** — adjust the chatbot's behavior and personality directly in the code
- 🔌 **Direct API integration** — communicates with OpenAI's Chat Completions endpoint via `fetch`

## Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?style=flat&logo=openai&logoColor=white)

## Project Structure

```
ChatbotGPT/
└── chatbot-gpt/
    ├── index.html    # Chat UI layout
    └── script.js     # API communication & message rendering
```

## How It Works

1. User types a message and clicks "Send"
2. `postChatMessage()` adds the message to the chat history
3. `askChatGPT()` sends the conversation to the OpenAI API
4. The GPT-4 response is received and rendered in the chat window

## Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/vincentkoenig/ChatbotGPT.git
cd ChatbotGPT/chatbot-gpt
```

**2. Add your OpenAI API key**

Open `script.js` and replace the placeholder with your key:
```javascript
const apiKey = 'your-api-key-here';
```
> Get your API key at [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

**3. Open in browser**

Open `index.html` directly in any modern browser — no server needed.

## Known Limitations

- **API key is exposed in the frontend** — this is intentional for simplicity in this demo project. In a production environment, API calls should always be proxied through a backend server to keep the key secure.
- No conversation memory between page reloads

## What I Learned

- Making asynchronous API calls with `fetch` and `async/await` in JavaScript
- Handling JSON request/response structures for the OpenAI Chat Completions API
- Dynamically updating the DOM to render a real-time chat interface
- Understanding the role of system prompts in shaping AI behavior
