document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");

    function addMessage(content, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", sender);
        messageDiv.innerHTML = `<p>${content}</p>`;
        chatMessages.appendChild(messageDiv);

        // Efek animasi slide-up
        setTimeout(() => {
            messageDiv.classList.add("show");
        }, 10);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendBtn.addEventListener("click", function () {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        addMessage(userMessage, "user");
        chatInput.value = "";

        // Tampilkan indikator mengetik
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("chat-message", "ai", "typing");
        typingIndicator.innerHTML = `<p>Shiina sedang mengetik...</p>`;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulasi respons AI (gantilah dengan API AI jika ada)
        setTimeout(() => {
            chatMessages.removeChild(typingIndicator);
            addMessage("Halo! Bagaimana saya bisa membantu?", "ai");
        }, 2000);
    });
});
