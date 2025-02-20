const sessionId = Math.floor(Math.random() * 1000000);

function sendMessage() {
    let userMessage = document.getElementById("user-input").value;
    fetch(`https://fastrestapis.fasturl.cloud/aillm/gpt-4?ask=${encodeURIComponent(userMessage)}&style=kamu%20adalah%20mahiru%20shiina%2C%20kamu%20istrinya%20yudzx%2Fyuda%20kamu%20memiliki%20sifat%20ceria%20dan%20gemar%20membantu%20&sessionId=${sessionId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("chat-box").innerHTML += `<p>${data.result}</p>`;
        });
}