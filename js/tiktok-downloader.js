document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("download-btn");
    const inputField = document.getElementById("tiktok-url");

    downloadBtn.addEventListener("click", function () {
        const url = inputField.value.trim();
        if (url === "") {
            alert("Please enter a TikTok URL!");
            return;
        }

        fetch(`https://api-ghost-x.web.id/api/download/tiktokdl?url=${encodeURIComponent(url)}`)
            .then(response => response.json())
            .then(data => {
                if (data.status && data.result && data.result.video_no_wm) {
                    window.location.href = data.result.video_no_wm;
                } else {
                    alert("Failed to download video.");
                }
            })
            .catch(error => alert("Error fetching video."));
    });
});