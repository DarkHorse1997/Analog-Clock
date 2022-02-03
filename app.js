const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".minute-hand")
const secondHand = document.querySelector(".second-hand")

function getDegree(value, segments) {
	return (value * (360 / segments) + 90) % 360
}
