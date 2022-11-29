function resizeIFrameToFitContent(iFrame) {
  let videosDiv = document.getElementById("videos-div");
  iFrame.width = videosDiv.getBoundingClientRect().width;
  if (window.getComputedStyle(videosDiv).display === "flex") {
    iFrame.height = videosDiv.getBoundingClientRect().width * (9 / 30);
  } else {
    iFrame.height = videosDiv.getBoundingClientRect().width * (18 / 30);
  }
}

window.addEventListener('DOMContentLoaded', function (e) {

  let iframes = document.querySelectorAll("iframe");
  for (let i = 0; i < iframes.length; i++) {
    resizeIFrameToFitContent(iframes[i]);
  }
});