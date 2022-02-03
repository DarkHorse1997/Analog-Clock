const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".minute-hand")
const secondHand = document.querySelector(".second-hand")

function getHourDegree(hour) {
	return (hour * (360 / 12) + 90) % 360
}

function getDegree(value) {
	return (value * (360 / 60) + 90) % 360
}
