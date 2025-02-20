function downloadTikTok() {
    let url = document.getElementById("tiktok-url").value;
    fetch(`https://api-ghost-x.web.id/api/download/tiktokdl?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("download-result").innerHTML = `<a href="${data.result}" target="_blank">Download Video</a>`;
        });
}