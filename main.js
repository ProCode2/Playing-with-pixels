let canv;
function preload() {
  img  = loadImage("panda.jpg");
  console.log(img);
}

function setup() {
  canv = createCanvas(img.width, img.height);
  pixelDensity(1);
  createImg("./panda.jpg", "this is a panda");
}

function draw() {
  background (54);
  //extractTheme(img, img.width/2, width, height);
 /* canv.loadPixels();
  fizzBuzz(img);
  canv.updatePixels();
*/
  
  
}

function extractTheme(img, column, canvas_width, canvas_height) {
  for (let i = 0; i < canvas_width; i++) {
    copy(img, column, 0, 2, img.height, i, 0, 2, height);
  }
}

function fizzBuzz(img) {
  img.loadPixels(); 
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let index = (i + j * img.width) * 4;
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      if (i % 3 == 0 && j % 5 == 0) {
        pixels[index + 0] = r;
        pixels[index + 1] = r;
        pixels[index + 2] = r;
      } else if (i % 15 == 0 && j % 15 == 0) {
        pixels[index + 0] = g;
        pixels[index + 1] = g;
        pixels[index + 2] = g
      } else if ((i + j) % 2 == 0) {
        pixels[index + 0] = b;
        pixels[index + 1] = b;
        pixels[index + 2] = b;
      }
      else {
        pixels[index + 0] = (r / (r + g + b)) * g;
        pixels[index + 1] = (g / (r + g + b)) * r;
        pixels[index + 2] = (b / (r + g + b)) * b;
      }
    }
  }
}
