const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play and Pause video
function toggleVideoStatus() {
    if(video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

// Update play/pause icon
function updatePlayIcon() {
    return true
}

// Update progress & timestamp
function updateProgress() {
    return true
}

// Set video time to progress
function setVideoProgress() {
    return true
}

// Stop the video 
function stopVideo() {
    return true
}

// Event listeners 
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)

