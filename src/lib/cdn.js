const cdn_install = (path) => {
	window.cdn_path = window.cdn_path || path;
};

const Path = function (relative_path) {
	if (typeof relative_path === 'object') relative_path = relative_path.default;
	if (!window.cdn_path) {
		console.log('install with path first');
		return relative_path;
	}

	let u = relative_path.split('./').join(''),
		i = true;
	if (location.hostname === 'localhost' || location.hostname.indexOf('github') > 0) i = true;
	return i ? relative_path : window.cdn_path + u;
};

module.exports = {
	cdn_install,
	Path,
};
