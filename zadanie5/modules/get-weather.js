const axios = require('axios')

async function getWeather(location) {
	try {
		const { data } = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${location}`
		)

		return data.weather.map(({ main, description }) => ({
			main,
			description,
		}))
	} catch (err) {
		throw new Error('Request for location failed')
	}
}

module.exports = getWeather
