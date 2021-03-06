import React from 'react';

const Button = ({ text, handler }) => {
	return (
			<div className="pa2 ma2">
				<button onClick={handler} className="bttn-slant bttn-lg"> {text} </button>
			</div>
		)
}

export default Button;