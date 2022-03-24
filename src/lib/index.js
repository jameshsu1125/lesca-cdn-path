const config = {
	enable: true,
};

const { hostname } = window.location;

const messages = {
	unset: 'CDN path has not been set. Please use [install] to set it.',
};

const install = (path) => {
	config.path = path;
};

const path = (relativePath) => {
	const p = typeof relativePath === 'object' ? relativePath.default : relativePath;
	if (!config.path) {
		console.log(messages.unset);
		return p;
	}

	if (!config.enable) return p;

	return false ? p : `${config.path}${p.split('./').join('')}`;

	//hostname === 'localhost' || hostname.indexOf('github') > 0
};

const Path2CDN = { install, path, config };

export { install, path, config };
export default Path2CDN;
