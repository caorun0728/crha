var audio = document.getElementById('audio');
var playpause = document.getElementById("play-pause");

audio.volume = 0.8;
audio.controls = false;
audio.loop = true;

function togglePlayPause() {
   if (audio.paused) {
      playpause.title = "暂停";
      playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
      audio.play();
   } else {
	   if (audio.ended) {
		  	playpause.title = "暂停";
      		playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
      		audio.play();
	   } else {
      playpause.title = "播放";
      playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
      audio.pause();
	   }
   }
}