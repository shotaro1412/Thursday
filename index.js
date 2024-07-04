const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 840 * 1.74;
canvas.height = 480 * 1.63;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./img/Pellet Town.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

function animate() {
  window.requestAnimationFrame(animate);
  //   c.drawImage(image, 0, 0);
  c.drawImage(
    image,
    60, // source x
    -70, // source y
    image.width * 2, // source width
    image.height * 2 // source height
    // destination y
    // destination height
  );
  c.drawImage(
    playerImage,
    0, // source x
    0, // source y
    playerImage.width / 4, // source width
    playerImage.height * 1.8, // source height
    canvas.width / 2 - playerImage.width / 4, // destination x
    canvas.height / 2 - playerImage.height / 2, // destination y
    playerImage.width / 7.05, // destination width
    playerImage.height // destination height
  );
}
animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      console.log("presses w");
      break;
    case "a":
      console.log("presses a");
      break;
    case "s":
      console.log("presses s");
      break;
    case "d":
      console.log("presses d");
      break;
  }
});
