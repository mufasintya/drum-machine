let isPowerOn = false; // Set awal ke off

function togglePower() {
  isPowerOn = !isPowerOn; // Toggle status on/off
  const powerButton = document.querySelector("#display button");

  document.getElementById("toggleBtn").addEventListener("change", function () {
    if (this.checked) {
      document.querySelector(".onofftext.on").style.display = "none";
      document.querySelector(".onofftext.off").style.display = "block";
    } else {
      document.querySelector(".onofftext.off").style.display = "none";
      document.querySelector(".onofftext.on").style.display = "block";
    }
  });
}

function playSound(id) {
  if (isPowerOn) {
    const audio = document.getElementById(`${id}_audio`);
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
  }
}

let volume = 1;

function changeVolume(vol) {
  volume = vol;
}
