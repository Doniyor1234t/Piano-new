const player = document.querySelector('.songs__player'),
	playbtn = document.querySelector('.songs__play'),
	back = document.querySelector('.songs__back'),
	next = document.querySelector('.songs__next'),
	title = document.querySelector('.songs__name'),
	audio = document.querySelector('.audio'),
	imgSrc = document.querySelector('.songs__play-img')

//name
const songs = ['Halo (Beyonce)']

let songIndex = 0

function loadSong(song) {
	title.innerHTML = song
	audio.src = 'audio/Halo(Beyonce).mp3'
}
loadSong(songs[songIndex])


function playSong() {
	player.classList.add('play')
	audio.play()
	imgSrc.src = './img/Musics/Pause.svg'
}

function pauseSong() {
	player.classList.remove('play')
	audio.pause()
	imgSrc.src = './img/Musics/Play.svg'
}
playbtn.addEventListener('click', () => {
	const isPlaying = player.classList.contains('play')
	if (isPlaying) {
		pauseSong()
	} else {
		playSong()
	}
})

const faqs = document.querySelectorAll(".faq__block");

faqs.forEach(faq => {
	faq.addEventListener('click', () => {
		faq.classList.toggle("active");
	})
})


const C4 = new Audio("./audio/sounds/C4.mp3");
const Db4 = new Audio("./audio/sounds/Db4.mp3");
const D4 = new Audio("./audio/sounds/D4.mp3");
const Eb4 = new Audio("./audio/sounds/Eb4.mp3");
const E4 = new Audio("./audio/sounds/E4.mp3");
const F4 = new Audio("./audio/sounds/F4.mp3");
const Gb4 = new Audio("./audio/sounds/Gb4.mp3");
const G4 = new Audio("./audio/sounds/G4.mp3");
const Ab4 = new Audio("./audio/sounds/Ab4.mp3");
const A4 = new Audio("./audio/sounds/A4.mp3");
const Bb4 = new Audio("./audio/sounds/Bb4.mp3");
const B4 = new Audio("./audio/sounds/B4.mp3");

const playSound = audio => {
	const clone = audio.cloneNode();
	clone.play();
	setTimeout(() => (clone.volume = 0.8), 400);
	setTimeout(() => (clone.volume = 0.6), 800);
	setTimeout(() => (clone.volume = 0.4), 1200);
	setTimeout(() => (clone.volume = 0.2), 1600);
	setTimeout(() => (clone.volume = 0), 2000);
};

// C4
const C4Key = document.querySelector(".C4-key");
const playC4 = () => {
	playSound(C4);
	C4Key.classList.add("active");
	setTimeout(() => C4Key.classList.remove("active"), 200);
};
C4Key.addEventListener("click", playC4);

// Db4
const Db4Key = document.querySelector(".Db4-key");
const playDb4 = () => {
	playSound(Db4);
	Db4Key.classList.add("active");
	setTimeout(() => Db4Key.classList.remove("active"), 200);
};
Db4Key.addEventListener("click", playDb4);

// D4
const D4Key = document.querySelector(".D4-key");
const playD4 = () => {
	playSound(D4);
	D4Key.classList.add("active");
	setTimeout(() => D4Key.classList.remove("active"), 200);
};
D4Key.addEventListener("click", playD4);

// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
	playSound(Eb4);
	Eb4Key.classList.add("active");
	setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// E4
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
	playSound(E4);
	E4Key.classList.add("active");
	setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// F4
const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
	playSound(F4);
	F4Key.classList.add("active");
	setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
	playSound(Gb4);
	Gb4Key.classList.add("active");
	setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
	playSound(G4);
	G4Key.classList.add("active");
	setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

// Ab4
const Ab4Key = document.querySelector(".Ab4-key");
const playAb4 = () => {
	playSound(Ab4);
	Ab4Key.classList.add("active");
	setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// A4
const A4Key = document.querySelector(".A4-key");
const playA4 = () => {
	playSound(A4);
	A4Key.classList.add("active");
	setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", playA4);

// Bb4
const Bb4Key = document.querySelector(".Bb4-key");
const playBb4 = () => {
	playSound(Bb4);
	Bb4Key.classList.add("active");
	setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// B4
const B4Key = document.querySelector(".B4-key");
const playB4 = () => {
	playSound(B4);
	B4Key.classList.add("active");
	setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", playB4);


window.addEventListener("keydown", ({ keyCode }) => {
	// Press a
	if (keyCode === 65) return playC4();

	// Press w
	if (keyCode === 87) return playDb4();

	// Press s
	if (keyCode === 83) return playD4();

	// Press e
	if (keyCode === 69) return playEb4();

	// Press d
	if (keyCode === 68) return playE4();

	// Press f
	if (keyCode === 70) return playF4();

	// Press t
	if (keyCode === 84) return playGb4();

	// Press g
	if (keyCode === 71) return playG4();

	// Press y
	if (keyCode === 89) return playAb4();

	// Press h
	if (keyCode === 72) return playA4();

	// Press u
	if (keyCode === 85) return playBb4();

	// Press j
	if (keyCode === 74) return playB4();

}); 