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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
			e.preventDefault();
			menuNav.classList.remove("active")

			document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
			});
	});
});


// alternative to DOMContentLoaded
document.onreadystatechange = function () {
	if (document.readyState == "interactive") {
			// Initialize your application or run some code.
	}
}

document.addEventListener("DOMContentLoaded", () => {
	
})