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

document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const muteButton = document.getElementById("mute-button");
  const muteIcon = muteButton.querySelector("i");

  muteButton.addEventListener("click", function () {
    if (audioPlayer.muted) {
      audioPlayer.muted = false;
      muteIcon.classList.remove("fa-volume-mute");
      muteIcon.classList.add("fa-volume-up");
      muteButton.setAttribute("aria-label", "Unmute");
    } else {
      audioPlayer.muted = true;
      muteIcon.classList.remove("fa-volume-up");
      muteIcon.classList.add("fa-volume-mute");
      muteButton.setAttribute("aria-label", "Mute");
    }
  });
});
