﻿let play = document.getElementById("play");
let img = document.getElementById("song_img");
let songName = document.getElementById("song_name");
let seekBar = document.getElementById("seekBar");
let time = document.getElementById("time");
let index = 0;
let audio = new Audio(
  `https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/after-hours-lyrics.mp3?alt=media&token=66af3c5f-7367-444b-bb73-4d59c142a664`
);
let container = document.querySelector(".container");

console.log(audio);

const songs = [
  {
    name: "After Hours",
    img: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/after-hours-lyrics.mp3?alt=media&token=66af3c5f-7367-444b-bb73-4d59c142a664",
  },
  {
    name: "The Hills",
    img: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Weeknd_-_The_Hills.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/the-hills-lyrics.mp3?alt=media&token=90f77d06-d3b1-4dbb-b6ad-0d5ab61e2e1d",
  },
  {
    name: "Inthandham",
    img: "https://c.saavncdn.com/309/Inthandham-From-Sita-Ramam-Telugu-Telugu-2022-20220704185958-500x500.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/%5BiSongs.info%5D%2002%20-%20Inthandham.mp3?alt=media&token=501a162a-5ee8-411e-b078-d1ea91143bf2",
  },
  {
    name: "There's Nothing Holding Me Back",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a4/Shawn_Mendes_-_Theres_Nothing_Holdin_Me_Back_%28Official_Single_Cover%29.jpeg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/theres-nothing-holding-me-back.mp3?alt=media&token=d0af2841-66cc-4874-b8b1-4f728d7deb40",
  },
  {
    name: "Star Boy",
    img: "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Weeknd_-_Starboy_%28single%29.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/starboy-lyrics-ft-daft-punk.mp3?alt=media&token=fff81fdc-4e91-4dc1-a253-b4fbe30babb5",
  },
  {
    name: "Naatu Naatu",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Naatu_Naatu.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/%5BiSongs.info%5D%2005%20-%20Naatu%20Naatu.mp3?alt=media&token=c3f27226-9413-48d9-a680-191eeb132f4e",
  },
  {
    name: "Priya Mithunam",
    img: "https://c.saavncdn.com/957/Adipurush-Telugu-Telugu-2023-20230606175141-500x500.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/%5BiSongs.info%5D%2004%20-%20Priya%20Mithunam.mp3?alt=media&token=f8d0f6d2-817e-4143-9df7-37a7868a2148",
  },
  {
    name: "Kaannuna Kalyanam",
    img: "https://naalyrics.com/wp-content/uploads/2022/08/Kaanunna-Kalyanam.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/%5BiSongs.info%5D%2003%20-%20Kaanunna%20Kalyanam%20(1).mp3?alt=media&token=92073df8-991d-4f84-b63c-6d95bac709a1",
  },
  {
    name: "Vikram Title Track",
    img: "https://upload.wikimedia.org/wikipedia/en/5/59/Vikram_soundtrack.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/%5BiSongs.info%5D%2002%20-%20Vikram%20Title%20Track%20(Telugu).mp3?alt=media&token=3150da5a-d71b-4df5-bdd4-e6262f4ed366",
  },
  {
    name: "Oh Sita Hey Rama",
    img: "https://c.saavncdn.com/937/Oh-Sita-Hey-Rama-From-Sita-Ramam-Telugu-Telugu-2022-20220509153905-500x500.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/%5BiSongs.info%5D%2001%20-%20Oh%20Sita%20Hey%20Rama.mp3?alt=media&token=bebc6716-b81d-49c5-bba9-ee38a011fad1",
  },
  {
    name: "Jai Shri Ram",
    img: "https://upload.wikimedia.org/wikipedia/en/c/cf/Adipurush_poster.jpeg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/%5BiSongs.info%5D%2001%20-%20Jai%20Shri%20Ram.mp3?alt=media&token=48dd28ab-7f0c-486c-acd6-00e3ebb56bf9",
  },
  {
    name: "FearLess Part II",
    img: "https://i.ytimg.com/vi/S19UcWdOA-I/hqdefault.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/TULE%20-%20Fearless%20pt.II%20feat.%20Chris%20Linton.mp3?alt=media&token=a77fcab1-0d3a-49f4-bb56-c081feb95d6b",
  },
  {
    name: "Destiny",
    img: "https://lastfm.freetls.fastly.net/i/u/ar0/3eb21634c812df4ad84a464c77e316fc.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/NEFFEX%20%E2%80%92%20Destiny.mp3?alt=media&token=f2b06b02-037f-44b0-930d-fdf3e2230e50",
  },
  {
    name: "Fight Back",
    img: "https://lastfm.freetls.fastly.net/i/u/ar0/a6e3e9682fbc4cf863088d4e6ddd99bb.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/NEFFEX%20-%20Fight%20Back%20Official%20Video.mp3?alt=media&token=6e532883-cdcd-43aa-a2e3-95d3dfc08748",
  },
  {
    name: "Idol - Oshi No Ko",
    img: "https://upload.wikimedia.org/wikipedia/en/1/1c/Oshi_no_Ko_Volume_1.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/Idol.mp3?alt=media&token=b84ddc60-da1a-46fe-8618-adc1bba07392",
  },
  {
    name: "Havana X Shape Of You X Mi Gente",
    img: "https://i.ytimg.com/vi/y8oV9vy9P9s/maxresdefault.jpg",
    link: "https://firebasestorage.googleapis.com/v0/b/blazingsound-32357.appspot.com/o/Havana%20%E2%9C%98%20Shape%20of%20you%20%E2%9C%98%20Mi%20gente%20(Mashup)%20%7Bnightcore%7D.mp3?alt=media&token=e9b23017-0bf7-4931-893d-992f27b340b3",
  },
];

console.log(index);

function seek() {
  audio.addEventListener("timeupdate", function () {
    seekBar.value = 0;
    progress = parseInt((audio.currentTime / parseInt(audio.duration)) * 100);
    seekBar.value = progress;
    if (progress == 100) {
      console.log("Song completed");
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
  seekBar.value = 0;
  if (index >= 0 && index < songs.length - 1) {
    audio.pause();
    index++;
    audio = new Audio(songs[index].link);
    audio.play();
    seek();
    if (play.className == "fa-solid fa-play") {
      play.className = "fa-solid fa-pause";
    }
    img.src = songs[index].img;
    songName.textContent = songs[index].name;
  } else {
    if (index == songs.length - 1 || seekBar.value == 100) {
      seekBar.value = 0;
      index = 0;
      audio.pause();
      audio = new Audio(songs[index].link);
      audio.play();
      seek();
      if (play.className == "fa-solid fa-play") {
        play.className = "fa-solid fa-pause";
      }
      songName.textContent = songs[index].name;
      img.src = songs[index].img;
    }
  }
}

function masterPrev() {
  if (index > 0 && index < songs.length) {
    console.log(index);
    audio.pause();
    index--;
    audio = new Audio(songs[index].link);
    seekBar.value = 0;
    audio.play();
    seek();
    if (play.className == "fa-solid fa-play") {
      play.className = "fa-solid fa-pause";
    }
    songName.textContent = songs[index].name;
    img.src = songs[index].img;
  } else {
    if (index == 0) {
      audio.pause();
      index = songs.length - 1;
      audio = new Audio(songs[index].link);
      seekBar.value = 0;
      audio.play();
      seek();
      if (play.className == "fa-solid fa-play") {
        play.className = "fa-solid fa-pause";
      }
      songName.textContent = songs[index].name;
      img.src = songs[index].img;
    }
  }
}
