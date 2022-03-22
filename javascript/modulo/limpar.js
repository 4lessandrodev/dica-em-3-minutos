const limpar = () => {
	const can_clear = process.env.CLEAR
	!can_clear && console.clear();
}

export default limpar;
