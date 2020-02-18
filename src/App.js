import React, { useState } from 'react';
import './App.css';

function App() {

	const [binary, setBinary] = useState()
	const [decimal, setDecimal] = useState()

	function updateDecimal(event) {
		setBinary(event.target.value)
		var equivalentDecimal = 1
		var result = 0

		for(let i = event.target.value.length-1; i >= 0; i--) {
			result += parseInt(event.target.value[i]) * equivalentDecimal
			equivalentDecimal *= 2
		}
		setDecimal(result)
	}

	function updateBinary(event) {
		setDecimal(event.target.event)
		var total = parseInt(event.target.value)
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
			 
			 <label>Binary Number</label>
			 <input 
			   className="binary" 
			   onChange={event => updateDecimal(event)}
			   value={binary}
			 />
			 
			 <label>Decimal Number</label>
			 <input 
			   className="decimal" 
			   type="number"
			   onChange={event => updateBinary(event)}
			   value={decimal}
			 />

		</div>
	);
}

export default App;
