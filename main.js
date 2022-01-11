"use strict";
function changeDiceImage() {
	const random1 = Math.floor(Math.random() * 6 + 1);
	const random2 = Math.floor(Math.random() * 6 + 1);
	console.log(random1, random2);
	const element1 = document.getElementsByClassName("dice-img")[0];
	element1.classList.add("animation");
	element1.src = `assets/images/dice${random1}.png`;
	const element2 = document.getElementsByClassName("dice-img")[1];
	element2.src = `assets/images/dice${random2}.png`;
	element2.classList.add("animation");
	setTimeout(() => {
		winner(random1, random2);
		element1.classList.remove("animation");
		element2.classList.remove("animation");
	}, 1500);
}
function winner(random1, random2) {
	const element = document.querySelector("h1");
	if (random1 > random2) {
		element.innerHTML = `<img class="img-results" src="assets/images/winner.png"/> Win Player 1`;
	} else if (random2 > random1) {
		element.innerHTML = `Win Player 2 <img class="img-results" src="assets/images/winner.png"/> `;
	} else {
		element.innerHTML = `<img class="img-results" src="assets/images/handshake.png"/> It's a draw!`;
	}
}
