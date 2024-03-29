const momoImg = document.querySelector("#home .momo");
const mori = document.querySelector("#home .mori");
const bushLeft = document.querySelector("#home .bushLeft");
const bushRight = document.querySelector("#home .bushRight");


window.addEventListener("load", function () {
	const pageLoading = document.querySelector(".pageLoading");
	pageLoading?.classList?.add("hidding");
	setupGame()
	setTimeout(() => {
		pageLoading?.remove();

		mori.classList.add("slideMori");
		momoImg.classList.add("slideMomo");
		bushLeft.classList.add("slideLeftBush");
		bushRight.classList.add("slideRightBush");
	}, 1000);
	onWindowResize();

	console.log("Page is loaded!");
})

document.querySelectorAll('button[data-href]').forEach((button) => {
	button.addEventListener("click", () => {
		window.open(button.getAttribute("data-href"), "_blank");
	})
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
			e.preventDefault();
			menuNav.classList.remove("active")

			document.querySelector(this.getAttribute("href")).scrollIntoView({
					behavior: "smooth"
			});
	});
});
