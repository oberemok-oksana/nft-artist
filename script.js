var macyInstance = Macy({
  container: ".grid",
  columns: 3,
  margin: {
    x: 20,
    y: 20,
  },
  // See below for all available options.
});

document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => {
    video.currentTime = 0;
    video.pause();
  });
});
