import "./Clock.css"
const Clock = () => {
	return (
		<main className="clock-container">
			<div className="clock">
				<div className="clock-hands hour-hand"></div>
				<div className="clock-hands minute-hand"></div>
				<div className="clock-hands second-hand"></div>
			</div>
		</main>
	)
}

export default Clock
