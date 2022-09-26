const flowers = [];
const flowersCount = 20;
const menuElements = document.querySelectorAll("nav li");
const menuButton = document.querySelector(".menuButton");
const menuList = document.querySelector("nav");
const backgroundContainer = document.querySelector(".backgroundContainer");


menuElements.forEach((menuElement) => {
	menuElement.addEventListener("click", (e) => {
		e.preventDefault();
		handleMenuClick(menuElement);

		// if (menuElement !== e.target) return
		// e.preventDefault();
		// handleMenuClick(e.target);
	}, true)
})

const handleMenuClick = (menuElement) => {
	menuElements.forEach((mE) => mE.classList.remove("active"));
	menuElement.classList.add("active");
	elementObject = document.getElementById(menuElement.dataset.href);

	let paddingTop = 100;

	if (window.innerWidth < 1000) {
		paddingTop = 0;
	}

	window.scrollTo({ behavior: "smooth", top: elementObject.offsetTop - paddingTop });

	if (menuList.classList.contains("active")) menuList.classList.remove("active")
}

const createMovingBackground = (i) => {
	const flower = document.createElement("div");
	flower.classList.add("flower");
	flower.classList.add(`flower-${i}`);
	startX = Math.ceil(Math.random() * 50);
	startY = Math.ceil(Math.random() * 50);
	// flower.style = `top: ${-startY}vh; left: ${-startX}vw`
	flower.style = `top: ${-startY}vh; left: ${100 + startX}vw`
	backgroundContainer.appendChild(flower);
	const randomTimeout = 100 + Math.ceil(Math.random() * 300);
	setTimeout(() => {
		const randomTimeout = 5000 + Math.ceil(Math.random() * 2000);
		// const flower = document.querySelector(`flower-${i}`)
		// flower.style = `top: ${100 + startX}vh; left: ${100 + startY}vw`
		flower.style = `transition: ${randomTimeout % 1000}; top: ${100 + startX}vh; left: ${-startY}vw;`
		setTimeout(() => {
			backgroundContainer.removeChild(flower);
			createMovingBackground(i);
		}, randomTimeout)
	}, randomTimeout)
}

for(let i = 0; i < flowersCount; i++) {
	const randomTimeout = Math.ceil(Math.random() * 400);
	setTimeout(() => {
		createMovingBackground(i);
	}, i * randomTimeout)
}

menuButton.addEventListener("click", () => {
	const isMenuSelected = menuList.classList.contains("active");

	if (isMenuSelected) {
		menuList.classList.remove("active")
	} else {
		menuList.classList.add("active")
	}

})


const tableCells = document.querySelectorAll("tbody td");


tableCells.forEach((tableCell) => {
	if (tableCell.innerHTML.length === 0 || tableCell.innerHTML.includes("0-")) return
	tableCell.addEventListener("mouseenter", (e) => {
		e.preventDefault();
		cell = e.target

		const children = cell.parentElement.children
		let time = "";
		for (let i = 0; i < children.length; i++) {
			const childNode = children[i]
			const childText = childNode.innerHTML
			if (childText.includes("0-")) {
				time = childText;
				break;
			}
		}
		if (tableCell === cell)
			addTimeToCell(cell, time);
	}, true)
	tableCell.addEventListener("mouseleave", (e) => {
		e.preventDefault();
		cell = e.target
		const times = cell.querySelector("span")
		cell.removeChild(times);
	})
})

const addTimeToCell = (cell, time) => {
	const timeSpan = document.createElement("span");
	const rowSpan = parseInt(cell.attributes.rowspan.value);
	let h = Math.floor(rowSpan / 2)
	const min = rowSpan % 2
	const eventTimeArr = time.split("-")
	const startH = parseInt(eventTimeArr[0].split(":")[0])
	const startMin = parseInt(eventTimeArr[0].split(":")[1])
	let endMin = startMin;
	if (min !== 0 && startMin !== 0) {
		h++;
		endMin = 0;
	}
	const evenTime = `${startH}:${startMin === 0 ? "00" : startMin}-${startH+h}:${endMin === 0 ? "00" : endMin}`
	timeSpan.innerHTML = evenTime;
	cell.appendChild(timeSpan);
}