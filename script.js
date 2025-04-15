const audioElements = document.querySelectorAll("audio");
audioElements.forEach(audio => {
    audio.addEventListener("play", function () {
        audioElements.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });
});

const videoElements = document.querySelectorAll("video");
videoElements.forEach(video => {
    video.addEventListener("play", function () {
        videoElements.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});