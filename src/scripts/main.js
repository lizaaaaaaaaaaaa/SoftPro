import "../styles/style.scss";

const nav = document.getElementsByClassName("nav")[0];
const burger = document.getElementsByClassName("header__menu")[0];

burger.onclick = () => nav.classList.toggle("active");

const video = document.getElementsByTagName("video")[0];
let intervalId;

const handleVideoMouseEnter = () => {
  clearInterval(intervalId);
  video.currentTime = 0;
  video.play();
  intervalId = setInterval(() => {
    if (video.currentTime >= 3.3) {
      video.pause();
      clearInterval(intervalId);
    }
  }, 100);
};

const handleVideoMouseLeave = () => {
  clearInterval(intervalId);
  if (video.duration - video.currentTime > 0) {
    video.play();
  }
};

video.addEventListener("mouseenter", handleVideoMouseEnter);
video.addEventListener("mouseleave", handleVideoMouseLeave);

const map = document.getElementsByTagName("object")[0];

const handleSvgInteractions = () => {
  const svg = map.contentDocument;
  const paths = svg.querySelectorAll("path");

  paths.forEach((path) => {
    path.style.transition = "fill 0.3s ease";
    path.style.cursor = "pointer";

    const fill = window.getComputedStyle(path).fill;

    path.addEventListener("mouseenter", () => {
      switch (fill) {
        case "rgb(224, 252, 82)":
          path.setAttribute("fill", "#B5D608");
          break;
        case "rgb(41, 105, 246)":
          path.setAttribute("fill", "#2153C1");
          break;
        case "rgb(57, 57, 57)":
          path.setAttribute("fill", "#292929");
          break;
      }
    });

    path.addEventListener("mouseleave", () => {
      path.setAttribute("fill", fill);
    });
  });
};

map.addEventListener("load", handleSvgInteractions);
