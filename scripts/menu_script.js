const menuNav = document.querySelector("nav");
const menuButton = document.querySelector("button.menuButton");

menuButton.addEventListener("click", () => {
	const isMenuSelected = menuNav.classList.contains("active");

	if (isMenuSelected) {
		menuNav.classList.remove("active")
	} else {
		menuNav.classList.add("active")
	}
})
