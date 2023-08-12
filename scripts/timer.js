const timeObject = document.querySelector(".timeRemining");
// const moriconTime = new Date("09-08-2023T14:00");
const moriconTime = new Date("2023-09-08T14:00");
// const moriconTime = new Date("08-08-2022 14:00");
let timer = null;

const renderTime = () => {
	let sec = 0;
	let min = 0;
	let hours = 0;
	let days = 0;
	const now = new Date();
	let deltaTime = moriconTime.getTime() - now.getTime();
	console.log("now", now, now.getTime())
	console.log("moriconTime", moriconTime, moriconTime.getTime())
	console.log(deltaTime)

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

new Date('1995-12-17T03:24:00')
renderTime();
timer = setInterval(renderTime, 1000);
