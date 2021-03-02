const twinkle = document.querySelector("body > h2");
const buttons = document.querySelectorAll("button");
const h2 = document.querySelector("h2");

const whait = () => {
	twinkle.classList.toggle("twinkle");
};

let interval = setInterval(() => {
	whait();
}, 800);

const endDelete = new Promise((resolve) => {
	setTimeout(() => {
		if (twinkle.classList.contains("twinkle")) {
			twinkle.classList.remove("twinkle");
		}
		clearInterval(interval);
		let text = h2.innerText;
		let counters = [0, text.length];

		const timer = setInterval(() => {
			counters[0]++;
			text = text.slice(0, -1);
			h2.innerText = text;
			if (counters[0] === counters[1]) {
				clearInterval(timer);
				interval = setInterval(() => whait(), 800);
				resolve(true);
			}
		}, 200);
	}, 5000);
});

const writeWord = async () => {
	const del = await endDelete;
	setTimeout(() => {
		if (twinkle.classList.contains("twinkle")) {
			twinkle.classList.remove("twinkle");
		}
		clearInterval(interval);
		let newText = "Care pan";
		let text = "";
		let counters = [0, newText.length];

		const timer = setInterval(() => {
			text += newText[counters[0]];
			h2.innerText = text;
			counters[0]++;
			if (counters[0] === counters[1]) {
				clearInterval(timer);
				interval = setInterval(() => whait(), 800);
				writeWord();
			}
		}, 300);
	}, 2000);
};

writeWord();
