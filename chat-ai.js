const sessionId = Math.floor(Math.random() * 1000000);

document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    function addMessage(content, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", sender);
        messageDiv.innerHTML = `<p>${content}</p>`;
        chatBox.appendChild(messageDiv);

        // Efek animasi slide-up
        setTimeout(() => {
            messageDiv.classList.add("show");
        }, 10);

        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendBtn.addEventListener("click", function () {
        let userMessage = userInput.value.trim();
        if (!userMessage) return; // Cegah pesan kosong

        addMessage(userMessage, "user");
        userInput.value = "";

        // Tampilkan indikator "Shiina sedang mengetik..."
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("chat-message", "ai", "typing");
        typingIndicator.innerHTML = `<p>Shiina sedang mengetik...</p>`;
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Kirim request ke API AI Shiina
        fetch(`https://fastrestapis.fasturl.cloud/aillm/gpt-4?ask=${encodeURIComponent(userMessage)}&style=kamu%20adalah%20mahiru%20shiina%2C%20kamu%20istrinya%20yudzx%2Fyuda%20kamu%20memiliki%20sifat%20ceria%20dan%20gemar%20membantu%20&sessionId=${sessionId}`)
            .then(response => response.json())
            .then(data => {
                chatBox.removeChild(typingIndicator);
                addMessage(data.result, "ai");
            })
            .catch(() => {
                chatBox.removeChild(typingIndicator);
                addMessage("Error: Gagal terhubung ke Shiina.", "ai");
            });
    });
});
