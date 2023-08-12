const timeObject = document.querySelector(".timeRemining");
// const moriconStartTime = new Date("09-08-2023T14:00");
const moriconStartTime = new Date("2023-09-08 14:00");
const moriconEndTime = new Date("2023-09-11 14:00");
let timer = null;

const renderTime = () => {
	let sec = 0;
	let min = 0;
	let hours = 0;
	let days = 0;
	const now = new Date();
	const deltaStartTime = moriconStartTime.getTime() - now.getTime();
	const deltaEndTime = moriconEndTime.getTime() - now.getTime();

	if (deltaStartTime > 0) {
		sec = Math.floor((deltaStartTime / 1000) % 60);
		min = Math.floor((deltaStartTime / (1000 * 60)) % 60);
		hours = Math.floor((deltaStartTime / (1000 * 60 * 60)) % 24);
		days = Math.floor((deltaStartTime / (1000 * 60 * 60 * 24)));

		sec = sec < 10 ? `0${sec}` : `${sec}`;
		min = min < 10 ? `0${min}` : `${min}`;
		hours = hours < 10 ? `0${hours}` : `${hours}`;

		timeObject.innerHTML = `${!!days ? `${days} dni ` : ""} ${hours}:${min}:${sec}`
	} else if (deltaEndTime > 0) {
		timeObject.innerHTML = "Widzimy się na miejscu"
		document.querySelector("#odliczanie h2:first-child:not(h2.timeRemining)")?.remove();
		clearInterval(timer);
	} else {
		timeObject.innerHTML = "Widzimy się za rok 😄"
		document.querySelector("#odliczanie h2:first-child:not(h2.timeRemining)")?.remove();
		clearInterval(timer);
	}

}

new Date('1995-12-17T03:24:00')
renderTime();
timer = setInterval(renderTime, 1000);
