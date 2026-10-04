function swapVideo(videoId, videoTitle) {
  const frame = document.getElementById("main-video-frame");
  const title = document.getElementById("main-video-title");
  const link = document.getElementById("main-video-link");

  if (frame && title) {
    frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    title.textContent = videoTitle;

    if (link) {
      link.href = `https://youtu.be/${videoId}`;
    }

    frame.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
