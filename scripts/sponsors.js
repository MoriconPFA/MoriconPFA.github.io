const sponsorsSection = document.querySelector("#sponsors");
const sponsorsContainer = document.querySelector("#sponsors .container");
let animationIsRunning = false;
let sponsorsClone = null;

const animationBreakpoint = 1200;

const onWindowResize = () => {
	// console.log("ON WINDOW RESIZE!", window.innerWidth);
	// console.log("ON WINDOW RESIZE!", sponsorsContainer, sponsorsContainer.offsetWidth);
	// console.log(window.innerWidth, sponsorsContainer.offsetWidth, sponsorsContainer.getBoundingClientRect())
	if (window.innerWidth < animationBreakpoint && !animationIsRunning) {
		sponsorsContainer.classList.add("animation");
		sponsorsClone = sponsorsContainer.cloneNode(true);
		sponsorsSection.appendChild(sponsorsClone);
		animationIsRunning = true;
	} else if (window.innerWidth > animationBreakpoint && animationIsRunning) {
		sponsorsSection.removeChild(sponsorsClone);
		animationIsRunning = false;
		sponsorsContainer.classList.remove("animation");
	}
}

window.addEventListener("resize", onWindowResize)

onWindowResize();