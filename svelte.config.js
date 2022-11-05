import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/lib/components',
			$styles: './src/lib/styles',
			$scripts: './src/lib/scripts',
			$stores: './src/lib/stores'
		}
	}
};

export default config;
