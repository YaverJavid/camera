const constraints = {
  video: {
    facingMode: {
      exact: 'environment'
    }
  }
};

var video;
navigator.mediaDevices.getUserMedia(constraints).
then((stream) => {
  video = document.createElement("video")
  video.srcObject = stream
  video.play()
  video.onloadeddata = () => {
    ctx.height = video.videoHeight
  }
}).
catch(err => err)
constraints.video.facingMode.exact = 'user'

