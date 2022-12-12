function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(0);
  let size = 50;
  let boxW = width;
  while (boxW > 0) {
    let boxH = height;
    while (boxH > 0) {
      const posX = width - boxW;
      const posY = height - boxH;

      fill(random(256), random(256), random(256));
      rect(posX, posY, size, size);

      inSize = random(15, 50);
      fill(random(256), random(256), random(256));
      if (random(0, 1) > 0.5) {
        rect(posX + (size / 2) - (inSize / 2), posY + (size / 2) - (inSize / 2), inSize, inSize);
      } else {
        circle(posX + (size / 2), posY + (size / 2), inSize);
      }
      boxH -= size;
    }
    boxW -= size;
  }
  noLoop();
}

function keyPressed() {
  if (key === 's') {
    saveArt();
  } else {
    loop();
  }
}

function saveArt() {
  save("myCanvas.jpg");
}