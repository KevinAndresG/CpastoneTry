import React from "react"
import ReactDOM from 'react-dom';
import "../styles/Buttons.css"
import "../styles/Info.css"
import Info from "../Info/Info"
function LogButton() {
	function DataForm () {
		ReactDOM.render(
		<Info />,
		document.getElementById('root')
		);
	}
	return (
		<button type="button" class="Login hoverLogin" onClick={DataForm}>Login</button>
	)
}

export { LogButton }
