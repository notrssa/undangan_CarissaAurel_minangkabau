$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

AOS.init();

// document.addEventListener("DOMContentLoaded", function () {
//   const audioPlayer = document.getElementById("audio-player");
//   const muteButton = document.getElementById("mute-button");
//   const muteIcon = muteButton.querySelector("i");

//   muteButton.addEventListener("click", function () {
//     if (audioPlayer.muted) {
//       audioPlayer.muted = false;
//       muteIcon.classList.remove("fa-volume-mute");
//       muteIcon.classList.add("fa-volume-up");
//       muteButton.setAttribute("aria-label", "Unmute");
//     } else {
//       audioPlayer.muted = true;
//       muteIcon.classList.remove("fa-volume-up");
//       muteIcon.classList.add("fa-volume-mute");
//       muteButton.setAttribute("aria-label", "Mute");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById('audio-player');
  const muteButton = document.getElementById('mute-button');
  const muteIcon = muteButton.querySelector('i');

  muteButton.addEventListener('click', function () {
    if (audioPlayer.muted) {
      muteButton.setAttribute('aria-label', "Unmute");
    } else {
      audioPlayer.muted = true;
      muteIcon.classList.remove("fa-volume-up");
      muteIcon.classList.add("fa-volume-mute");
      muteButton.setAttribute("aria-label", "Mute");
    }
  });
});

let audio = document.getElementById('audio');
let play = document.getElementById('play');
let mute = document.getElementById('mute-button');

play.addEventListener('click', function() {
    audio.play();
});

mute.addEventListener('click', function() {
    audio.muted = !audio.muted;
})

function PlayMusic() {

  var play=document.getElementById("audio");
  play.play();
}

$(document).ready(function(){
  setTimeout(PlayMusic,3000);
})