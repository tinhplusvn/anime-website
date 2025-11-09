function changeVideo(name) {
    const video = document.getElementById('videoPlayer');
    video.src = `videos/${name}.mp4`;
    video.load();
    video.play();
}