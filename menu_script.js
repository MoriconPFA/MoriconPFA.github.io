const menuNav = document.querySelector("nav");
const menuButton = document.querySelector("button.menuButton");
const menuList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
	const isMenuSelected = menuNav.classList.contains("active");

	if (isMenuSelected) {
		// menuButton.classList.remove("active")
		// menuList.classList.remove("active")
		menuNav.classList.remove("active")
	} else {
		// menuButton.classList.add("active")
		// menuList.classList.add("active")
		menuNav.classList.add("active")
	}
})


// alternative to DOMContentLoaded
document.onreadystatechange = function () {
	if (document.readyState == "interactive") {
			// Initialize your application or run some code.
	}
}

document.addEventListener("DOMContentLoaded", () => {
	
})