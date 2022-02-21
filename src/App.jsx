import { useState } from 'react';
import logo from './logo.svg';
import './App.scss'

const App = () => {
	
	const [counter, setCounter] = useState(0)

	return (
		<div className="App">
			<h1 className="title">Hi from React!</h1>
			<div className="logo">
				<img src={logo} className="logo__img" alt="React logo"/>
				<p className="logo__txt">Write your best code!</p>
			</div>
			<div className="counter">
				<span className="counter__number">{counter} </span>	
				<button 
					className="counter__btn"
					onClick={() => setCounter(counter + 1)}
				>
					More!
				</button>
			</div>
		</div>
	)
}

export default App;
