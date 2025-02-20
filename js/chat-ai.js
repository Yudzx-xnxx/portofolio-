document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");

    const sessionId = Math.floor(Math.random() * 1000000);

    sendBtn.addEventListener("click", function () {
        const userMessage = messageInput.value.trim();
        if (userMessage === "") return;

        addMessage("You", userMessage);
        messageInput.value = "";

        fetchChatResponse(userMessage);
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function fetchChatResponse(message) {
        fetch(`https://fastrestapis.fasturl.cloud/aillm/gpt-4?ask=${encodeURIComponent(message)}&style=kamu%20adalah%20mahiru%20shiina%2C%20kamu%20istrinya%20yudzx%2Fyuda%20kamu%20memiliki%20sifat%20ceria%20dan%20gemar%20membantu%20&sessionId=${sessionId}`)
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                addMessage("Shiina", data.result);
            } else {
                addMessage("Shiina", "Oops! Aku tidak bisa merespons saat ini.");
            }
        })
        .catch(error => addMessage("Shiina", "Maaf, terjadi kesalahan!"));
    }
});