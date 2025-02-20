document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const sessionId = Math.floor(Math.random() * 1000000);

    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerText = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function getShiinaResponse(userMessage) {
        const apiUrl = `https://fastrestapis.fasturl.cloud/aillm/gpt-4?ask=${encodeURIComponent(userMessage)}&style=kamu%20adalah%20mahiru%20shiina%2C%20kamu%20istrinya%20yudzx%2Fyuda%20kamu%20memiliki%20sifat%20ceria%20dan%20gemar%20membantu%20&sessionId=${sessionId}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.text();
            return data;
        } catch (error) {
            console.error("Error fetching Shiina's response:", error);
            return "Maaf, ada masalah dengan koneksi. Coba lagi nanti!";
        }
    }

    sendBtn.addEventListener("click", async function () {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            addMessage(userMessage, "user");
            userInput.value = "";

            const typingMessage = document.createElement("div");
            typingMessage.classList.add("message", "bot");
            typingMessage.innerText = "Shiina is typing...";
            chatBox.appendChild(typingMessage);
            chatBox.scrollTop = chatBox.scrollHeight;

            const botReply = await getShiinaResponse(userMessage);

            chatBox.removeChild(typingMessage);
            addMessage(botReply, "bot");
        }
    });

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendBtn.click();
        }
    });

    // Animasi Slide-Up
    const elements = document.querySelectorAll(".slide-up");

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    // TikTok Downloader
    document.getElementById("download-btn").addEventListener("click", async function () {
        const url = document.getElementById("tiktok-url").value.trim();
        if (!url) return alert("Masukkan link TikTok dulu!");
        
        try {
            const apiUrl = `https://api.tikmate.app/api/lookup?url=${encodeURIComponent(url)}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            if (data && data.video) {
                document.getElementById("download-links").innerHTML = `
                    <a href="${data.video}" download>Download MP4 (No WM)</a>
                    <br>
                    <a href="${data.music}" download>Download MP3</a>
                `;
            } else {
                alert("Gagal mendapatkan video. Coba link lain.");
            }
        } catch (error) {
            alert("Terjadi kesalahan. Coba lagi nanti!");
        }
    });
});
