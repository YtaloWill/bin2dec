import React, { useState } from 'react'
import './reset.css'
import './App.css'
import Github from './assets/icons/Github.png'
import Linkedin from './assets/icons/Linkedin.png'
import Twitter from './assets/icons/Twitter.png'

function App() {

	const [binary, setBinary] = useState()
	const [decimal, setDecimal] = useState()

	function updateDecimal(binaryNumber) {
		if (binaryNumber === ""){
			setBinary(binaryNumber)
			setDecimal(binaryNumber)
			return
		}

		const regex = /^[0-1]{1,}$/g
		if (!regex.test(parseInt(binaryNumber))){
			alert("Only 0 or 1 please :3")
			return
		}
		setBinary(binaryNumber)
		const result = parseInt(binaryNumber, 2).toString(10)
		setDecimal(result)
	}

	function updateBinary(decimalNumber) {
		if (decimalNumber === ""){
			setDecimal(decimalNumber)
			setBinary(decimalNumber)
			return
		}

		setDecimal(decimalNumber)
		decimalNumber = parseInt(decimalNumber)
		const result = (decimalNumber >>> 0).toString(2)
		setBinary(result)
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
			<div className="footer">
				<div className="content">
					<a href="https://github.com/YtaloWill" target="blank">
						<img src ={Github} alt="Github" />
					</a>
					<a href="https://www.linkedin.com/in/ytalowilliam" target="blank">
						<img src={Linkedin} alt="Linkedin" />
					</a>
					<a href="https://twitter.com/YtaloWillGloria" target="blank" >
						<img src={Twitter} alt="Twitter" />
					</a>
					  <div id="text">by YtaloWill =D</div>
				</div>
			</div>
		</div>
	);
}

export default App;
