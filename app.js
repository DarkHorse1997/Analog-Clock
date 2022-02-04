function getDegree(value, segments) {
	return (value * (360 / segments) + 90) % 360
}

function getTime() {
	let time = new Date()
	let [hours, minutes, seconds] = [time.getHours(), time.getMinutes(), time.getSeconds()]
	updateClock(hours, minutes, seconds)
	console.log(hours, minutes, seconds)
}

function updateClock(hours, minutes, seconds) {
	const hourHand = document.querySelector(".hour-hand")
	const minuteHand = document.querySelector(".minute-hand")
	const secondHand = document.querySelector(".second-hand")
	hourHand.style.transform = `rotate(${getDegree(hours, 12)}deg)`
	minuteHand.style.transform = `rotate(${getDegree(minutes, 60)}deg)`
	secondHand.style.transform = `rotate(${getDegree(seconds, 60)}deg)`
}

setInterval(getTime, 1000)
