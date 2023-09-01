const sponsorsSection = document.querySelector("#sponsors");
const sponsorsContainer = document.querySelector("#sponsors .container");
let animationIsRunning = false;
let sponsorsClone = null;

const animationBreakpoint = 2635;

const onWindowResize = () => {
	if (window.innerWidth < animationBreakpoint && !animationIsRunning) {
		sponsorsContainer.classList.add("animation");
		if(!sponsorsClone) {
			sponsorsClone = sponsorsContainer.cloneNode(true);
		}
		sponsorsSection.appendChild(sponsorsClone);
		sponsorsSection.style = `--container-width: -${sponsorsContainer.getBoundingClientRect().width}px`
		animationIsRunning = true;
	} else if (window.innerWidth > animationBreakpoint && animationIsRunning) {
		sponsorsSection.removeChild(sponsorsClone);
		animationIsRunning = false;
		sponsorsContainer.classList.remove("animation");
	}
}

window.addEventListener("resize", onWindowResize)

onWindowResize();