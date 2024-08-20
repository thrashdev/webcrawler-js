const { log, error } = require('console')
function normalizeUrl(urlString) {
	const url = new URL(urlString)
	const host = url.host
	let pathname = url.pathname
	const lastChar = pathname.charAt(pathname.length - 1)
	if (lastChar === '/') {
		pathname = pathname.slice(0, -1);
	}
	const result = host + pathname
	log(result)
	return result
}



module.exports = { normalizeUrl };
