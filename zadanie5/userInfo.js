// Stwórz aplikację która pobierze z GitHuba informacje o użytkowniku i jego repozytoriach.
const process = require('process')
const getUserInfo = require('./get-user-info')
const getWeather = require('./get-weather')

;(async () => {
	try {
		const username = process.argv[1]
		if (!username) {
			throw new Error('No username provided')
		}

		const { name, followers, public_repos, repoNames, location } = await getUserInfo(username)

		console.log(`Name: ${name}`)
		console.log(`Followers #${followers}`)
		console.log(`Public repos #${public_repos}`)
		console.log('Repo list:')
		console.table(repoNames)

		if (location) {
			const weather = await getWeather(location)
			console.log(`Weather for ${location}`)
			console.table(weather)
		}
	} catch (error) {
		console.log('Failed with:', error)
	}
})()
