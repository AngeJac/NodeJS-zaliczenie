// Napisz program który wypisze szczegóły pliku z własnym kodem źródłowym.
// informacje:
// czas utworzenia
// czas modyfikacji
// rozmiar

const fs = require('fs')

// const data = fs.statSync(__filename)
// console.log(data)
try {
	const { birthtime, mtime, size } = fs.statSync(__filename)
	console.log(`
  Created at: ${birthtime}
  Modified at: ${mtime}
  Size: ${size} bytes`)
} catch (err) {
	console.log(err)
}
