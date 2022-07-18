// video 객체
const video = document.getElementById("camera");
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
});

// caputre button
const caputreImg = document.getElementById("capture-img");
const captureBtn = document.getElementById("capture-btn");
captureBtn.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  // draw the video at the frame
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL("image/jpeg");

  // 이미지 미리보기
  caputreImg.src = dataURL;
});
