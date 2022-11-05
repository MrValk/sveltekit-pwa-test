module.exports = {
	globDirectory: 'build/',
	globPatterns: ['**/*.{css,js,json,svg,png,html}'],
	swDest: 'build/service-worker.js',
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
};
