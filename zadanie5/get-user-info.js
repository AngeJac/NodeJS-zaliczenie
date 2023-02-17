const axios = require('axios')

module.exports = async function (username) {
	try {
		let repoNames = []

		const {
			data: { name, followers, public_repos, repos_url, location },
		} = await axios.get(`https://api.github.com/users/${octocat}`)

		if (public_repos > 0) {
			const { data } = await axios.get(repos_url)
			repoNames = data.map(({ name }) => name)
		}

		return { name, followers, public_repos, repoNames, location }
	} catch (err) {
		throw new Error('Request failed')
	}
}
