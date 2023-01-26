console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let play = document.getElementById("play");
let bar = document.getElementById("bar");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {
        songName: "Warriyo - Mortals [NCS Release]",
        filePath: "https://www.youtube.com/watch?v=ZyiFeREyLYo",
        coverPath: "covers/1.jpg",
    },
    {
        songName: "Cielo - Huma-Huma",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg",
    },
    {
        songName: "DEAF KEV - Invincible [NCS Release]-320k",
        filePath: "songs/3.mp3",
        coverPath: "covers/3.jpg",
    },
    {
        songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
        filePath: "songs/4.mp3",
        coverPath: "covers/4.jpg",
    },
    {
        songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
        filePath: "songs/5.mp3",
        coverPath: "covers/5.jpg",
    },
    {
        songName: "Rabba - Salam-e-Ishq",
        filePath: "songs/2.mp3",
        coverPath: "covers/6.jpg",
    },
    {
        songName: "Sakhiyaan - Salam-e-Ishq",
        filePath: "songs/2.mp3",
        coverPath: "covers/7.jpg",
    },
    {
        songName: "Bhula Dena - Salam-e-Ishq",
        filePath: "songs/2.mp3",
        coverPath: "covers/8.jpg",
    },
    {
        songName: "Tumhari Kasam - Salam-e-Ishq",
        filePath: "songs/2.mp3",
        coverPath: "covers/9.jpg",
    },
    {
        songName: "Na Jaana - Salam-e-Ishq",
        filePath: "songs/4.mp3",
        coverPath: "covers/10.jpg",
    },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
play.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        play.classList.remove("bi-play-circle-fill");
        play.classList.add("bi-pause-circle-fill");
    } else {
        audioElement.pause();
        play.classList.remove("bi-pause-circle-fill");
        play.classList.add("bi-play-circle-fill");
    }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
    // Update Seekbar
    progress = parseInt(
        (audioElement.currentTime / audioElement.duration) * 100
    );
    bar.value = progress;
});

bar.addEventListener("change", () => {
    audioElement.currentTime = (bar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songPlay")).forEach(
        (element) => {
            element.classList.remove("bi-pause-circle-fill");
            element.classList.add("bi-play-circle-fill");
        }
    );
};

Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("bi-play-circle-fill");
        e.target.classList.add("bi-pause-circle-fill");
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();

        play.classList.remove("bi-play-circle-fill");
        play.classList.add("bi-pause-circle-fill");
    });
});

document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove("bi-play-circle-fill");
    play.classList.add("bi-pause-circle-fill");
});

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove("bi-play-circle-fill");
    play.classList.add("bi-pause-circle-fill");
});

