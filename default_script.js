document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
			e.preventDefault();
			menuNav.classList.remove("active")

			document.querySelector(this.getAttribute("href")).scrollIntoView({
					behavior: "smooth"
			});
	});
});


const momo = document.querySelector("#home .momo");
const mori = document.querySelector("#home .mori");
const bushLeft = document.querySelector("#home .bushLeft");
const bushRight = document.querySelector("#home .bushRight");


console.log(momo, mori, bushLeft, bushRight);
window.addEventListener("load", function () {
	const pageLoading = document.querySelector(".pageLoading");
	pageLoading?.classList?.add("hidding");
	setTimeout(() => {
		pageLoading?.remove();

		mori.classList.add("slideMori");
		momo.classList.add("slideMomo");
		bushLeft.classList.add("slideLeftBush");
		bushRight.classList.add("slideRightBush");
	}, 1000);
	console.log("Page is loaded!");

})

document.querySelectorAll('button[data-href]').forEach((button) => {
	button.addEventListener("click", () => {
		window.open(button.getAttribute("data-href"), "_blank");
	})
	console.log(button);
})