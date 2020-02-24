import React, { useState } from 'react';
import './reset.css';
import './App.css';

function App() {

	const [binary, setBinary] = useState()
	const [decimal, setDecimal] = useState()

	function updateDecimal(event) {
		if (event === ""){
			setBinary(event)
			setDecimal(event)
			return
		}

		const regex = /^[0-1]{1,}$/g
		if (!regex.test(parseInt(event))){
			alert("Only 0 or 1 please :3")
			return
		}
		setBinary(event)
		var equivalentDecimal = 1
		var result = 0

		for(let i = event.length-1; i >= 0; i--) {
			result += parseInt(event[i]) * equivalentDecimal
			equivalentDecimal *= 2
		}
		setDecimal(result)
	}

	function updateBinary(event) {
		if (event === ""){
			setDecimal(event)
			setBinary(event)
			return
		}

		setDecimal(event)
		var total = parseInt(event)
		var reminder = ''
		while (total > 0) {
			reminder = reminder + total % 2
			total = ~~(total / 2)
		}
		setBinary(reminder.split('').reverse().join(''))
	}

 	return (
		<div className="App">
			<h1>Binary to Decimal Conversor</h1>
			<div className="container">
				<label>Binary Number</label>
				<input 
					className="binary"
					type="number"
					onChange={event => updateDecimal(event.target.value)}
					value={binary}
				/>
				
				<label>Decimal Number</label>
				<input 
					className="decimal" 
					type="number"
					onChange={event => updateBinary(event.target.value)}
					value={decimal}
				/>
				<p><i>Tip: </i>Try convert decimal to binary too! ;)</p>
			</div>
		</div>
	);
}

export default App;
