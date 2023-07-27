let play = document.getElementById("play");
let img = document.getElementById("song_img");
let songName = document.getElementById("song_name");
let seekBar = document.getElementById("seekBar");
let time = document.getElementById("time");
let index = 1;
let audio = new Audio(
  `https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/%5BiSongs.info%5D%2002%20-%20Inthandham.mp3?alt=media&token=501a162a-5ee8-411e-b078-d1ea91143bf2`
);
let container = document.querySelector(".container");

console.log(audio);

let songsList = [
  "Fairy Tale",
  "Thunder",
  "Blood//Water",
  "Havana X Shape of you X Mi gente",
  "Fight Back",
  "Destiny",
  "Fearless",
  "Beast mode - Beast",
  "Guess Who is Back - Black Clover",
  "Yoasobi - Into the night",
  "Master - Kutti Story",
  "Master - Master the Blaster",
  "Master - Vaathi coming",
  "Master - Vaathi raid",
  "Yoasobi - Tabun",
];

let colors = "#";
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];

function seek() {
  audio.addEventListener("timeupdate", function () {
    seekBar.value = 0;
    progress = parseInt((audio.currentTime / parseInt(audio.duration)) * 100);
    seekBar.value = progress;
    // console.log(progress);

    if (progress == 100) {
      //   console.log("Song completed");
      masterNext();
    }
  });

  seekBar.addEventListener("change", function () {
    audio.currentTime = (seekBar.value * parseInt(audio.duration)) / 100;
  });
}

function masterPlay() {
  //   console.log(parseInt(audio.duration));
  if (play.className == "fa-solid fa-play") {
    play.className = "fa-solid fa-pause";
    audio.play();
    seek();
  } else {
    seekBar.value = 0;
    play.className = "fa-solid fa-play";
    audio.pause();
  }
}

function masterNext() {
  for (let i = 0; i < 6; i++) {
    colors += "" + nums[Math.floor(Math.random() * nums.length)];
  }
  //   console.log(colors);

  document.body.style.backgroundColor = colors;
  container.style.backgroundColor = colors;
  colors = "#";
  seekBar.value = 0;
  if (index >= 1 && index < songsList.length) {
    audio.pause();
    audio = new Audio(`songs/${index + 1}.mp3`);
    audio.play();
    seek();
    if (play.className == "fa-solid fa-play") {
      play.className = "fa-solid fa-pause";
    }
    img.src = `../song_pics/${index + 1}.jpg`;
    songName.textContent = songsList[index];
    index++;
  } else {
    if (index >= songsList.length || seekBar.value == 100) {
      seekBar.value = 0;
      index = 1;
      audio.pause();
      audio = new Audio(`songs/${index}.mp3`);
      audio.play();
      seek();
      if (play.className == "fa-solid fa-play") {
        play.className = "fa-solid fa-pause";
      }
      songName.textContent = songsList[index - 1];
      img.src = `../song_pics/${index}.jpg`;
    }
  }
}

function masterPrev() {
  for (let i = 0; i < 6; i++) {
    colors += "" + nums[Math.floor(Math.random() * nums.length)];
  }
  //   console.log(colors);

  document.body.style.backgroundColor = colors;
  container.style.backgroundColor = colors;
  colors = "#";
  if (index > 1 && index <= songsList.length) {
    index--;
    audio.pause();

    audio = new Audio(`songs/${index}.mp3`);

    seekBar.value = 0;
    audio.play();
    seek();
    if (play.className == "fa-solid fa-play") {
      play.className = "fa-solid fa-pause";
    }
    songName.textContent = songsList[index - 1];
    img.src = `../song_pics/${index}.jpg`;
  } else {
    if (index <= 1) {
      index = songsList.length;
      audio.pause();
      audio = new Audio(`songs/${index}.mp3`);
      seekBar.value = 0;
      audio.play();
      seek();
      if (play.className == "fa-solid fa-play") {
        play.className = "fa-solid fa-pause";
      }
      songName.textContent = songsList[index - 1];
      img.src = `../song_pics/${index}.jpg`;
    }
  }
}
