// Napisz aplikację która przyjmuje w parametrze uruchamiania ciąg znaków a następnie wyświetli go w kolorach tęczy
const process = require('process')
const colors = require('colors')

if (process.argv.length < 3) {
	console.log(colors.blue('za mało parametrów!'))
} else {
	const [node, colors, ...args] = process.argv
	const things = args.join(' ')
	console.log(things.rainbow)
}

// przykładowe wywołania:
// node colors.js Jest piękny dzień

// node colors.js
