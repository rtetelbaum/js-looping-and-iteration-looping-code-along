function writeCards(names, eventName) {
	const array = []
	for (let i = 0; i < names.length; i++) {
		array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
	}
	return array
}

function countDown(int) {
	while (int >= 0) {
		console.log(int)
		int--
	}
}