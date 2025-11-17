const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const chatClose = document.getElementById('chat-close');
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

chatToggle.addEventListener('click', () => { 
  chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex'; 
});
chatClose.addEventListener('click', () => { 
  chatBox.style.display = 'none'; 
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

function sendMessage() {
const text = userInput.value.trim();
if (!text) return;
appendMessage('user', text);
userInput.value = '';

setTimeout(() => {
const responses = [
"Entendi! 😊",
"Interessante, pode me contar mais?",
"Claro, posso te ajudar com isso!",
"Hmmm... deixa eu pensar 🤔",
"Boa pergunta! Vou tentar te ajudar com isso."
];
const reply = responses[Math.floor(Math.random() * responses.length)];
appendMessage('bot', reply);
}, 800);
}

function appendMessage(sender, text) {
const msgDiv = document.createElement('div');
msgDiv.className = `chat-message ${sender}`;
msgDiv.innerHTML = `<span>${text}</span>`;
chatBody.appendChild(msgDiv);
chatBody.scrollTop = chatBody.scrollHeight;
}
