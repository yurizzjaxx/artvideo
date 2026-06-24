var vi = document.createElement("video");
vi.src = "hutao.mp4";
vi.id = "_vi";
vi.autoplay = true;
vi.width = screen.width;
vi.height = screen.height;
document.getElementById("video").appendChild(vi);

document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 415:
      vi.play();
    break;
    case 19:
      vi.pause();
    break;
    case 417:
      vi.currentTime = Math.min(vi.duration, vi.currentTime + 5)
    break;
    case 412:
      vi.currentTime = Math.max(0, vi.currentTime - 5)
    break;
  }
})
