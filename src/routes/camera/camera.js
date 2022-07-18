// video 객체
const video = document.getElementById("camera");
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
});

// caputre button
function captureImg() {
  const image = document.getElementById("capture-img");

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  // draw the video at the frame
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL();

  // 이미지 미리보기
  image.src = dataURL;
}

// save button
function saveImg() {
  const image = document.getElementById("capture-img");
  if (image.src) {
    const filename = Date.now();
    const base64Data = image.src.split(",")[1];

    const fs = require("fs");
    // media 폴더가 없다면 생성
    if (!fs.existsSync(".media")) {
      fs.mkdir(".media", (error) => {
        console.log(error);
      });
    }

    fs.writeFileSync(`.media/${filename}.png`, base64Data, {
      encoding: "base64",
    });
  } else {
    alert("사진을 먼저 찍어주세요");
  }
}
