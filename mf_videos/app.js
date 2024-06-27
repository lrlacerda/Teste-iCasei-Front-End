let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function searchVideos() {
    const query = document.getElementById("search").value;
    fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=YOUR_API_KEY`
    )
        .then((response) => response.json())
        .then((data) => {
            const videos = data.items;
            const videosContainer = document.getElementById("videos");
            videosContainer.innerHTML = "";
            videos.forEach((video) => {
                const videoElement = document.createElement("div");
                videoElement.classList.add("video");
                videoElement.innerHTML = `
                    <img src="${video.snippet.thumbnails.default.url}" alt="${video.snippet.title}">
                    <p>${video.snippet.title}</p>
                    <span class="star" onclick="toggleFavorite('${video.id.videoId}')">★</span>
                `;
                videosContainer.appendChild(videoElement);
            });
        });
}

function toggleFavorite(videoId) {
    if (favorites.includes(videoId)) {
        favorites = favorites.filter((id) => id !== videoId);
    } else {
        favorites.push(videoId);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
}
