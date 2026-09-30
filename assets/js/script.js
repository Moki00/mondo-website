function swapVideo(videoId, videoTitle) {
  const frame = document.getElementById("main-video-frame");
  const title = document.getElementById("main-video-title");

  if (frame && title) {
    frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    title.textContent = videoTitle;
    frame.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
