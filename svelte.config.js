import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: staticAdapter({
			// The fallback parameter is required for SPA routing to work properly.
			fallback: 'index.html'
		}),
		// target: '#svelte',  // Remove or comment out this line
	}
};

export default config;
