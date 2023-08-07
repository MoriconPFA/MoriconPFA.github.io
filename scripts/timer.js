const timeObject = document.querySelector(".timeRemining");
const moriconTime = new Date("09-08-2023 14:00");
// const moriconTime = new Date("08-08-2023 14:00");
let timer = null;

const renderTime = () => {
	let sec = 0;
	let min = 0;
	let hours = 0;
	let days = 0;
	const now = new Date();
	let deltaTime = moriconTime.getTime() - now.getTime();

	if (deltaTime > 0) {
		sec = Math.floor((deltaTime / 1000) % 60);
		min = Math.floor((deltaTime / (1000 * 60)) % 60);
		hours = Math.floor((deltaTime / (1000 * 60 * 60)) % 24);
		days = Math.floor((deltaTime / (1000 * 60 * 60 * 24)));

		sec = sec < 10 ? `0${sec}` : `${sec}`;
		min = min < 10 ? `0${min}` : `${min}`;
		hours = hours < 10 ? `0${hours}` : `${hours}`;

		timeObject.innerHTML = `${!!days ? `${days} dni ` : ""} ${hours}:${min}:${sec}`
	} else {
		timeObject.innerHTML = "Widzimy się na miejscu"
		document.querySelector("#odliczanie h2:first-child:not(h2.timeRemining)")?.remove();
		clearInterval(timer);
	}

}


renderTime();
timer = setInterval(renderTime, 1000);
