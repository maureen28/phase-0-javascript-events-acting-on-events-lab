let moveDodgerLeft = () => {
	var left = dodger.style.left
	left = parseInt(left)
	dodger.style.left = `${left - 1}px`;
}

let moveDodgerRight = () => {
	var left = dodger.style.left
	left = parseInt(left)
	dodger.style.left = `${left + 1}px`;
}