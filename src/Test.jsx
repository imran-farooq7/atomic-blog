import { useState } from "react";

const SlowComponent = () => {
	const words = Array.from({ length: 50000 }, () => "WORD");
	return (
		<ul>
			{words.map((word, i) => {
				return (
					<li key={i}>
						{i}: {word}
					</li>
				);
			})}
		</ul>
	);
};
const Test = () => {
	return (
		<Counter>
			<SlowComponent />
		</Counter>
	);
};
const Counter = ({ children }) => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Slow counter</h1>
			<button onClick={() => setCount((c) => c + 1)}>Increase:{count}</button>
			{children}
		</>
	);
};
export default Test;
