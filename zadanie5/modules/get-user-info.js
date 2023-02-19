const axios = require('axios')

async function getUserInfo(username) {
	try {
		let repoNames = []

		const {
			data: { name, followers, public_repos, repos_url, location },
		} = await axios.get(`https://api.github.com/users/${username}`)

		if (public_repos > 0) {
			const { data } = await axios.get(repos_url)
			repoNames = data.map(({ name }) => name)
		}

		return { name, followers, public_repos, repoNames, location }
	} catch (err) {
		throw new Error('Request failed')
	}
}

module.exports.getUserInfo = getUserInfo
