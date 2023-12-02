let video = document.createElement("video");

function startCamera(facingMode) {
    const constraints = {
        video: {
            facingMode: facingMode
        }
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            video.srcObject = stream;
            video.play();
        })
        .catch(err => console.error(err));
}

startCamera('environment'); // Start with the back camera


swc.onclick = () => {
    const currentFacingMode = video.srcObject.getTracks()[0].getSettings().facingMode;
    const newFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';

    video.srcObject.getTracks().forEach(track => track.stop());
    startCamera(newFacingMode);
};