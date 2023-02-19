// Napisz aplikację która odczyta z pliku data.json liczbę oraz nazwę pliku, a następnie:

// pobierze z API informacje o danej liczbie (http://numbersapi.com/{number}, np http://numbersapi.com/42)
// informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie

const fs = require('fs').promises
const process = require('process')
const axios = require('axios')

async function getJsonData(file) {
	let data
	try {
		data = await fs.readFile(file)
	} catch (err) {
		throw new Error(`Cannot read file ${file}`)
	}

	try {
		return JSON.parse(data)
	} catch (err) {
		throw new Error(`Cannot parse file content`)
	}
}

async function getNumberInfo(number) {
	if (isNaN(number)) {
		throw new Error('Not a number')
	}

	try {
		const response = await axios.get(`http://numbersapi.com/${number}`)
		return response.data
	} catch (err) {
		throw new Error(`API Request unsuccessful`)
	}
}

async function writeToFile(path, data) {
	if (path === '') {
		throw new Error(`File path empty`)
	}

	try {
		await fs.writeFile(path, data)
	} catch (err) {
		throw new Error(`Cannot write to file ${path}`)
	}
}

;(async () => {
	try {
		const sourceFile = process.argv[3] ?? 'data.json'
		const { number, filename } = await getJsonData(sourceFile)
		const data = await getNumberInfo(number)
		await writeToFile(filename, data)
		console.log(`Data for ${number} saved in ${filename}`)
	} catch (error) {
		console.log('Failed with:', error)
	}
})()
