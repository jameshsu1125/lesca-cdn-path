const config = {
	mode: 'cdn',
};

const messages = {
	unset: 'CDN path has not been installed. Please use [install] to set it up.',
};

const install = (path) => {
	config.path = path;
};

const path = (relativePath) => {
	const { path, mode } = config;

	const p = typeof relativePath === 'object' ? relativePath.default : relativePath;
	if (!path) {
		console.log(
			`%c[lesca-cdn-path]%c${messages.unset}`,
			'color:#fff; background-color:#42a5f5;',
			'color:#fff; background-color:#f57c00;'
		);
		return p;
	}

	switch (mode) {
		default:
		case 'cdn':
			return `${path}${p.split('./').join('')}`;

		case 'localhost':
			return p;
	}

	// ? hostname === 'localhost' || hostname.indexOf('github') > 0
};

const Path2CDN = { install, path, config };

export { install, path, config };
export default Path2CDN;
