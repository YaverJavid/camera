//service w here

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js').
    then(register => {
    }).
    catch(reason => alert('service-worker-error'))
}

// end

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


canvas.width = 800
canvas.height = 1000

var filters = new Filters()
var lastTime = 0
var timer = 0
var fps = 2
var nextFrame = 0
var color = { r: 255, g: 255, b: 255 }


function updateFrame(time) {
  dt = time - lastTime
  lastTime = time
  timer > nextFrame ? handleCamera() : timer += dt
  requestAnimationFrame(updateFrame)
}


function handleCamera() {
  if (!video) return
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  imgd = ctx.getImageData(0, 0, canvas.width, canvas.height)
  imgd = Filters.dualColor(imgd, hexToRgbaObject(c1.value), hexToRgbaObject(c2.value))
  ctx.putImageData(imgd, 0,0)
} 


document.getElementById('capture').addEventListener('click', () => {
  playCaptureSound()
  let image = new Image()
  image.src = canvas.toDataURL()
  image = document.createElement('image').src = image
  document.getElementsByClassName('container-images')[0].prepend(image)
})


function playCaptureSound() {
  var audio = document.getElementById("audio");
  if (!audio.paused) audio.currentTime = 0
  audio.play();
}

function hexToRgbaObject(hex) {
    let opacity = 1;
    if (hex.length === 9) {
        opacity = parseInt(hex.substring(7, 9), 16) / 255;
        hex = hex.substring(0, 7);
    }
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    return { r, g, b, a: opacity };
}