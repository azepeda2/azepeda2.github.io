var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setUpButtons();
	setUpSquares();
	reset();
}

function setUpButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if (this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}

			//same as: this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			reset();
		});
	}

	resetButton.addEventListener("click", function() {
		reset();
	});
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor) {
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = pickedColor;
				changeColors(pickedColor);
			} else {
				message.textContent = "Try Again!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function changeColors(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var chosen = Math.floor(Math.random() * colors.length)
	return colors[chosen];
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	message.textContent = " ";
	resetButton.textContent = "New Colors";

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
}